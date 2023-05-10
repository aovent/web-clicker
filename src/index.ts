import { coinGame } from "./modules/coinGame.js";
import { getNowBalance } from "./modules/getNowBalance.js";

const gemsField: HTMLElement = document.querySelector(".stats_ultramoney");
const balanceField: HTMLElement = document.querySelector(".stats_money");
const levelField: HTMLElement = document.querySelector(".stats_level");
const rebirthsField: HTMLElement = document.querySelector(".rebirths_level");

const clickerShopButton: HTMLElement = document.getElementById("cs_link");
const clickerGameButton: HTMLElement = document.getElementById("cg_link");

const closeShopButton: HTMLElement = document.querySelector(".scs_button");
const closeGameButton: HTMLElement = document.querySelector(".scg_button");

const shopSection: HTMLElement = document.querySelector(".section_clicker_shop");
const gameSection: HTMLElement = document.querySelector(".section_clicker_game");

if (localStorage.getItem("AoventWebClicker") == null) {
    balanceField.innerHTML = "Money: 1000"
}

clickerShopButton.addEventListener("click", () => {
    shopSection.style.cssText = "display: block;"
})
closeShopButton.addEventListener("click", () => {
    shopSection.style.cssText = "display: none;"
})

clickerGameButton.addEventListener("click", () => {
    gameSection.style.cssText = "display: block;"
})
closeGameButton.addEventListener("click", () => {
    gameSection.style.cssText = "display: none;"
})

console.log(getNowBalance(gemsField));
coinGame();

// "tsc" to compile