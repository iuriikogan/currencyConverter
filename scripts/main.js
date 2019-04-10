var currenry_prices_btn = function newFunction () {
	return document.getElementById('.currenry-prices');
}

var testVar = {
	eur: 1,
	usd: 1.3
}



var curData = new XMLHttpRequest();
curData.open('GET', 'http://data.fixer.io/api/latest?access_key=a754c07aba547f864f841764e00a058c');
curData.onload = function () {
	currenry_prices = JSON.parse(curData.responseText);
	console.log(currenry_prices);
};
curData.send();

currenry_prices_btn.onclick = function () {

			currenry_prices = document.createElement('tbody');

			currenry_prices.forEach(function(data) {

				let data_tr = document.createElement('tr'); // cteates <tr></tr>

				for (value in currenry_prices) {
					let data_td = document.createElement('td'); // creates <td></td>
					let text = document.createTextNode(data[value]); // creates text for the object value
					data_td.appendChild(text); // adds the text to the <td>
					data_tr.appendChild(data_td); // adds the <td> to the <tr>
				}

				currenry_prices.appendChild(data_tr); // adds <tr> to <tbody>

			});

			currenry_prices.appendChild(data_body); // pushes <tbody> to the DOM inside table

	};
	




