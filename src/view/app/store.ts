import { createStore, combineReducers } from "redux";
import { colorsReducer, rgbValueReducer, ISTATE_COLORS, ISTATE_RGB_VALUE } from "./reducer";
import { createSelectorHook } from "react-redux";
export const reducer = combineReducers({
    colorsReducer,
    rgbValueReducer
});

export const store = createStore(reducer);
export interface ISTORE {
    colorsReducer: ISTATE_COLORS
    rgbValueReducer: ISTATE_RGB_VALUE
}