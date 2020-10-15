/**
 * 千分号
 * @param {*} y 
 */
export function format(y) {
    const reg = /\d{1,3}(?=(\d{3})+$)/g
    return `${y}`.replace(reg, '$&,')
}