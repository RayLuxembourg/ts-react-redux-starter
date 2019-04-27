import { Reducer } from "../../../typings/redux";
import store from "../../store";

export const InjectReducer = (name: string, reducer: Reducer) => {

  // @ts-ignore
  store.injectReducer(name, reducer);

  return (wrappedComponent) => wrappedComponent;

};
