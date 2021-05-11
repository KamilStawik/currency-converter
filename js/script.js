let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");
let currencyElement = document.querySelector(".js-currency");
let resultCurrencyElement = document.querySelector(".js-resultCurrency");

let longResult = 0;

let currencyWorthEURPLN = 4.57;
let currencyWorthPLNEUR = 1 / currencyWorthEURPLN;

let currencyWorthUSDPLN = 3.77;
let currencyWorthPLNUSD = 1 / currencyWorthUSDPLN;

let currencyWorthEURUSD = 1.21;
let currencyWorthUSDEUR = 1 / currencyWorthEURUSD;



console.log(resultElement.value);

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    currencyElement.classList.remove("form__selectField--error");
    resultCurrencyElement.classList.remove("form__selectField--error");

    if (currencyElement.value === "PLN" && resultCurrencyElement.value === "EUR") {
        longResult = amountElement.value * currencyWorthPLNEUR;
        resultElement.value = longResult.toFixed(2);
    } else if (currencyElement.value === "EUR" && resultCurrencyElement.value === "PLN") {
        longResult = amountElement.value * currencyWorthEURPLN;
        resultElement.value = longResult.toFixed(2);
    } else if (currencyElement.value === "PLN" && resultCurrencyElement.value === "USD") {
        longResult = amountElement.value * currencyWorthPLNUSD;
        resultElement.value = longResult.toFixed(2);
    } else if (currencyElement.value === "EUR" && resultCurrencyElement.value === "USD") {
        longResult = amountElement.value * currencyWorthEURUSD;
        resultElement.value = longResult.toFixed(2);
    } else if (currencyElement.value === "USD" && resultCurrencyElement.value === "PLN") {
        longResult = amountElement.value * currencyWorthUSDPLN;
        resultElement.value = longResult.toFixed(2);
    } else if (currencyElement.value === "USD" && resultCurrencyElement.value === "EUR") {
        longResult = amountElement.value * currencyWorthUSDEUR;
        resultElement.value = longResult.toFixed(2);
    } else if (currencyElement.value === resultCurrencyElement.value) {
        currencyElement.classList.add("form__selectField--error");
        resultCurrencyElement.classList.add("form__selectField--error");
    }
    else {
        console.log("error");
    }
});