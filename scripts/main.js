// var currency_prices_btn = function newFunction () {
// 	return document.getElementById('.currenry-prices');
// }

var testVar = {
    eur: 1,
    usd: 1.3
}

var currency_prices;

var curData = new XMLHttpRequest();
curData.open('GET', 'http://data.fixer.io/api/latest?access_key=a754c07aba547f864f841764e00a058c');
curData.onload = function () {
    currency_prices = JSON.parse(curData.responseText);
    console.log(currency_prices);
};
curData.send();

function DoSomething() {
    if (!this.currency_prices) {return;}

    console.log('RUB: ' + this.currency_prices.rates['RUB']);
}

/*
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

        currency_prices.appendChild(data_tr); // adds <tr> to <tbody>

    });

    currency_prices.appendChild(data_body); // pushes <tbody> to the DOM inside table

};
*/