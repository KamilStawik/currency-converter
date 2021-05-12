# Currency-Converter

## Demo

[Currency converter by Kamil](https://kamilstawik.github.io/currency-converter/)

![Project screenshot1](/images/screenshot1.jpg)

## About me

Hi! My name is Kamil. At the begining of 2021 I had a briliant idea. I started to lern programming. In future i would like to become a Frontend Developer.

## About this project

This is my second study project. Very simple currency converter. I applied basic data verification. It check if user wont pick the same currency in both *input fields*:

```javascript

else if (currencyElement.value === resultCurrencyElement.value) {
        currencyElement.classList.add("form__selectField--error");
        resultCurrencyElement.classList.add("form__selectField--error");
        
```

And this is how it works:

![Project screenshot2](/images/screenshot2.jpg)

## Technologies and conventions used in project:
* HTML
* CSS
* javascript
* BEM
* CamelCase