import { Observable } from "rxjs"
import { HttpClient, Interceptor } from "../shared/http/HttpClient"

export class CustomInterceptor implements Interceptor {
  process(
    url: string,
    request: RequestInit,
    next: () => Interceptor
  ): Observable<Response> {

    let user
    try {
      user = JSON.parse(localStorage.user)
    } catch (e) {
      console.warn("No user found")
    }
    const headers = new Headers()
    headers.append("Custom-Header", 'hello-header')
    if (user) {
      headers.append(
        "Authorization",
        "Basic " + btoa(`${user.username}:${user.password}`)
      )
    }

    // tslint:disable-next-line
    for (const header in request.headers) {
      // @ts-ignore
      headers.append(header, request.headers[header])
    }
    request.headers = headers

    return next().process(url, request, next)
  }
}

export const API = new HttpClient().addInterceptor(new CustomInterceptor())
