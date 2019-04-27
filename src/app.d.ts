export declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function
  }
}

declare module App {
  type Section = "top" | "bottom"

  interface MixProducts {
    section: Section
    products: number[]
  }

  interface MenuItem {
    count: number
    type: string
    displayName: string
    id: number
    name: string
    display: boolean
    updatedAt: Date
    createdAt: Date
    womanImageUrl: string
    manImageUrl: string
    imageUrl: string
    gender: string
    parentId?: number
  }

  interface Demo {
    products: MixProducts[]
    background: number
    models: number[]
  }

  type Tuck = "IN" | "OUT"

  interface User {
    id: number
    facebookId?: string
    googleId?: string
    username?: string
    password?: string
    timezone?: number
    activeImageId?: number
    apiflavorId?: number
    updatedAt?: string
    createdAt?: string
    companyId?: number
    title?: string
    displayName?: string
    imageIds?: number[]
    facebookToken?: string
    googleToken?: string
    profileImageUrl?: string
  }

  type ProductCategory =
    | "Tank Tops"
    | "Outfits"
    | "Dresses"
    | "Rompers"
    | "Sleeves"
    | "Sleeves"
    | "Tops"
    | "Sweaters"
    | "Coats"
    | "Pants"
    | "Shorts"
    | "Skirts"
    | "Bags"
    | "Accessories"
    | "Jewelry"
    | "Hats"
    | "Shoes"
    | "Short Sleeves"
    | "Long Sleeves"
    | "Jackets Coats"
    | "Jeans"
    | "Shirts"
    | "Jackets"
    | "Dress Shirts"
    | "Dress Pants"

  type Gender = "MAN" | "WOAMN"

  interface Product {
    id: number
    category: ProductCategory
    siteUrl: string
    name: string
    available: boolean
    minPrice: number
    maxPrice: number
    salePrice?: number
    gender: Gender
    displayImageUrl: string
    brandImageUrl: string
    imageUrl: string
    sale: any
    components: number[]
    externalId?: string
    basePrice?: string
  }

  interface MixContext {
    baseWidth?: number
    containerWidth?: number
    baseHeight?: number
    containerHeight?: number
    imageId?: number
    onIndex?: (section: App.Section, index: number) => void
    onDrag?: (state: boolean) => void
    shouldHide?: boolean
    background?: number
    ghostMsg: ReplaySubject<GhostMessage>
  }

  interface GhostMessage {
    shouldHide: boolean
    top?: number
    bottom?: number
    callback?: () => void
  }

  export type IOSCommunicationTypes =
    | setLocale
    | setUserImageIds
    | setUser
    | setActiveImageId
    | setSimulationSaved
    | setSimulationUnsaved

  interface setUser {
    name: "setUser"
    username: string
    password: string
  }

  interface setUserImageIds {
    name: "setUserImageIds"
    imageIds: number[]
  }

  interface setActiveImageId {
    name: "setActiveImageId"
    imageId: number
  }

  interface setLocale {
    name: "setLocale"
    usesMetricSystem: boolean
  }

  interface setSimulationSaved {
    name: "setSimulationSaved"
    productIds: number[]
    imageId: number
    backgroundId: number
  }

  interface setSimulationUnsaved extends setSimulationSaved {
    name: "setSimulationUnsaved"
  }

  type WomanProductsCategories = "Tops" | "Pants" | "Skirts" | "Dresses"
}

export type RootCategoryId = "1" | "118" | "16904" | "32147" | "26846"

declare global {
  interface Window {
    zeekitBridge: (
      json: object,
      callback?: (error: string, result: any) => void
    ) => void
    zeekitNavigate: (path: string) => void
    didFinishRootLoading: boolean
  }

  interface Array {
    equals: (array: any[]) => boolean
  }
}


// export declare module "redux" {
// 	export interface Store<S = any, A extends Action = AnyAction> {
// 		asyncReducers: any;
//
// 		injectReducer<A, B>(reducerName: string, reducer: Reducer<A, B>): any;
// 	}
// }
