const roundCoord = (c:any, precision:any) => {
    return [
        Math.round(c[0] / precision) * precision,
        Math.round(c[1] / precision) * precision,
    ];
}
export default roundCoord;