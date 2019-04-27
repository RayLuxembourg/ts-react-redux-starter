declare module "AppTypes" {
  import RootActions from "./root-action";
  import RootReducer from "./root-reducer";
  import Store from "./index";
  import { ActionType, StateType } from "typesafe-actions";
  import { Epic } from "redux-observable";

  export type EpicActions = Epic<RootAction, RootAction, RootState>

  export type RootAction = ActionType<typeof RootActions>;
  export type RootState = StateType<typeof RootReducer>;
  export type Store = StateType<typeof Store>;

}
