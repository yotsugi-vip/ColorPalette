import { createStore } from "redux";
import { colorsReducer } from "./reducer";
export const store = createStore(colorsReducer);