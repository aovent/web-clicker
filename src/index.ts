import { coinGame } from "./modules/coinGame.js";
import { getNowBalance } from "./modules/getNowBalance.js";
import { drawMoney, drawCC, drawCCspeed, drawLevel } from "./modules/drawStats.js";
import { coinClickUpgrade, levelUp } from "./modules/upgrades.js";

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

const coinGameSection: HTMLElement = document.querySelector(".coin_game");
const coinGameButton: HTMLElement = document.querySelector(".coin_cell");

const closecoinGameButton: HTMLElement = document.querySelector(".close_button_coin");

if (localStorage.getItem("AoventWebClicker") == null) {
    balanceField.innerHTML = "Money: 1000"

    let stats: {
        balance: number;
        gems: number;
        level: number;
        rebirths: number;
    } = {
        balance: 1000,
        gems: 0,
        level: 1,
        rebirths: 0
    }

    let upgrades: {
        coinclick: number;
    } = {
        coinclick: 1
    }

    localStorage.setItem("AoventWebClicker", JSON.stringify(stats));
    localStorage.setItem("AoventWebClickerUpgrades", JSON.stringify(upgrades));
} else {
    balanceField.innerHTML = `Money: ${JSON.parse(localStorage.getItem("AoventWebClicker")).balance}`
    gemsField.innerHTML = `Gems: ${JSON.parse(localStorage.getItem("AoventWebClicker")).gems}`
    levelField.innerHTML = `Level: ${JSON.parse(localStorage.getItem("AoventWebClicker")).level}`
    rebirthsField.innerHTML = `Rebirths: ${JSON.parse(localStorage.getItem("AoventWebClicker")).rebirths}`

    drawCC();
    drawLevel();
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

coinGameButton.addEventListener("click", () => {
    coinGameSection.style.cssText = "display: block;"
    drawCCspeed();
    coinGame();
})
closecoinGameButton.addEventListener("click", () => {
    coinGameSection.style.cssText = "display: none;"
})

document.addEventListener("DOMContentLoaded", () => {
    drawMoney(document.querySelector(".cb_text"));
})

document.getElementById("coinclick_upgrade").addEventListener("click", () => {
    coinClickUpgrade();
})

document.querySelector(".level_item").addEventListener("click", () => {
    levelUp();
})