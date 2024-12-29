function validateCard() {
    const cardNumber = document.getElementById("cardNumber").value.replace(/\s|-/g, "");
    const resultElement = document.getElementById("result");

    if (!/^[0-9]+$/.test(cardNumber)) {
        resultElement.textContent = "La tarjeta contiene caracteres inválidos.";
        resultElement.className = "result invalid";
        return;
    }

    if (cardNumber.length < 16) {
        resultElement.textContent = "La tarjeta debe tener al menos 16 dígitos.";
        resultElement.className = "result invalid";
        return;
    }

    const reversedDigits = cardNumber.split("").reverse().map(Number);

    for (let i = 1; i < reversedDigits.length; i += 2) {
        reversedDigits[i] *= 2;
            if (reversedDigits[i] > 9) {
                reversedDigits[i] -= 9;
            }
    }

    const totalSum = reversedDigits.reduce((sum, digit) => sum + digit, 0);

    if (totalSum % 10 === 0) {
        resultElement.textContent = "La tarjeta es válida.";
        resultElement.className = "result valid";
    } else {
        resultElement.textContent = "La tarjeta es inválida.";
        resultElement.className = "result invalid";
    }
}

function changeBackground() {
    const randomGray = () => Math.floor(Math.random() * 256);
    const grayValue = randomGray();
    const newColor = `rgb(${grayValue}, ${grayValue}, ${grayValue})`;
    document.body.style.backgroundColor = newColor;
}

setInterval(changeBackground, 2000);