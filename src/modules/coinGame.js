import { drawMoney } from "./drawStats.js";
const balanceField = document.querySelector(".stats_money");
export function coinGame() {
    const coin = document.querySelector(".coin_coin");
    coin.addEventListener("click", () => {
        let stats = {
            balance: JSON.parse(localStorage.getItem("AoventWebClicker")).balance += 1,
            gems: 0,
            level: 1,
            rebirths: 0
        };
        localStorage.setItem("AoventWebClicker", JSON.stringify(stats));
        drawMoney();
        drawMoney(document.querySelector(".cb_text"));
    });
}
//# sourceMappingURL=coinGame.js.map