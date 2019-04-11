'use strict'

var testVar = {
    eur: 1,
    usd: 1.3
}

var currency_prices;
var currency_prices_btn = document.getElementById('#submit-btn');

var curData = new XMLHttpRequest();
curData.open('GET', 'http://data.fixer.io/api/latest?access_key=a754c07aba547f864f841764e00a058c');
curData.onload = function () {
    currency_prices = JSON.parse(curData.responseText);
    console.log(currency_prices);
};
curData.send();

function convertRates() {
    if (!this.currency_prices) {return;}
    console.log('USD: ' + this.currency_prices.rates['USD']);
}


var currency_selector = document.getElementById("#currency-selector");

currency_selector.on('click', function () {
    let options = '';
    for (value in currency_prices.rates) {
        console.log('value', value)
        // value EUR, GBP 
        let option = `<option value="${value}">${value}</option>`
        options += option
    }
    currency_selector.appendChild(options);
})

 

currency_prices_btn.onclick = function () {

    currency_prices = document.createElement('tbody');

    currency_prices.forEach(function (data) {

        let data_tr = document.createElement('tr'); 

        for (value in currency_prices) {
            let data_td = document.createElement('td'); 
            let text = document.createTextNode(data[value]); 
            data_td.appendChild(text);
            data_tr.appendChild(data_td);
        }

        value.appendChild(data_tr); 

    });

    value.appendChild(data_body); 

};
