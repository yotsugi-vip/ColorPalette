import * as React from 'react';
import { useState } from "react";
import { ColorTips } from "./colorTips";

export function HexComponent() {
    const [value, setValue] = useState("000000");
    return (
        <div style={{ display: "flex" }}>
            <input type="text" value={value} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)} />
            <ColorTips hex={value} />
        </div>
    )
}