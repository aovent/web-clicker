const gemsField = document.querySelector(".stats_ultramoney");
const balanceField = document.querySelector(".stats_money");
const levelField = document.querySelector(".stats_level");
const rebirthsField = document.querySelector(".rebirths_level");
if (localStorage.getItem("AoventWebClicker") == null) {
    const startBalance = 1000;
    balanceField.innerHTML = `Money: ${startBalance}`;
}
function getNowBalance() {
    let nowBalance = Number(String((gemsField.innerHTML)).split(": ")[1]);
    return nowBalance;
}
console.log(getNowBalance());
//# sourceMappingURL=index.js.map