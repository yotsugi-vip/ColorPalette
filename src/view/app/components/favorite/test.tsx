import * as React from "react";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IPushColorsAction, PushColors, AddColor } from "../../action";
import { ISTORE } from "../../store";
import { MenuItem, Menu, Paper } from "@material-ui/core";

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
    const a = ["0", "1", "2", "3", "4"];
    return (
        <div>
            <p>Favorite Colors</p>
            {store.colorsReducer.colors.map((val) => (
                <FavoriteColorTip colorCode={val} />
            ))}
        </div>
    );
}

interface IPropsFavoriteColor { colorCode: string }
export function FavoriteColorTip(props: IPropsFavoriteColor) {
    return (
        <div>
            <Paper style={{
                backgroundColor: `#${props.colorCode}`,
                height: '50px',
                width: '100px'
            }}>
                <Menu open={false}>
                    <MenuItem>COPY</MenuItem>
                    <MenuItem>DELETE</MenuItem>
                </Menu>
            </Paper>
        </div>
    );
}