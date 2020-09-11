function checkNan(val: string): string {
    if (val === "") {
        return "00";
    }

    return ("00" + val).slice(-2);
}

export function getHexFromRgb(value: string, color: RGB) {
    let ret: string = "000000";
    let hex = ('00' + parseInt(value, 10).toString(16)).slice(-2);
    if (color === 'red') {
        ret = `${hex}0000`;
    } else if (color === 'green') {
        ret = `00${hex}00`;
    } else if (color === 'blue') {
        ret = `0000${hex}`;
    }
    return ret;
}

export function getRgbFromHex(val: string, color: RGB) {
    val = RemoveSharp(val);
    switch (color) {
        case "red":
            return parseInt(checkNan(val.slice(0, 2)), 16).toString(10);
        case "green":
            return parseInt(checkNan(val.slice(2, 4)), 16).toString(10);
        case "blue":
            return parseInt(checkNan(val.slice(4, 6)), 16).toString(10);
        default:
            return parseInt(checkNan(val.slice(0, 2)), 16).toString(10);
    }
}

export function UpdateHex(val: string, hex: string, color: RGB) {
    hex = RemoveSharp(hex);
    switch (color) {
        case "red":
            return `#${checkNan(parseInt(val, 10).toString(16))}${checkNan(hex.slice(2, 4))}${checkNan(hex.slice(4, 6))}`;
        case "green":
            return `#${checkNan(hex.slice(0, 2))}${checkNan(parseInt(val, 10).toString(16))}${checkNan(hex.slice(4, 6))}`;
        case "blue":
            return `#${checkNan(hex.slice(0, 2))}${checkNan(hex.slice(2, 4))}${checkNan(parseInt(val, 10).toString(16))}`;
        default:
            return `#${checkNan(parseInt(val, 10).toString(16))}${checkNan(hex.slice(2, 4))}${checkNan(hex.slice(4, 6))}`;
    }
}

export const RemoveSharp = (value: string): string => {
    if (value[0] === '#') {
        value = value.substr(1);
    }
    return value;
};

export const AddSharp = (value: string): string => {
    if (value[0] !== "#") {
        value = `#${value}`;
    }
    return value;
};
