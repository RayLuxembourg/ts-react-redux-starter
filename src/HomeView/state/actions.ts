import { action } from "typesafe-actions"
import { HOME_ACTIONS } from "./constants"
export const toggleHeartState = () =>
  action(HOME_ACTIONS.TOGGLE_HEART)
export const homeDidMount = () =>
	action(HOME_ACTIONS.HOME_MOUNNTED)