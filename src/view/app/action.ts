import { AnyAction } from "redux";

/**
 * Action Type
 */
// TODO action 型?
export const PUSH_COLORS = 'PUSH_COLORS';
export interface PUSH_COLORS_ACTION extends AnyAction {
    payload: Array<string>
};

/**
 * Action Creator
 */
export function PushColors(colors: Array<string>): PUSH_COLORS_ACTION {
    return {
        type: PUSH_COLORS,
        payload: colors
    }
}