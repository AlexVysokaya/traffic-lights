import { combineReducers, createStore } from "redux";
import { reducer } from "./reducer.js";

let reducers = combineReducers({
  reducer: reducer,
})

export let store = createStore(reducers)


