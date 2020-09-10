import { PUSH_COLORS, IPushColorsAction, ISetRgbValue, SET_HEX, SET_RED, SET_GREEN, SET_BLUE, ADD_COLOR, DELETE_COLOR, } from "./action";
import { getRgbFromHex, UpdateHex } from "./color";
import { vscode } from "./vscodeapi";
/**
 * favorite color save
 */
export interface IStateColors { colors: Array<string> }
const INITIALIZE_COLORS: IStateColors = {
    colors: ["initialize"]
};

export function colorsReducer(state: IStateColors = INITIALIZE_COLORS, action: IPushColorsAction) {
    let ret = {};

    console.log('colorsReducer');
    console.log('action: ', action.type);
    console.log('value: ', action.payload);
    switch (action.type) {
        case PUSH_COLORS:
            let data = Object.assign({}, state, {
                colors: action.payload
            });
            return data;
        case ADD_COLOR:
            let add = state.colors.slice();
            add = add.concat(action.payload);
            vscode.postMessage({ command: 'saveJson', data: add });

            return Object.assign({}, state, {
                colors: add
            });
        case DELETE_COLOR:
            let del = state.colors.slice();
            del = del.filter((_value, i) => (i !== action.index));
            vscode.postMessage({ command: 'saveJson', data: del });
            return Object.assign({}, state, {
                colors: del
            });
        default:
            return state;
    }
}

/**
 * RGB value save
 */
export interface IStateRgbValue { hex: string, red: string, blue: string, green: string };
const INITIALIZE_RGB_VALUE: IStateRgbValue = {
    hex: "000000",
    red: "0",
    green: "0",
    blue: "0"
};

export function rgbValueReducer(state: IStateRgbValue = INITIALIZE_RGB_VALUE, action: ISetRgbValue) {
    console.log('rgbValueReducer');
    console.log('action: ', action.type);
    console.log('value: ', action.payload);
    switch (action.type) {
        case SET_HEX:
            return Object.assign({}, state, {
                hex: action.payload,
                red: getRgbFromHex(action.payload, "red"),
                green: getRgbFromHex(action.payload, "green"),
                blue: getRgbFromHex(action.payload, "blue")
            });
        case SET_RED:
            return Object.assign({}, state, {
                hex: UpdateHex(action.payload, state.hex, "red"),
                red: action.payload
            });
        case SET_GREEN:
            return Object.assign({}, state, {
                hex: UpdateHex(action.payload, state.hex, "green"),
                green: action.payload
            });
        case SET_BLUE:
            return Object.assign({}, state, {
                hex: UpdateHex(action.payload, state.hex, "blue"),
                blue: action.payload
            });
        default:
            return state;
    }
}