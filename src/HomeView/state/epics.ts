import {EpicActions} from "AppTypes"
import {combineEpics} from "redux-observable";
import {isOfType} from "typesafe-actions";
import {HOME_ACTIONS} from "./constants";
import {filter, ignoreElements, tap} from "rxjs/operators";

const homeDidMount$:EpicActions = action$ => action$.pipe(
	filter(isOfType(HOME_ACTIONS.HOME_MOUNNTED)),
	tap(action=>console.log(action.type)),
	ignoreElements()

)

const homeEpics = combineEpics(
	homeDidMount$
)
export default homeEpics
