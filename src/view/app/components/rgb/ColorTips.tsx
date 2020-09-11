import * as React from 'react';
import { RemoveSharp } from "../../color";
function blackOrWhite(colorCode: string): string {
    let red = parseInt(colorCode.substr(1, 2));
    let green = parseInt(colorCode.substr(3, 2));
    let blue = parseInt(colorCode.substr(5, 2));
    let brightness = ((red * 299) + (green * 587) + (blue * 114)) / 1000;
    return brightness < 125 ? "#FFFFFF" : "#000000";
}

interface IPropsColorTips { hex: string };
export function ColorTips(props: IPropsColorTips = { hex: "000000" }) {
    props.hex = RemoveSharp(props.hex);

    return (
        <div>
            <div style={{
                backgroundColor: "#" + props.hex,
                marginLeft: "10px",
                width: "80px",
                textAlign: "center",
                borderRadius: "5px",
            }} id="aiueo">
                <p style={{
                    color: blackOrWhite("#" + props.hex),
                    margin: 0,
                }}
                >
                    {`#${props.hex}`}
                </p>
            </div>
        </div>
    );
}