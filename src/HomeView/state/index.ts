import homeReducer from "./reducer"
import * as homeActions from './actions'
import {HomeViewState} from "./model";


export type HomeActions = typeof homeActions

export type ClosetState = {
	liked:HomeViewState
}
export default homeReducer
