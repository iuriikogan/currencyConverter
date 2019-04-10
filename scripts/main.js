var stock_prices_btn = function newFunction () {
	return document.getElementById('.stock-prices-btn');
}

var testVar = {
	eur: 1,
	usd: 1.3;
}



var stockDataRequest = new XMLHttpRequest();
stockDataRequest.open('GET', 'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&outputsize=compact&symbol=MSFT&apikey=5MB3SANDM9OTDRY0');
stockDataRequest.onload = function () {
	stock_prices = JSON.parse(stockDataRequest.responseText);
	console.log(stock_prices);
};
stockDataRequest.send();

stock_prices_btn.onclick = function () {

			stock_prices = document.createElement('tbody');

			stock_prices.forEach(function(stock_prices) {

				let data_tr = document.createElement('tr'); // cteates <tr></tr>

				for (value in stock_prices) {
					let data_td = document.createElement('td'); // creates <td></td>
					let text = document.createTextNode(data[value]); // creates text for the object value
					data_td.appendChild(text); // adds the text to the <td>
					data_tr.appendChild(data_td); // adds the <td> to the <tr>
				}

				stock_prices.appendChild(data_tr); // adds <tr> to <tbody>

			});

			stock_prices.appendChild(data_body); // pushes <tbody> to the DOM inside table

	};
	




