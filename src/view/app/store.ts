import { createStore, combineReducers } from "redux";
import { colorsReducer, rgbValueReducer, IStateColors, IStateRgbValue } from "./reducer";
import { createSelectorHook } from "react-redux";
export const reducer = combineReducers({
    colorsReducer,
    rgbValueReducer
});

export const store = createStore(reducer);
export interface ISTORE {
    colorsReducer: IStateColors
    rgbValueReducer: IStateRgbValue
}