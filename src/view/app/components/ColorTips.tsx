import *  as React from "react";
import { Component } from "react";

const regex = new RegExp("^#[0-9A-Fa-f]{6}")
interface IProps { colorCode: string };
interface IState { colorCode: string };
export class ColorTips extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            colorCode: regex.test(props.colorCode) ? props.colorCode : "#FFFFFF"
        };
    }

    private blackOrWhite(colorCode: string): string {
        let red = parseInt(colorCode.substr(1, 2));
        let green = parseInt(colorCode.substr(3, 2));
        let blue = parseInt(colorCode.substr(5, 2));
        let brightness = ((red * 299) + (green * 587) + (blue * 114)) / 1000;
        return brightness < 140 ? "#FFFFFF" : "#000000";
    }

    render() {
        return (
            <>
                <div style={{
                    margin: 0,
                    width: "70px",
                    height: "100%"
                }}>
                    <div style={{
                        backgroundColor: this.props.colorCode,
                        borderRadius: "5px",
                        textAlign: "center",
                    }}>
                        <p style={{
                            margin: "0",
                            color: this.blackOrWhite(this.props.colorCode)
                        }}>
                            {this.props.colorCode}
                        </p>
                    </div>
                </div>
            </>
        );
    }
}