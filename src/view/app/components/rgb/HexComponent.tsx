import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { SetRgbValue_HEX } from "../../action";
import { ColorTips } from "./colorTips";
import { ISTORE } from '../../store';

export function HexComponent() {
    const dispatch = useDispatch();
    const store = useSelector<ISTORE, ISTORE>(state => state);

    return (
        <div style={{ display: "flex" }}>
            <input type="text" value={store.rgbValueReducer.hex}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    dispatch(SetRgbValue_HEX(event.target.value))
                }}
            />
            <ColorTips hex={store.rgbValueReducer.hex} />
        </div>
    )
}