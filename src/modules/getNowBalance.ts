export function getNowBalance(gemsField): number {
    let nowBalance: number = Number(String((gemsField.innerHTML)).split(": ")[1]);

    return nowBalance;
}