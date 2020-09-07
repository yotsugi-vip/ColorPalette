import { PUSH_COLORS, PUSH_COLORS_ACTION, SET_RGB_VALUE, SET_HEX, SET_RED, SET_GREEN, SET_BLUE } from "./action";
import { getHexFromRgb, getRgbFromHex, UpdateHex } from "./color";
import { uptime } from "process";
/**
 * favorite color save
 */
export interface ISTATE_COLORS { colors: Array<string> }
const INITIALIZE_COLORS: ISTATE_COLORS = {
    colors: ["initialize"]
}

export function colorsReducer(state: ISTATE_COLORS = INITIALIZE_COLORS, action: PUSH_COLORS_ACTION) {
    switch (action.type) {
        case PUSH_COLORS:
            console.log("A_COMMAND:", action.type);
            console.log("STATE:", state.colors, "->", action.payload);
            let data = Object.assign({}, state, {
                colors: action.payload
            });
            return data;
        default:
            console.log("A_DEFAULT_COMMAND:", action.type);
            console.log("STATE:", state.colors, "->", action.payload);
            return state;
    }
}

/**
 * RGB value save
 */
export interface ISTATE_RGB_VALUE { hex: string, red: string, blue: string, green: string };
const INITIALIZE_RGB_VALUE: ISTATE_RGB_VALUE = {
    hex: "000000",
    red: "0",
    green: "0",
    blue: "0"
}

export function rgbValueReducer(state: ISTATE_RGB_VALUE = INITIALIZE_RGB_VALUE, action: SET_RGB_VALUE) {
    switch (action.type) {
        case SET_HEX:
            console.log("B_COMMAND:", action.type);
            console.log("STATE:", state.hex, "->", action.payload);
            return Object.assign({}, state, {
                hex: action.payload,
                red: getRgbFromHex(action.payload, "red"),
                green: getRgbFromHex(action.payload, "green"),
                blue: getRgbFromHex(action.payload, "blue")
            });
        case SET_RED:
            console.log("B_COMMAND:", action.type);
            return Object.assign({}, state, {
                hex: UpdateHex(action.payload, state.hex, "red"),
                red: action.payload
            });
        case SET_GREEN:
            console.log("B_COMMAND:", action.type);
            return Object.assign({}, state, {
                hex: UpdateHex(action.payload, state.hex, "green"),
                green: action.payload
            });
        case SET_BLUE:
            console.log("B_COMMAND:", action.type);
            return Object.assign({}, state, {
                hex: UpdateHex(action.payload, state.hex, "blue"),
                blue: action.payload
            });
        default:
            console.log("B_DEFAULT_COMMAND:", action.type);
            return state;
    }
}