import { drawMoney, drawCC } from "./drawStats.js";
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
                drawMoney();
                drawCC();
                document.getElementById("coinclick_upgrade").innerHTML = "Coin Click <i class='fa-brands fa-bitcoin'></i>";
            }
            else {
                document.getElementById("coinclick_upgrade").innerHTML = "У вас недостаточно средств.";
                setTimeout(() => { document.getElementById("coinclick_upgrade").innerHTML = "Coin Click <i class='fa-brands fa-bitcoin'></i>"; }, 1000);
            }
        }, 1);
    });
    noButton.addEventListener("click", () => {
        setTimeout(() => { document.getElementById("coinclick_upgrade").innerHTML = "Coin Click <i class='fa-brands fa-bitcoin'></i>"; }, 1);
    });
}
//# sourceMappingURL=upgrades.js.map