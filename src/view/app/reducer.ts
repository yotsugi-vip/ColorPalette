import { PUSH_COLORS, PUSH_COLORS_ACTION, SET_RGB_VALUE, SET_HEX, SET_RED, SET_GREEN, SET_BLUE } from "./action";
import { AnyAction } from "redux";
import { stat } from "fs";

/**
 * favorite color save
 */
interface ISTATE_COLORS { colors: Array<string> }
const INITIALIZE_COLORS: ISTATE_COLORS = {
    colors: ["initialize"]
}

export function colorsReducer(state: ISTATE_COLORS = INITIALIZE_COLORS, action: PUSH_COLORS_ACTION) {
    switch (action.type) {
        case PUSH_COLORS:
            console.log("COMMAND:", action.type);
            console.log("STATE:", state.colors, "->", action.payload);
            let data = Object.assign({}, state, {
                colors: action.payload
            });
            return data;
        default:
            return state;
    }
}

/**
 * RGB value save
 */
interface ISTATE_RGB_VALUE { hex: string, red: string, blue: string, green: string };
const INITIALIZE_RGB_VALUE: ISTATE_RGB_VALUE = {
    hex: "000000",
    red: "0",
    green: "0",
    blue: "0"
}

export function rgbValueReducer(state: ISTATE_RGB_VALUE = INITIALIZE_RGB_VALUE, action: SET_RGB_VALUE) {
    switch (action.type) {
        case SET_HEX:
            return Object.assign({}, state, {
                hex: action.payload
            });
        case SET_RED:
            return Object.assign({}, state, {
                red: action.payload
            });
        case SET_GREEN:
            return Object.assign({}, state, {
                green: action.payload
            });
        case SET_BLUE:
            return Object.assign({}, state, {
                blue: action.payload
            });
        default:
            return state;
    }
}