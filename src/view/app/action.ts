import { Action } from "redux";

/**
 * Action Type
 */
// TODO action 型?
export const PUSH_COLORS = 'PUSH_COLORS';
interface PUSH_COLORS_ACTION {
    action: string
    payload: Array<string>
};

/**
 * Action Creator
 */
export function PushColors(colors: Array<string>): PUSH_COLORS_ACTION {
    return {
        action: PUSH_COLORS,
        payload: colors
    }
}