import *  as React from "react";
import { Component } from "react";

const colorNumbers: Array<string> = [
    "#000000",
    "#f0f8ff",
    "#008b8b",
    "#ffffe0",
    "#ff7f50",
    "#696969",
    "#e6e6fa",
    "#008080",
    "#fafad2",
    "#ff6347",
    "#808080",
    "#b0c4de",
    "#2f4f4f",
    "#fffacd",
    "#ff4500",
    "#a9a9a9",
    "#778899",
    "#006400",
    "#f5deb3",
    "#ff0000",
    "#c0c0c0",
    "#708090",
    "#008000",
    "#deb887",
    "#dc143c",
    "#d3d3d3",
    "#4682b4",
    "#228b22",
    "#d2b48c",
    "#c71585",
    "#dcdcdc",
    "#4169e1",
    "#2e8b57",
    "#f0e68c",
    "#ff1493",
    "#f5f5f5",
    "#191970",
    "#3cb371",
    "#ffff00",
    "#ff69b4",
    "#ffffff",
    "#000080",
    "#66cdaa",
    "#ffd700",
    "#db7093",
    "#fffafa",
    "#00008b",
    "#8fbc8f",
    "#ffa500",
    "#ffc0cb",
    "#f8f8ff",
    "#0000cd",
    "#7fffd4",
    "#f4a460",
    "#ffb6c1",
    "#fffaf0",
    "#0000ff",
    "#98fb98",
    "#ff8c00",
    "#d8bfd8",
    "#faf0e6",
    "#1e90ff",
    "#90ee90",
    "#daa520",
    "#ff00ff",
    "#faebd7",
    "#6495ed",
    "#00ff7f",
    "#cd853f",
    "#ff00ff",
    "#ffefd5",
    "#00bfff",
    "#00fa9a",
    "#b8860b",
    "#ee82ee",
    "#ffebcd",
    "#87cefa",
    "#7cfc00",
    "#d2691e",
    "#dda0dd",
]

export default class Hoge extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return <>
            <div style={{
                float: "left"
            }}>
                {colorNumbers.map((colorCode, i) => (
                    <ColorTips key={i} colorCode={colorCode} />
                ))}
            </div>
        </>;
    }

}

const regex = new RegExp("^#[0-9abcdefABCDEF]{6}$")
interface IProps { colorCode: string };
interface IState { colorCode: string };
export class ColorTips extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            colorCode: regex.test(props.colorCode) ? props.colorCode : "#FFFFFF"
        };
    }

    private __blackOrWhite(colorCode: string): string {
        let red = parseInt(colorCode.substr(1, 2));
        let green = parseInt(colorCode.substr(3, 2));
        let blue = parseInt(colorCode.substr(5, 2));
        let brightness = ((red * 299) + (green * 587) + (blue * 114)) / 1000;
        return brightness < 125 ? "#FFFFFF" : "#000000";
    }

    render() {
        return (
            <>
                <div style={{
                    margin: 0,
                    height: "25px",
                    width: "70px",
                }}>
                    <div style={{
                        backgroundColor: this.props.colorCode,
                        textAlign: "center",
                        verticalAlign: "center"
                    }}>
                        <p style={{
                            color: this.__blackOrWhite(this.props.colorCode)
                        }}>
                            {this.props.colorCode}
                        </p>
                    </div>
                </div>
            </>
        );
    }
}