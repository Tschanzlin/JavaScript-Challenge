// from data.js
var tableData = data;

// YOUR CODE HERE!


// Loop through "data" and append information to 
// Select table reference
// var tbody = d3.select("tbody")


// Initial loop through data; console log output

// data.forEach((ufo) => {
//     console.log(ufo);
// });

// Combine loop with object entry to pull keys and values
// Console log output; add select / append functions to insert to HTML
// (refer to #3, Evr_D3_Table)

// Select table by ID
var table = d3.select("#ufo-table")
var body = d3.select("tbody")



// In above loop; append data across each row
// for following code, reefer to #3, Stu_D3_Select
// var row = tbody.append("tr")
// var cell = row.append("td")
// cell.text(value);


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

    // Add filter function
    function selectDate(ufodate) {
        return ufodate.datetime == inputValue;
    }

    // Function to clear table before filling 

    // function clearTable() {
    //     body.forEach((entry) => {
    //         body.remove("tr");
    //     })
    // }

    // If inputValue empty (null value); show all data

    if (inputValue == "") {
        // Clear table before entering any data
        // body.deleteRow();
        // table.append("tbody");
        data.forEach((ufo) => {
            var row = body.append("tr");
            Object.entries(ufo).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
        });
        console.log("Input Value = Empty String");

        // test = d3.select("#ufo-table").text() 
        console.log(data.length)

        // console.log(ufo-table.rows.length);
    }

    // else, show filtered data
    else {
        // Clear table before entering any data
        // clearTable();


        var filteredUfo = data.filter(selectDate);

        // console.log(filteredUfo);

        filteredUfo.forEach((ufo) => {
            var row = body.append("tr");
            console.log("--------------");
            Object.entries(ufo).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
                console.log(`${key}:  ${value}`);
            });
        });

        console.log(filteredUfo.length)

        output = d3.selectAll("tbody>tr").text()

        console.log(output)

    }

    console.log(inputValue)
}


// Create function to clear table

var button1 = d3.select("#clear-btn");

button1.on("click", clearTable);

function clearTable() {
    d3.selectAll("tbody>tr").remove()

}

// Loop through filteredUfo and append output



