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

export function drawCCspeed(): void {
    document.querySelector(".cb_speed").innerHTML = `Speed: ${JSON.parse(localStorage.getItem("AoventWebClickerUpgrades")).coinclick * 10}`;
}

export function drawLevel(): void {
    document.querySelector(".stats_level").innerHTML = `Level: ${JSON.parse(localStorage.getItem("AoventWebClicker")).level}`;
}