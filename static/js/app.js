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
	d3.event.preventDefault();
	var inputElement = d3.select("#form-control");
	var inputValue = inputElement.property("value");
	console.log(inputValue);
});


d3.select("#date")
	.append("td").text()