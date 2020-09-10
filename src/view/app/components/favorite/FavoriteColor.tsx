import * as React from "react";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddColor, DeleteColor } from "../../action";
import { ISTORE } from "../../store";
import { MenuItem, Menu, Paper } from "@material-ui/core";
import { vscode } from "../../vscodeapi";
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
    return (
        <div>
            <p>Favorite Colors</p>
            <div>
                {store.colorsReducer.colors.map((val, i) => (
                    <FavoriteColorTip colorCode={val} index={i} />
                ))}
            </div>
        </div>
    );
}

interface IPropsFavoriteColor { colorCode: string, index: number }
export function FavoriteColorTip(props: IPropsFavoriteColor) {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    return (
        <div>
            <Paper
                style={{
                    backgroundColor: `#${props.colorCode}`,
                    margin: '5px 5px 5px 5px',
                    height: '50px',
                    width: '100px',
                    float: "left"
                }}
                onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => setAnchorEl(event.currentTarget)}
            />
            <Menu
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={(_event: {}, _reason: "backdropClick" | "escapeKeyDown") => setAnchorEl(null)}
                keepMounted
            >
                <MenuItem
                    onClick={(_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
                        setAnchorEl(null);
                        vscode.postMessage({
                            command: 'clip',
                            data: props.colorCode
                        });
                    }}

                >
                    CLIP BOARD COPY
                </MenuItem>
                <MenuItem
                    onClick={(_event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
                        setAnchorEl(null);
                        dispatch(DeleteColor(props.colorCode, props.index));
                    }}
                >
                    DELETE
                </MenuItem>
            </Menu>
        </div>
    );
}