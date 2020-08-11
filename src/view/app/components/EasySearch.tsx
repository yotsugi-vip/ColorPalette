import * as React from 'react';
import { Component } from 'react';
import { ColorTips } from './hoge';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

const regex = new RegExp('^#[0-9abcdefABCDEF]{6}$');
const reg = new RegExp("^#?[0-9abcdefABCDEF]{0,6}?$");

interface IState { inputCode: string, inputValue: string };
export default class EasySearch extends Component {
    state: IState;
    constructor(props: any) {
        super(props);
        this.state = {
            inputCode: "#FFFFFF",
            inputValue: "#FFFFFF"
        }
        this.onchange = this.onchange.bind(this);
    }

    private onchange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            inputValue: event.target.value,
            inputCode: regex.test(event.target.value) ? event.target.value : this.state.inputCode
        });
    }

    render() {
        return <>
            <RadioGroup defaultValue="HEX">
                <FormControlLabel value="HEX" control={<Radio />} label="HEX" />
                <FormControlLabel value="RGB" control={<Radio />} label="RGB" />
            </RadioGroup>
            <div style={{ display: "flex" }}>
                <input type="text" onChange={this.onchange} value={this.state.inputValue} />
                <ColorTips colorCode={this.state.inputCode} />
            </div>
            <InputRgb />
        </>
    }
}

/**
 * Hex値の入力欄
 */
class InputHex extends Component {
    render() {
        return <>
            <div style={{ display: "flex" }}>
                <input type="text" />
                <ColorTips colorCode={"#FFFFFF"} />
            </div>
        </>
    }
}

/**
 * RGB値の入力欄
 */

type RGB = "red" | "green" | "blue";
interface IState_Rgb { red: number, green: number, blue: number, red_input: number, green_input: number, blue_input: number };
class InputRgb extends Component {
    state: IState_Rgb;
    constructor(props: any) {
        super(props);
        this.state = {
            red: 0,
            green: 0,
            blue: 0,
            red_input: 0,
            green_input: 0,
            blue_input: 0
        };
        this.onChange = this.onChange.bind(this);
    }

    private getHexfromRgb(rgb: RGB, val: number) {
        let hex = val.toString(16);
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
                console.log("default!!!!!!!!!!!!!!!!!!!!!!!");
                ret = "#000000";
                break;
        }
        console.log(rgb,":",val,"->",hex,"->",ret);
        return ret;
    }


    private onChange(event: React.ChangeEvent<HTMLInputElement>) {
        let val, val2 = parseInt(event.target.value, 10);
        if (!val) val = 0;
        if (!val2) val2 = 0;

        if (val > 255) val = 255;
        if (val < 0) val = 0;

        if (event.target.name === "Red") this.setState({ red: val, red_input: val2 });
        if (event.target.name === "Green") this.setState({ green: val, green_input: val2 });
        if (event.target.name === "Blue") this.setState({ blue: val, blue_input: val2 });
    }

    render() {
        return <>
            <div>
                <label >
                    R:<input type="text" onChange={this.onChange} value={this.state.red_input} id="Red" name="Red" />
                    <ColorTips colorCode={this.getHexfromRgb("red", this.state.red_input)} />
                </label>
                <label >
                    G:<input type="text" onChange={this.onChange} value={this.state.green_input} id="Green" name="Green" />
                    <ColorTips colorCode={this.getHexfromRgb("blue", this.state.blue)} />
                </label>
                <label >
                    B:<input type="text" onChange={this.onChange} value={this.state.blue_input} id="Blue" name="Blue" />
                    <ColorTips colorCode={this.getHexfromRgb("green", this.state.green)} />
                </label>
            </div>
            <ColorTips colorCode={"#FFFFFF"} />
        </>
    }
}