console.log('this works');

var stock_prices_btn = document.getElementById('stock-prices-btn');
var stock_prices = document.getElementById('stock-prices');
stock_prices_btn.onclick = function (t) {

	fetch('https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&outputsize=compact&symbol=MSFT&apikey=5MB3SANDM9OTDRY0') // get the data
		.then( function(response) {
			return response.json(); // transform the data
		})
		.then(function(data) {
			console.log('stock-prices', stock_prices);

			var stock_prices = document.createElement('tbody');

			stock_prices.forEach(function(data) {

				let data_tr = document.createElement('tr'); // cteates <tr></tr>

				for (value in data) {
					let data_td = document.createElement('td'); // creates <td></td>
					let text = document.createTextNode(data[value]); // creates text for the object value
					data_td.appendChild(text); // adds the text to the <td>
					data_tr.appendChild(data_td); // adds the <td> to the <tr>
				}

				stockData_body.appendChild(data_tr); // adds <tr> to <tbody>

			});

			stock_prices.appendChild(data_body); // pushes <tbody> to the DOM inside table

        });
    };
