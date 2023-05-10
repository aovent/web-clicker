export function coinClickUpgrade(): void {
    const coinClickField: HTMLElement = document.getElementById("coinclick_upgrade");

    let yesButton: HTMLElement = document.createElement("button");
    let noButton: HTMLElement = document.createElement("button");

    yesButton.classList.add("yesCoinButton");
    noButton.classList.add("noCoinButton");

    yesButton.innerHTML = "Да";
    noButton.innerHTML = "Нет";
    
    coinClickField.innerHTML = `Вы уверены, что хотите прокачать игру "Coin Click"? Цена: ${100}`;

    coinClickField.append(yesButton);
    coinClickField.append(noButton);

    noButton.addEventListener("click", () => {
        setTimeout(() => {document.getElementById("coinclick_upgrade").innerHTML = "Coin Click <i class='fa-brands fa-bitcoin'></i>"}, 1);
    })
}