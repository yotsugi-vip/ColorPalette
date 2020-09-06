import { AnyAction } from "redux";
import { PUSH_COLORS } from "./action";
import { useStore } from "react-redux";

interface IState { colors: Array<string> }
const initialState: IState = {
    colors: ["initialize"]
}

export function colorsReducer(state: IState = initialState, action: AnyAction) {
    switch (action.type) {
        case PUSH_COLORS:
            console.log(action);
            let data = Object.assign({}, state, {
                colors: action.payload
            });
            return data;
        default:
            return state;
    }
}