import * as React from 'react';
import { Component } from 'react';
import { ColorTips } from './hoge';

const regex = "^#[0-9]{6}";

interface IState { inputCode: string };
export default class Top extends Component {
    state: IState;
    constructor(props: any) {
        super(props);
        this.state = {
            inputCode: "#FFFFFF"
        }
        this.onchange = this.onchange.bind(this);
    }

    private onchange(event: React.ChangeEvent) {
        if (event.target.nodeValue?.match(regex)) {
            this.setState({
                inputCode: event.target.nodeValue
            });
        }
    }

    render() {
        return <>
            <div style={{ display: "flex" }}>
                <input type="text" onChange={e => this.onchange(e)} />
                <ColorTips colorCode={this.state.inputCode} />
            </div>
        </>
    }
}