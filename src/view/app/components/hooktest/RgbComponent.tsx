import * as React from 'react';
import { useState } from "react";
import Slider from "@material-ui/core/Slider";
import { ColorTips } from "./colorTips";

type redType = "red";
type greenType = "green";
type blueType = "blue";
type RGB = redType | greenType | blueType;

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

interface P { color: RGB }
export function RgbComponent(props: P) {
    const [value, setValue] = useState("0");
    return (
        <div>
            <div style={{ display: "flex" }}>
                <input type="text" value={value} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)} />
                <ColorTips hex={getHexfromRgb(value, props.color)} />
            </div>
            <Slider
                max={255} min={0}
                value={parseInt(value, 10)}
                onChange={(_event: React.ChangeEvent<{}>, value: number | number[]) => setValue(value.toString())}
            />
        </div>
    )
}