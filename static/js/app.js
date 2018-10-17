// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

data.forEach(function(data) {
	// console.log(data);
	var row = tbody.append("tr");
	Object.entries(data).forEach(function([key, value]) {
		console.log(key, value);
		var cell = tbody.append("td");
		cell.text(value);
	})
});


var submit = d3.select("#filter-btn");
submit.on("click", function() {
	tbody.html("");
	d3.event.preventDefault();
	var date = d3.select("#datetime").property("value");
	console.log(date);
	var filteredData = tableData.filter(data => data.datetime === date);
	console.log(filteredData);
	filteredData.forEach(data => {
		var row = tbody.append("tr");
		Object.entries(data).forEach(function([key, value]) {
			console.log(key, value);
			var cell = tbody.append("td");
			cell.text(value);
		})
	})


	// else {
	// 	data.forEach(function(data) {
	// 		// console.log(data);
	// 		var row = tbody.append("tr");
	// 		Object.entries(data).forEach(function([key, value]) {
	// 			console.log(key, value);
	// 			var cell = tbody.append("td");
	// 			cell.text(value);
	// 		})
	// 	});
	// }
});


