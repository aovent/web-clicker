export function drawMoney(drawField = null): void {
    if (drawField == null) {
        document.querySelector(".stats_money").innerHTML = `Money: ${JSON.parse(localStorage.getItem("AoventWebClicker")).balance}`;
    } else {
        drawField.innerHTML = `Money: ${JSON.parse(localStorage.getItem("AoventWebClicker")).balance}`;
    }
}

export function drawCC(): void {
    document.querySelector(".stats_coinclickstat").innerHTML = `Coin Click: ${JSON.parse(localStorage.getItem("AoventWebClickerUpgrades")).coinclick}`;
}