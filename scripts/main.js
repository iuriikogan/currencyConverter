console.log('this works');

// data from alphavantage API, convert from JSON and assign to da


// $(document).on('click', function (_t) {
//     fetch('https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&outputsize=compact&symbol=MSFT&apikey=5MB3SANDM9OTDRY0').then(function (_t) {
//         console.log('stockData', stockData);
//         return stockData
//     })
//     return stockData;
// })

const stock_prices = document.getElementById('stock-prices');
stock_prices.onloadedmetadata = () => {
    fetch("https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&outputsize=compact&symbol=MSFT&apikey=5MB3SANDM9OTDRY0") // get the data
        .then(_t => {
            console.log('data', data); // log the data
            return data;
        })
};

//             //     var data_body = document.createElement('tbody');

//             //     data.forEach(function (data) {

//             //         let data_tr = document.createElement('tr'); // cteates <tr></tr>

//             //         for (value in data) {
//             //             let data_td = document.createElement('td'); // creates <td></td>
//             //             let text = document.createTextNode(data[value]); // creates text for the object value
//             //             data_td.appendChild(text); // adds the text to the <td>
//             //             data_tr.appendChild(data_td); // adds the <td> to the <tr>
//             //         }

//             //         data_body.appendChild(data_tr); // adds <tr> to <tbody>

//             //     });

//             //     external_data_table.appendChild(data_body); // pushes <tbody> to the DOM inside table

//             // });

// }

// var stackedLine = new Chart(ctx, {  //create chart
//     type: 'line',
//     data: data,
//     options: {
//         scales: {
//             yAxes: [{
//                 stacked: true
//             }]
//         } {
//             color: [

//                 'red',
//                 'blue',
//                 'green',
//                 'black',
//                 'cyan',
//             ]
//         }
//     }
//