import { getNowBalance } from "./getNowBalance.js";
const balanceField: HTMLElement = document.querySelector(".stats_money");

export function coinGame(): void {
    const coin: HTMLElement = document.querySelector(".coin_coin");

    coin.addEventListener("click", () => {

    })

    console.log(getNowBalance(balanceField));
}