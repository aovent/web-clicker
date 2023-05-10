import { drawMoney, drawCC } from "./drawStats.js";

export function coinClickUpgrade(): void {
    const coinClickField: HTMLElement = document.getElementById("coinclick_upgrade");

    let yesButton: HTMLElement = document.createElement("button");
    let noButton: HTMLElement = document.createElement("button");

    yesButton.classList.add("yesCoinButton");
    noButton.classList.add("noCoinButton");

    yesButton.innerHTML = "Да";
    noButton.innerHTML = "Нет";
    
    let drawCCprice: Function = () => {
        coinClickField.innerHTML = `Вы уверены, что хотите прокачать игру "Coin Click"? Цена: ${(1000 * JSON.parse(localStorage.getItem("AoventWebClickerUpgrades")).coinclick**JSON.parse(localStorage.getItem("AoventWebClicker")).level)}`;
    }
    
    drawCCprice();

    coinClickField.append(yesButton);
    coinClickField.append(noButton);

    yesButton.addEventListener("click", () => {
        setTimeout(() => {
            if (JSON.parse(localStorage.getItem("AoventWebClicker")).balance > (1000 * JSON.parse(localStorage.getItem("AoventWebClickerUpgrades")).coinclick**JSON.parse(localStorage.getItem("AoventWebClicker")).level)) {

                let upgrades: {
                    coinclick: number;
                } = {
                    coinclick: JSON.parse(localStorage.getItem("AoventWebClickerUpgrades")).coinclick += 1
                }

                let stats: {
                    balance: number;
                    gems: number;
                    level: number;
                    rebirths: number;
                } = {
                    balance: JSON.parse(localStorage.getItem("AoventWebClicker")).balance -= (1000 * JSON.parse(localStorage.getItem("AoventWebClickerUpgrades")).coinclick**JSON.parse(localStorage.getItem("AoventWebClicker")).level),
                    gems: JSON.parse(localStorage.getItem("AoventWebClicker")).gems,
                    level: JSON.parse(localStorage.getItem("AoventWebClicker")).level,
                    rebirths: JSON.parse(localStorage.getItem("AoventWebClicker")).rebirths
                }

                localStorage.setItem("AoventWebClicker", JSON.stringify(stats));
                localStorage.setItem("AoventWebClickerUpgrades", JSON.stringify(upgrades));

                drawCCprice();
                drawMoney();
                drawCC();

                document.getElementById("coinclick_upgrade").innerHTML = "Coin Click <i class='fa-brands fa-bitcoin'></i>"
            } else {
                document.getElementById("coinclick_upgrade").innerHTML = "У вас недостаточно средств."
                setTimeout(() => {document.getElementById("coinclick_upgrade").innerHTML = "Coin Click <i class='fa-brands fa-bitcoin'></i>"}, 1000);
            }
        }, 1);
    })

    noButton.addEventListener("click", () => {
        setTimeout(() => {document.getElementById("coinclick_upgrade").innerHTML = "Coin Click <i class='fa-brands fa-bitcoin'></i>"}, 1);
    })
}