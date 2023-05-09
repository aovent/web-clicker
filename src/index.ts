const gemsField: HTMLElement = document.querySelector(".stats_ultramoney");
const balanceField: HTMLElement = document.querySelector(".stats_money");
const levelField: HTMLElement = document.querySelector(".stats_level");
const rebirthsField: HTMLElement = document.querySelector(".rebirths_level");

if (localStorage.getItem("AoventWebClicker") == null) {
    const startBalance: number = 1000;

    balanceField.innerHTML = `Money: ${startBalance}`
}

function getNowBalance(): number {
    let nowBalance: number = Number(String((gemsField.innerHTML)).split(": ")[1]);

    return nowBalance;
}

console.log(getNowBalance());

// "tsc" to compile