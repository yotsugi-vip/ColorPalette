import * as React from "react";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IPushColorsAction, PushColors, AddColor } from "../../action";
import { ISTORE } from "../../store";

/**
 * inputの値はstateで管理でいい
 * jsonの値をstoreで管理する
 */
export function InputFavorite() {
    const [value, setValue] = useState("FFFFFF");
    const dispatch = useDispatch();

    return (
        <>
            <input value={value} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)} />
            <Button onClick={() => {
                if (value !== "") {
                    console.log('registered:', value);
                    dispatch(AddColor(value));
                    setValue("");
                }
            }}>
                registar
            </Button>
        </>
    );
}

export function FavoriteColors() {
    const store = useSelector<ISTORE, ISTORE>(state => state);
    console.log("store:", store.colorsReducer.colors);
    return (
        <div>
            <p>Favorite Colors</p>
            {store.colorsReducer.colors.map((val) => {
                <div>
                    <p>WHY?????</p>
                    <Button>
                        <p>{val}</p>
                    </Button>
                </div>;
            })}
        </div>
    );
}