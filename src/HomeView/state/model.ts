import * as actions from "./actions"
import { ActionType } from "typesafe-actions"

export type ClosetCategories = "Tops" | "Pants" | "Skirts" | "Dresses"

export type HomeViewState = {
  liked:boolean
}
export type HomeViewActions = ActionType<typeof actions>


