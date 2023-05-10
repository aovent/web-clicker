import { getNowBalance } from "./getNowBalance.js";
import { drawMoney } from "./drawStats.js";
const balanceField: HTMLElement = document.querySelector(".stats_money");

export function coinGame(): void {
    const coin: HTMLElement = document.querySelector(".coin_coin");

    // JSON.stringify(JSON.parse(localStorage.getItem("AoventWebClicker")).balance += 1)

    coin.addEventListener("click", () => {
        let stats: {
            balance: number;
            gems: number;
            level: number;
            rebirths: number;
        } = {
            balance: JSON.parse(localStorage.getItem("AoventWebClicker")).balance += (1 * JSON.parse(localStorage.getItem("AoventWebClicker")).level),
            gems: JSON.parse(localStorage.getItem("AoventWebClicker")).gems,
            level: JSON.parse(localStorage.getItem("AoventWebClicker")).level,
            rebirths: JSON.parse(localStorage.getItem("AoventWebClicker")).rebirths
        }

        console.log(JSON.parse(localStorage.getItem("AoventWebClicker")).level)

        localStorage.setItem("AoventWebClicker", JSON.stringify(stats));
        drawMoney();
        drawMoney(document.querySelector(".cb_text"));
    })
}