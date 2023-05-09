const gemsField: HTMLElement = document.querySelector(".stats_ultramoney");
const balanceField: HTMLElement = document.querySelector(".stats_money");
const levelField: HTMLElement = document.querySelector(".stats_level");
const rebirthsField: HTMLElement = document.querySelector(".rebirths_level");

if (localStorage.getItem("AoventWebClicker") == null) {
    balanceField.innerHTML = "Money: 1000"
}

function getNowBalance(): number {
    let nowBalance: number = Number(String((gemsField.innerHTML)).split(": ")[1]);

    return nowBalance;
}

console.log(getNowBalance());

// "tsc" to compile