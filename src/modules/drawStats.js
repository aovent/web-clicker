export function drawMoney(drawField = null) {
    if (drawField == null) {
        document.querySelector(".stats_money").innerHTML = `Money: ${JSON.parse(localStorage.getItem("AoventWebClicker")).balance}`;
    }
    else {
        drawField.innerHTML = `Money: ${JSON.parse(localStorage.getItem("AoventWebClicker")).balance}`;
    }
}
export function drawCC() {
    document.querySelector(".stats_coinclickstat").innerHTML = `Coin Click: ${JSON.parse(localStorage.getItem("AoventWebClickerUpgrades")).coinclick}`;
}
export function drawCCspeed() {
    document.querySelector(".cb_speed").innerHTML = `Speed: ${JSON.parse(localStorage.getItem("AoventWebClickerUpgrades")).coinclick * 10}`;
}
export function drawLevel() {
    document.querySelector(".stats_level").innerHTML = `Level: ${JSON.parse(localStorage.getItem("AoventWebClicker")).level}`;
}
//# sourceMappingURL=drawStats.js.map