import { createStore, combineReducers } from "redux";
import { colorsReducer, rgbValueReducer } from "./reducer";
export const reducer = combineReducers({
    colorsReducer,
    rgbValueReducer
});

export const store = createStore(reducer);