import { App } from "../../app";

declare module ZeekitStore {
  export type Simulation = {
    loading: boolean
    products: number[]
    imageId: number
    background: number
    prevSimulation: number[]
    tuck: App.Tuck
    saved: boolean
    saveLoading: boolean
  }

  export type Notification = {
    display: boolean
    message: string
  }

  export type StaticConfig = {
    [key: string]: {
      [key: string]: {
        models: number[],
        products: {
          [key: string]: number[]
        },
        background: number
      }
    }
  }
  export type SelectedStaticConfig = {
    models: number[],
    products: {
      [key: string]: number[]
    },
    background: number
  }


}
