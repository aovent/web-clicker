import { drawMoney, drawCC, drawLevel } from "./drawStats.js";
export function coinClickUpgrade() {
    const coinClickField = document.getElementById("coinclick_upgrade");
    let yesButton = document.createElement("button");
    let noButton = document.createElement("button");
    yesButton.classList.add("yesCoinButton");
    noButton.classList.add("noCoinButton");
    yesButton.innerHTML = "Да";
    noButton.innerHTML = "Нет";
    let drawCCprice = () => {
        coinClickField.innerHTML = `Вы уверены, что хотите прокачать игру "Coin Click"? Цена: ${(1000 * Math.pow(JSON.parse(localStorage.getItem("AoventWebClickerUpgrades")).coinclick, JSON.parse(localStorage.getItem("AoventWebClicker")).level))}`;
    };
    drawCCprice();
    coinClickField.append(yesButton);
    coinClickField.append(noButton);
    yesButton.addEventListener("click", () => {
        setTimeout(() => {
            if (JSON.parse(localStorage.getItem("AoventWebClicker")).balance > (1000 * Math.pow(JSON.parse(localStorage.getItem("AoventWebClickerUpgrades")).coinclick, JSON.parse(localStorage.getItem("AoventWebClicker")).level))) {
                let upgrades = {
                    coinclick: JSON.parse(localStorage.getItem("AoventWebClickerUpgrades")).coinclick += 1
                };
                let stats = {
                    balance: JSON.parse(localStorage.getItem("AoventWebClicker")).balance -= (1000 * Math.pow(JSON.parse(localStorage.getItem("AoventWebClickerUpgrades")).coinclick, JSON.parse(localStorage.getItem("AoventWebClicker")).level)),
                    gems: JSON.parse(localStorage.getItem("AoventWebClicker")).gems,
                    level: JSON.parse(localStorage.getItem("AoventWebClicker")).level,
                    rebirths: JSON.parse(localStorage.getItem("AoventWebClicker")).rebirths
                };
                localStorage.setItem("AoventWebClicker", JSON.stringify(stats));
                localStorage.setItem("AoventWebClickerUpgrades", JSON.stringify(upgrades));
                drawCCprice();
                drawMoney(document.querySelector(".cb_text"));
                drawMoney();
                drawCC();
                coinClickField.innerHTML = "Coin Click <i class='fa-brands fa-bitcoin'></i>";
            }
            else {
                coinClickField.innerHTML = "У вас недостаточно средств.";
                setTimeout(() => { coinClickField.innerHTML = "Coin Click <i class='fa-brands fa-bitcoin'></i>"; }, 1000);
            }
        }, 1);
    });
    noButton.addEventListener("click", () => {
        setTimeout(() => { coinClickField.innerHTML = "Coin Click <i class='fa-brands fa-bitcoin'></i>"; }, 1);
    });
}
export function levelUp() {
    const levelUpField = document.querySelector(".level_item");
    let yesButton = document.createElement("button");
    let noButton = document.createElement("button");
    yesButton.classList.add("yesCoinButton");
    noButton.classList.add("noCoinButton");
    yesButton.innerHTML = "Да";
    noButton.innerHTML = "Нет";
    let drawLevelprice = () => {
        levelUpField.innerHTML = `Вы уверены, что хотите повысить уровень? Цена: ${(100000 * JSON.parse(localStorage.getItem("AoventWebClicker")).level)}`;
    };
    drawLevelprice();
    levelUpField.append(yesButton);
    levelUpField.append(noButton);
    yesButton.addEventListener("click", () => {
        setTimeout(() => {
            if (JSON.parse(localStorage.getItem("AoventWebClicker")).balance > 100000 * JSON.parse(localStorage.getItem("AoventWebClicker")).level) {
                let stats = {
                    balance: JSON.parse(localStorage.getItem("AoventWebClicker")).balance -= (100000 * JSON.parse(localStorage.getItem("AoventWebClicker")).level),
                    gems: JSON.parse(localStorage.getItem("AoventWebClicker")).gems,
                    level: JSON.parse(localStorage.getItem("AoventWebClicker")).level += 1,
                    rebirths: JSON.parse(localStorage.getItem("AoventWebClicker")).rebirths
                };
                localStorage.setItem("AoventWebClicker", JSON.stringify(stats));
                drawLevelprice();
                drawMoney();
                drawLevel();
                levelUpField.innerHTML = "Level <i class='fa-solid fa-user-astronaut'></i>";
            }
            else {
                levelUpField.innerHTML = "У вас недостаточно средств.";
                setTimeout(() => { levelUpField.innerHTML = "Level <i class='fa-solid fa-user-astronaut'></i>"; }, 1000);
            }
        }, 1);
    });
    noButton.addEventListener("click", () => {
        setTimeout(() => { levelUpField.innerHTML = "Level <i class='fa-solid fa-user-astronaut'></i>"; }, 1);
    });
}
//# sourceMappingURL=upgrades.js.map