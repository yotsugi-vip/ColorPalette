import { AnyAction } from "redux";

/**
 * Action Type
 */
export const PUSH_COLORS = 'PUSH_COLORS';
export interface PUSH_COLORS_ACTION extends AnyAction {
    payload: Array<string>
}

/**
 * Action Creator
 */
export function PushColors(colors: Array<string>): PUSH_COLORS_ACTION {
    return {
        type: PUSH_COLORS,
        payload: colors
    }
}

export const SET_HEX = 'SET_HEX';
export const SET_RED = 'SET_RED';
export const SET_GREEN = 'SET_GREEN';
export const SET_BLUE = 'SET_BLUE';
export interface SET_RGB_VALUE extends AnyAction {
    payload: string
}

export function SetRgbValue_HEX(value: string): SET_RGB_VALUE {
    return {
        type: SET_HEX,
        payload: value
    }
}

export function SetRgbValue_RED(value: string): SET_RGB_VALUE {
    return {
        type: SET_RED,
        payload: value
    }
}

export function SetRgbValue_GREEN(value: string): SET_RGB_VALUE {
    return {
        type: SET_GREEN,
        payload: value
    }
}

export function SetRgbValue_BLUE(value: string): SET_RGB_VALUE {
    return {
        type: SET_BLUE,
        payload: value
    }
}
