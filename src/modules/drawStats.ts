export function drawMoney(drawField = null): void {
    if (drawField == null) {
        document.querySelector(".stats_money").innerHTML = `Money: ${JSON.parse(localStorage.getItem("AoventWebClicker")).balance}`;
    } else {
        drawField.innerHTML = `Money: ${JSON.parse(localStorage.getItem("AoventWebClicker")).balance}`;
    }
}