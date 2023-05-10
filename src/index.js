import { coinGame } from "./modules/coinGame.js";
import { getNowBalance } from "./modules/getNowBalance.js";
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
if (localStorage.getItem("AoventWebClicker") == null) {
    const startBalance = 1000;
    balanceField.innerHTML = `Money: ${startBalance}`;
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
console.log(getNowBalance(gemsField));
coinGame();
//# sourceMappingURL=index.js.map