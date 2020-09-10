import * as React from "react";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { AddColor, DeleteColor, SET_HEX, SetRgbValue_HEX } from "../../action";
import { ISTORE } from "../../store";
import { MenuItem, Menu, Paper } from "@material-ui/core";
import { vscode } from "../../vscodeapi";

export function InputFavorite() {
    const dispatch = useDispatch();
    const store = useSelector<ISTORE, ISTORE>(state => state);

    return (
        <>
            <Button
                variant="contained" color="primary"
                onClick={() => {
                    if (store.rgbValueReducer.hex !== "") {
                        console.log('registered:', store.rgbValueReducer.hex);
                        dispatch(AddColor(store.rgbValueReducer.hex));
                        dispatch(SetRgbValue_HEX(""));
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