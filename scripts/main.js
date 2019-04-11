

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


var currency_prices = document.createElement("option");
for (var value in currency_prices.rates) {
  var result = (currency_prices.base.value / currency_prices.rates[value]);
  _options[options.length] = new Option(currency_prices.value);
}

document.body.appendChild(select); 
 

currency_prices_btn.onclick = function () {

    currency_prices = document.createElement('tbody');

    currency_prices.forEach(function (data) {

        let data_tr = document.createElement('tr'); // cteates <tr></tr>

        for (value in currency_prices) {
            let data_td = document.createElement('td'); // creates <td></td>
            let text = document.createTextNode(data[value]); // creates text for the object value
            data_td.appendChild(text); // adds the text to the <td>
            data_tr.appendChild(data_td); // adds the <td> to the <tr>
        }

        value.appendChild(data_tr); // adds <tr> to <tbody>

    });

    value.appendChild(data_body); // pushes <tbody> to the DOM inside table

};
