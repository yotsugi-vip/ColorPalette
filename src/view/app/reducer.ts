import { AnyAction } from "redux";
import { PUSH_COLORS, PUSH_COLORS_ACTION } from "./action";
import { useStore } from "react-redux";

interface IState { colors: Array<string> }
const initialState: IState = {
    colors: ["initialize"]
}

export function colorsReducer(state: IState = initialState, action: PUSH_COLORS_ACTION) {
    switch (action.type) {
        case PUSH_COLORS:
            console.log(action.type);
            console.log(action.payload);
            let data = Object.assign({}, state, {
                colors: action.payload
            });
            return data;
        default:
            return state;
    }
}