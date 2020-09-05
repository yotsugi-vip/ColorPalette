import * as React from 'react';
import { useState } from "react";
import Slider from "@material-ui/core/Slider";
import { ColorTips } from "./colorTips";

type redType = "red";
type greenType = "green";
type blueType = "blue";
type RGB = redType | greenType | blueType;

interface IProps_RgbHexSearch { }
interface IState_RgbHexSearch {
    Hex: string,
    R: string,
    G: string,
    B: string
}


export function RgbComponent(color: RGB) {

    const [value, setValue] = useState("0");

    return (
        <div>
            <div style={{
                display: "flex",
            }}>
                <input type="text" />
                <ColorTips hex="" />
            </div>
            <Slider
                max={255} min={0}
            />
        </div>
    )
}