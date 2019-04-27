import userReducer from "../shared/stores/user";

// initial reducers which needed in all views.
export const staticReducers = {
  authentication: userReducer,
};
