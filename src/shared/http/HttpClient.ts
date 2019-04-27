import { from, Observable, throwError, defer, of } from "rxjs"
import { finalize, map, mergeMap } from "rxjs/operators"
export class HttpClient {
  interceptors: Interceptor[] = [new FinalInterceptor()]
  jsonPipe = mergeMap((res: Response) => {
    return res.json()
  })
  
  private _appendParams(urlObj:URL, params = {}){
    Object.keys(params).forEach(key => {
      const value = params[key]
      if (typeof value === "object") {
        value.forEach(val => {
          urlObj.searchParams.append(key, val)
        })
      } else {
        urlObj.searchParams.append(key, params[key] as string)
      }
    })
    return urlObj
  }
  
  private _buildUrl({search,pathname,href}:URL):string{
    if(pathname.includes('zeekit') || pathname.includes('v3')){
      return href + search
    }else{
      return pathname + search
    }
  }

  addInterceptor(interceptor: Interceptor) {
    this.interceptors.unshift(interceptor)
    return this
  }

  
  get<T>(
    url,
    options: { params?: { [key: string]: any } } = {params:{}}
  ): Observable<T> {
    const controller = new AbortController()
    const signal = controller.signal

    let index = 0
    let urlObj = new URL(url, window.location.origin)
    urlObj = this._appendParams(urlObj,options.params)

    return this.interceptors[index]
      .process(
        this._buildUrl(urlObj),
        {
          method: "GET",
          signal
        },
        () => {
          index++
          return this.interceptors[index]
        }
      )
      .pipe(
        this.jsonPipe,
        finalize(() => controller.abort())
      )
  }

  observe<T, R>(
    url,
    options: { params?: { [key: string]: string | any[] } } = {},
    mapping: (res: Response, data: T) => R
  ): Observable<R> {
    let index = 0
    let urlObj = new URL(url, window.location.origin)
    urlObj = this._appendParams(urlObj,options.params)
    console.log(urlObj)
    return this.interceptors[index]
      .process(
        this._buildUrl(urlObj),
        {
          method: "GET"
        },
        () => {
          index++
          return this.interceptors[index]
        }
      )
      .pipe(
        mergeMap(response =>
          from(response.json()).pipe(map(data => mapping(response, data)))
        )
      )
  }

  blob(
    url,
    options: { params?: { [key: string]: any } } = {}
  ): Observable<Blob> {
    let index = 0
    let urlObj = new URL(url, window.location.origin)
    urlObj = this._appendParams(urlObj,options.params)
    return this.interceptors[index]
      .process(
        this._buildUrl(urlObj),
        {
          method: "GET"
        },
        () => {
          index++
          return this.interceptors[index]
        }
      )
      .pipe(mergeMap(res => res.blob()))
  }

  post<T>(url, body: { [key: string]: any }): Observable<T> {
    let index = 0
    return this.interceptors[index]
      .process(
        url,
        {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "content-type": "application/json"
          }
        },
        () => {
          index++
          return this.interceptors[index]
        }
      )
      .pipe(this.jsonPipe)
  }
}

export interface Interceptor {
  process(
    url: string,
    request: RequestInit,
    next: () => Interceptor
  ): Observable<Response>
}

export class FinalInterceptor implements Interceptor {
  process(url: string, request: RequestInit, next: () => Interceptor) {
    if(url.includes('undefined')){
      console.warn('undefined detected inside url')
    }
    return defer(() => fetch(url, request)).pipe(
      mergeMap(response => {
        if (response.status >= 400) {
          console.log("response status", response.statusText)
          return throwError(new Error("Failed"))
        }
        return of(response)
      })
    )
  }
}
