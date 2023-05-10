import { drawMoney } from "./drawStats.js";
const balanceField = document.querySelector(".stats_money");
export function coinGame() {
    const coin = document.querySelector(".coin_coin");
    coin.addEventListener("click", () => {
        let stats = {
            balance: JSON.parse(localStorage.getItem("AoventWebClicker")).balance += (1 * JSON.parse(localStorage.getItem("AoventWebClicker")).level * (JSON.parse(localStorage.getItem("AoventWebClickerUpgrades")).coinclick * 10)),
            gems: JSON.parse(localStorage.getItem("AoventWebClicker")).gems,
            level: JSON.parse(localStorage.getItem("AoventWebClicker")).level,
            rebirths: JSON.parse(localStorage.getItem("AoventWebClicker")).rebirths
        };
        localStorage.setItem("AoventWebClicker", JSON.stringify(stats));
        drawMoney();
        drawMoney(document.querySelector(".cb_text"));
    });
}
//# sourceMappingURL=coinGame.js.map