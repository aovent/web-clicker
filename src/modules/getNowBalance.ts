export function getNowBalance(gemsField): number {
    return Number(String((gemsField.innerHTML)).split(": ")[1]);
}