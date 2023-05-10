export function getNowBalance(): number {
    return JSON.parse(localStorage.getItem("AoventWebClicker")).balance
}