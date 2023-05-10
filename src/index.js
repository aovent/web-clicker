import { coinGame } from "./modules/coinGame.js";
import { drawMoney, drawCC } from "./modules/drawStats.js";
import { coinClickUpgrade } from "./modules/upgrades.js";
const gemsField = document.querySelector(".stats_ultramoney");
const balanceField = document.querySelector(".stats_money");
const levelField = document.querySelector(".stats_level");
const rebirthsField = document.querySelector(".rebirths_level");
const clickerShopButton = document.getElementById("cs_link");
const clickerGameButton = document.getElementById("cg_link");
const closeShopButton = document.querySelector(".scs_button");
const closeGameButton = document.querySelector(".scg_button");
const shopSection = document.querySelector(".section_clicker_shop");
const gameSection = document.querySelector(".section_clicker_game");
const coinGameSection = document.querySelector(".coin_game");
const coinGameButton = document.querySelector(".coin_cell");
const closecoinGameButton = document.querySelector(".close_button_coin");
if (localStorage.getItem("AoventWebClicker") == null) {
    balanceField.innerHTML = "Money: 1000";
    let stats = {
        balance: 1000,
        gems: 0,
        level: 1,
        rebirths: 0
    };
    let upgrades = {
        coinclick: 0
    };
    localStorage.setItem("AoventWebClicker", JSON.stringify(stats));
    localStorage.setItem("AoventWebClickerUpgrades", JSON.stringify(upgrades));
}
else {
    balanceField.innerHTML = `Money: ${JSON.parse(localStorage.getItem("AoventWebClicker")).balance}`;
    gemsField.innerHTML = `Gems: ${JSON.parse(localStorage.getItem("AoventWebClicker")).gems}`;
    levelField.innerHTML = `Level: ${JSON.parse(localStorage.getItem("AoventWebClicker")).level}`;
    rebirthsField.innerHTML = `Rebirths: ${JSON.parse(localStorage.getItem("AoventWebClicker")).rebirths}`;
    drawCC();
}
clickerShopButton.addEventListener("click", () => {
    shopSection.style.cssText = "display: block;";
});
closeShopButton.addEventListener("click", () => {
    shopSection.style.cssText = "display: none;";
});
clickerGameButton.addEventListener("click", () => {
    gameSection.style.cssText = "display: block;";
});
closeGameButton.addEventListener("click", () => {
    gameSection.style.cssText = "display: none;";
});
coinGameButton.addEventListener("click", () => {
    coinGameSection.style.cssText = "display: block;";
    coinGame();
});
closecoinGameButton.addEventListener("click", () => {
    coinGameSection.style.cssText = "display: none;";
});
document.addEventListener("DOMContentLoaded", () => {
    drawMoney(document.querySelector(".cb_text"));
});
document.getElementById("coinclick_upgrade").addEventListener("click", () => {
    coinClickUpgrade();
});
//# sourceMappingURL=index.js.map