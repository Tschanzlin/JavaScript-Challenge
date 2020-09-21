// from data.js
var tableData = data;

// YOUR CODE HERE!


// Loop through "data" and append information to 
// Select table reference
// var tbody = d3.select("tbody")


// Loop through data and console log output


data.forEach((ufo) => {
    console.log(ufo);
});

// Combine loop with object entry to pull keys and values
// for following code, refer to #3, Evr_D3_Table

// Select table by ID
var tbody = d3.select("#ufo-table")

data.forEach((ufo) => {
    var row = tbody.append("tr");
    console.log("--------------");
    Object.entries(ufo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        console.log(`${key}:  ${value}`);
    });
});

// In above loop; append data across each row
// for following code, reefer to #3, Stu_D3_Select
// var row = tbody.append("tr")
// var cell = row.append("td")
// cell.text(value);




