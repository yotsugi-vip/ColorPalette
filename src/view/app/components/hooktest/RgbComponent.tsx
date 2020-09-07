import * as React from 'react';
import Slider from "@material-ui/core/Slider";
import { ColorTips } from "./colorTips";
import { SetRgbValue_RED, SetRgbValue_GREEN, SetRgbValue_BLUE } from "../../action";
import { useDispatch, useSelector } from "react-redux";
import { ISTORE } from "../../store";
import { Dispatch } from 'redux';


type redType = "red";
type greenType = "green";
type blueType = "blue";
type RGB = redType | greenType | blueType;

const dispatchRgb = (color: RGB, value: string, dispatch: Dispatch<any>) => {
    switch (color) {
        case "red":
            dispatch(SetRgbValue_RED(value));
            break;
        case "green":
            dispatch(SetRgbValue_GREEN(value));
            break;
        case "blue":
            dispatch(SetRgbValue_BLUE(value));
            break;
        default:
            break;
    }
}

const getStoreVal = (store: ISTORE, color: RGB) => {
    switch (color) {
        case "red":
            return store.rgbValueReducer.red;
        case "green":
            return store.rgbValueReducer.green;
        case "blue":
            return store.rgbValueReducer.blue;
        default:
            return store.rgbValueReducer.red;
    }
}

function getHexfromRgb(value: string, color: RGB) {
    let ret: string = "000000";
    let hex = ('00' + parseInt(value, 10).toString(16)).slice(-2);
    if (color === 'red') {
        ret = `${hex}0000`
    } else if (color === 'green') {
        ret = `00${hex}00`
    } else if (color === 'blue') {
        ret = `0000${hex}`
    }
    return ret;
}

interface IPROPS_RGB_COMPONENT { color: RGB }
export function RgbComponent(props: IPROPS_RGB_COMPONENT) {
    const dispatch = useDispatch();
    const store = useSelector<ISTORE, ISTORE>(state => state);
    return (
        <div>
            <div style={{ display: "flex" }}>
                <input type="text" value={getStoreVal(store, props.color)}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => dispatchRgb(props.color, event.target.value, dispatch)}
                />
                <ColorTips hex={getHexfromRgb(getStoreVal(store, props.color), props.color)} />
            </div>
            <Slider
                max={255} min={0}
                value={parseInt(getStoreVal(store, props.color), 10)}
                onChange={(_event: React.ChangeEvent<{}>, value: number | number[]) => dispatchRgb(props.color, value.toString(), dispatch)}
            />
        </div>
    )
}