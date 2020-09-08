import * as React from "react";
import { Button } from "@material-ui/core";
import { useState } from "react";

/**
 * inputの値はstateで管理でいい
 * jsonの値をstoreで管理する
 */
export function InputFavorite() {
    const [value, setValue] = useState("FFFFFF");

    return (
        <>
            <input value={value} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)} />
            <Button>registar</Button>
        </>
    )
}

export function FavoruteColors() {
    return (
        <div>

        </div>
    )
}