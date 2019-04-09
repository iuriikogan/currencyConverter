console.log('this works');

var stock_prices_btn = document.getElementById('load-data-btn');
var external_data_table = document.getElementById('external-data-table');
stock_prices_btn.onclick = function (t) {

	fetch('https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&outputsize=compact&symbol=MSFT&apikey=5MB3SANDM9OTDRY0') // get the data
		.then( function(response) {
			return response.json(); // transform the data
		})
		.then(function(data) {
			console.log('stockData_body', stockData_body );

			var stockData_body = document.createElement('tbody');

			stockData.forEach(function(todo) {

				let todo_tr = document.createElement('tr'); // cteates <tr></tr>

				for (value in todo) {
					let todo_td = document.createElement('td'); // creates <td></td>
					let text = document.createTextNode(todo[value]); // creates text for the object value
					todo_td.appendChild(text); // adds the text to the <td>
					todo_tr.appendChild(todo_td); // adds the <td> to the <tr>
				}

				stockData_body.appendChild(todo_tr); // adds <tr> to <tbody>

			});

			external_data_table.appendChild(todos_body); // pushes <tbody> to the DOM inside table

        });
    };
