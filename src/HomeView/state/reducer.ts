import { combineReducers } from "redux"
import { HOME_ACTIONS } from "./constants"
import {HomeViewActions, HomeViewState} from "./model";

const initialState = false

const homeReducer = combineReducers<HomeViewState, HomeViewActions>({
  liked:(state = initialState, action) => {
    switch (action.type) {
      case HOME_ACTIONS.TOGGLE_HEART:
        return !state
      default:
        return state
    }
  }
})
export default homeReducer
