import 'jquery'
import 'bootstrap'

// data from alphavantage API, convert from JSON and assign to da
fetch('https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&outputsize=compact&symbol=MSFT&apikey=5MB3SANDM9OTDRY0').then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        console.log(JSON.stringify(myJson));
    });


// var stock_prices = document.getElementById('stock-prices');
// var stockPriceTable = document.getElementById('stock-prices');
// stock_prices.onclick = function () {

//         fetch("https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&outputsize=compact&symbol=MSFT&apikey=5MB3SANDM9OTDRY0") // get the data
//             .then(function (response) {
//                 return response.json(); // transform the data
//             })
//             .then(function (t) {
//                console.log('data', data);   // log the data
//                     return data;

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
});
}