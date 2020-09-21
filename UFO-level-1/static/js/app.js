// from data.js
var tableData = data;

// Select table by ID
var table = d3.select("#ufo-table")
var body = d3.select("tbody")


// Code to select date from input form
// Select button and form
var button = d3.select("#filter-btn");
var form = d3.select(".filters");

// Create event handlers for button and form
button.on("click", runEnter);
form.on("submit", runEnter);

// Create run function for both events
function runEnter() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    // console.log(inputValue);

    // Add filter function on date of ufo sighting
    function selectDate(ufodate) {
        return ufodate.datetime == inputValue;
    }

    // Each if / else statement loops through an array of objects and returns 
    // key value pairs; values are appended to html table rows  

    // If inputValue equals empty string; show all data (iterate through "data" array)
    if (inputValue == "") {
        data.forEach((ufo) => {
            var row = body.append("tr");
            Object.entries(ufo).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
        });
        console.log("Input Value: Empty String");
        console.log(`Data entries:  ${data.length}`)
    }

    // Else, apply filter function and interate through "filteredUfo" array
    else {
        var filteredUfo = data.filter(selectDate);

        filteredUfo.forEach((ufo) => {
            var row = body.append("tr");
            Object.entries(ufo).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
                // console.log(`${key}:  ${value}`);
            });
        });
        console.log(`Input value: ${inputValue}`);
        console.log(`Data entries: ${filteredUfo.length}`)
    }
}


// Function to clear table assigned to "Clear Table" button
var button1 = d3.select("#clear-btn");
button1.on("click", clearTable);

function clearTable() {
    d3.selectAll("tbody>tr").remove();
    console.log("Clear table")
}