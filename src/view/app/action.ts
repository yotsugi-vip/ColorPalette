import { AnyAction } from "redux";

/**
 * Action Type
 */
export const PUSH_COLORS = 'PUSH_COLORS';
export const ADD_COLOR = 'ADD_COLOR';
export const DELETE_COLOR = 'DELETE_COLOR';

export interface IPushColorsAction extends AnyAction {
    payload: Array<string>
    index?: number
}

/**
 * Push Colors
 * @param colors Add Color Codes
 */
export function PushColors(colors: Array<string>): IPushColorsAction {
    return {
        type: PUSH_COLORS,
        payload: colors
    };
}

/**
 * Add Color
 * @param value Add Color Code
 */
export function AddColor(value: string): IPushColorsAction {
    return {
        type: ADD_COLOR,
        payload: [value]
    };
}

/**
 * Delete Color
 * @param value Delete Color Code
 * @param index Delete Color Code Index
 */
export function DeleteColor(value: string, index: number): IPushColorsAction {
    return {
        type: DELETE_COLOR,
        payload: [value],
        index: index
    };
}

export const SET_HEX = 'SET_HEX';
export const SET_RED = 'SET_RED';
export const SET_GREEN = 'SET_GREEN';
export const SET_BLUE = 'SET_BLUE';
export interface ISetRgbValue extends AnyAction {
    payload: string
}

export function SetRgbValue_HEX(value: string): ISetRgbValue {
    return {
        type: SET_HEX,
        payload: value
    };
}

export function SetRgbValue_RED(value: string): ISetRgbValue {
    return {
        type: SET_RED,
        payload: value
    };
}

export function SetRgbValue_GREEN(value: string): ISetRgbValue {
    return {
        type: SET_GREEN,
        payload: value
    };
}

export function SetRgbValue_BLUE(value: string): ISetRgbValue {
    return {
        type: SET_BLUE,
        payload: value
    };
}
