import * as React from 'react';
import { Component } from 'react';
import { ColorTips } from './ColorTips';
import Slider from '@material-ui/core/Slider';

interface IState { hex_code: string, red: number, green: number, blue: number };
export default class EasySearch extends Component {
    state: IState;
    constructor(props: any) {
        super(props);
        this.state = {
            hex_code: "#FFFFFF",
            red: 255,
            green: 255,
            blue: 255
        }
    }

    private rgbToHex = (num: number): string => {
        let ret = "00";
        ret = (ret + num.toString(16)).slice(-2);
        return ret;
    }

    private NowState = () => {
        console.log("RED:", this.state.red);
        console.log("GREEN:", this.state.green);
        console.log("BLUE:", this.state.blue);
        console.log("HEX:", this.state.hex_code);
    }

    hexChange = (hex: string): void => {
        this.setState({
            hex_code: hex
        }, () => {
            this.setState({
                red: parseInt(this.state.hex_code.substr(1, 2), 16),
                green: parseInt(this.state.hex_code.substr(3, 2), 16),
                blue: parseInt(this.state.hex_code.substr(5, 2), 16)
            }, this.NowState);
        })
    }

    rgbChange = (r: number, g: number, b: number): void => {
        this.setState({
            red: r,
            green: g,
            blue: b
        }, () => {
            this.setState({
                hex_code: `#${this.rgbToHex(this.state.red)}${this.rgbToHex(this.state.green)}${this.rgbToHex(this.state.blue)}`
            }, this.NowState);
        });
    }

    render() {
        return <>
            <InputHex hex_code={this.state.hex_code} setHexFunc={this.hexChange} />
            <InputRgb red={this.state.red} green={this.state.green} blue={this.state.blue} setRgbFunc={this.rgbChange} />
        </>
    }
}

/**
 * Hex値の入力欄
 */
const regHex = new RegExp("^[0-9A-Fa-f]{0,6}");
interface IProps_Hex { hex_code: string, setHexFunc: (hex: string) => void };
interface IState_Hex { inputValue: string };
class InputHex extends Component<IProps_Hex, IState_Hex> {
    state: IState_Hex;
    constructor(props: IProps_Hex) {
        super(props);
        this.state = {
            inputValue: this.props.hex_code,
        }

        this.onChange = this.onChange.bind(this);
    }

    /**
    * 右側の0埋め処理
    * @param colorCode 入力途中のカラーコード
    * @param len 桁数 デフォルト7
    */
    private paddingRight(colorCode: string, len?: number) {
        if (!len) len = 7;
        for (; colorCode.length < len; colorCode += "0");
        return colorCode;
    }

    private onChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (regHex.test(event.target.value)) {
            let val = this.paddingRight(event.target.value);
            this.setState({
                inputValue: event.target.value,
            }, () => {
                this.props.setHexFunc(val);
            });
        }
    }

    render() {
        return <>
            <div>
                <div style={{ display: "flex" }}>
                    <p style={{ margin: "0" }}>
                        <label>
                            Hex:<input style={{ width: "60px" }} type="text" onChange={this.onChange} value={this.state.inputValue} />
                        </label>
                    </p>
                    <div style={{ marginLeft: "5px" }}>
                        <ColorTips colorCode={this.props.hex_code} />
                    </div>
                </div>
            </div>
        </>
    }
}

/**
 * RGB値の入力欄
 */

type RGB = "red" | "green" | "blue";
interface IProps_Rgb { red: number, green: number, blue: number, setRgbFunc: (r: number, g: number, b: number) => void }
interface IState_Rgb { red_input: string, green_input: string, blue_input: string };
class InputRgb extends Component<IProps_Rgb, IState_Rgb> {
    state: IState_Rgb;
    constructor(props: IProps_Rgb) {
        super(props);
        this.state = {
            red_input: this.props.red.toString(10),
            green_input: this.props.green.toString(10),
            blue_input: this.props.blue.toString(10),
        };
        this.onChange = this.onChange.bind(this);
    }

    private getHexfromRgb(rgb: RGB, val: number) {
        let hex = ("00" + val.toString(16)).slice(-2);
        let ret = "";
        switch (rgb) {
            case "red":
                ret = `#${hex}0000`;
                break;
            case "green":
                ret = `#00${hex}00`;
                break;
            case "blue":
                ret = `#0000${hex}`;
                break;
            default:
                ret = "#000000";
                break;
        }
        return ret;
    }


    private onChange(event: React.ChangeEvent<HTMLInputElement>): void {
        let val = parseInt(event.target.value, 10);

        if (!val) {
            val = 0;
        }
        if (val > 255) val = 255;
        if (val < 0) val = 0;

        switch (event.target.name) {
            case "Red":
                this.setState({
                    red_input: event.target.value
                }, () => {
                    this.props.setRgbFunc(val, this.props.green, this.props.blue);
                });
                break;
            case "Green":
                this.setState({
                    green_input: event.target.value,
                }, () => {
                    this.props.setRgbFunc(this.props.red, val, this.props.blue);
                });
                break;
            case "Blue":
                this.setState({
                    blue_input: event.target.value,
                }, () => {
                    this.props.setRgbFunc(this.props.red, this.props.green, val);
                });
                break;
        }
    }
    private onRedSlider = (event: React.ChangeEvent<{}>, value: number | number[]): void => {
        event;
        this.setState({
            red_input: value.toString(10),
        }, () => {
            this.props.setRgbFunc(value as number, this.props.green, this.props.blue);
        });
    }
    private onGreenSlider = (event: React.ChangeEvent<{}>, value: number | number[]) => {
        event;
        this.setState({
            green_input: value.toString(10),
        }, () => {
            this.props.setRgbFunc(this.props.red, value as number, this.props.blue);
        });
    }

    private onBlueSlider = (event: React.ChangeEvent<{}>, value: number | number[]) => {
        event;
        this.setState({
            blue_input: value.toString(10),
        }, () => {
            this.props.setRgbFunc(this.props.red, this.props.green, value as number);
        });
    }

    render() {
        return <>
            <div>
                <div style={{ display: "flex" }}>
                    <p style={{ margin: "0" }}>
                        <label >
                            R:<input style={{ width: "40px" }} type="text" onChange={this.onChange} value={this.state.red_input} id="Red" name="Red" />
                        </label>
                    </p>
                    <Slider style={{
                        marginLeft: "10px",
                        width: "100px"
                    }}
                        id="red"
                        min={0} max={255}
                        value={this.props.red}
                        onChange={this.onRedSlider}
                    />
                    <div style={{ marginLeft: "5px" }}>
                        <ColorTips colorCode={this.getHexfromRgb("red", this.props.red)} />
                    </div>
                </div>

                <div style={{ display: "flex" }}>
                    <p style={{ margin: "0" }}>
                        <label >
                            G:<input style={{ width: "40px" }} type="text" onChange={this.onChange} value={this.state.green_input} id="Green" name="Green" />
                        </label>
                    </p>
                    <Slider style={{
                        marginLeft: "10px",
                        width: "100px"
                    }}
                        id="green"
                        min={0} max={255}
                        value={this.props.green}
                        onChange={this.onGreenSlider}
                    />
                    <div style={{ marginLeft: "5px" }}>
                        <ColorTips colorCode={this.getHexfromRgb("green", this.props.green)} />
                    </div>
                </div>

                <div style={{ display: "flex" }}>
                    <p style={{ margin: "0" }}>
                        <label >
                            B:<input style={{ width: "40px" }} type="text" onChange={this.onChange} value={this.state.blue_input} id="Blue" name="Blue" />
                        </label>
                    </p>
                    <Slider style={{
                        marginLeft: "10px",
                        width: "100px"
                    }}
                        id="blue"
                        min={0} max={255}
                        value={this.props.blue}
                        onChange={this.onBlueSlider}
                    />
                    <div style={{ marginLeft: "5px" }}>
                        <ColorTips colorCode={this.getHexfromRgb("blue", this.props.blue)} />
                    </div>
                </div>
            </div>
        </>
    }
}