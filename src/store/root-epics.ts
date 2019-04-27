import { combineEpics } from "redux-observable";

// initial epics which needed in all views.
const rootEpics = combineEpics();

export default rootEpics;
