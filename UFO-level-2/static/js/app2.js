// from data.js
var tableData = data;

// Select table by ID
var table = d3.select("#ufo-table");
var body = d3.select("tbody");

// Select button and forms; create event handlers to activate functions
var button = d3.select("#filter-btn");
var button1 = d3.select("#clear-btn");
var form = d3.select(".form-group");

button.on("click", runEnter);
button1.on("click", clearTable);
form.on("submit", runEnter);


// ---------------------- Load and Clear Table Functions -----------------------------------
// Function to load relavent "inputData" array into html file; for each object, 
// return key value pairs and append values to html table
function loadTable(inputData) {
    inputData.forEach((ufo) => {
        var row = body.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
            // console.log(`${key}:  ${value}`);
        });
    });
}

// Function to clear table (assigned to "Clear Table" button)
function clearTable() {
    d3.selectAll("tbody>tr").remove();
    //    d3.selectAll(".filter list-group-item").remove();
    console.log("Clear table");
}


// ---------------------- Initialize Site --------------------------------------------------
// Call "loadTable" function; initialize site with all data from "data" fill
loadTable(data)


// ---------------------- Program Body; Function runEnter executed on button clicks --------
// Function to select and filter input values; calls clearTable and loadTable functions

function runEnter() {
    d3.event.preventDefault();

    // Set input values for each form and combine into inputValues array
    var dateValue = d3.select("#datetime").property("value");
    var cityValue = d3.select("#city").property("value");
    var stateValue = d3.select("#state").property("value");
    var countryValue = d3.select("#country").property("value");
    var shapeValue = d3.select("#shape").property("value");
    var inputValues = [dateValue, cityValue, stateValue, countryValue, shapeValue]

    console.log(inputValues)
    console.log("--------------")

    // Add filter functions for each key field -- date, city, state, country, and shape
    function selectDate(ufodate) {
        return ufodate.datetime == dateValue;
    }
    function selectCity(ufocity) {
        return ufocity.city == cityValue;
    }
    function selectState(ufostate) {
        return ufostate.state == stateValue;
    }
    function selectCountry(ufocountry) {
        return ufocountry.country == countryValue;
    }
    function selectShape(ufoshape) {
        return ufoshape.shape == shapeValue;
    }

    // Loop through inputValues and filter if non-string value present; 
    // if no inputValue present, array is not filtered by that form entry
    // NOTE:  Counter serves to identify which inputValue to filter on
    // and sorts from first from entry (dateValue) to last (shapeValue) 
    var filteredUfo2 = data

    var count = 0;
    inputValues.forEach((entry) => {
        if (count == 0) {
            if (entry != "") {
                filteredUfo2 = data.filter(selectDate);
            }
            else {
                filteredUfo2 = data;
            }
        };
        if (count == 1) {
            if (entry != "") {
                filteredUfo2 = filteredUfo2.filter(selectCity);
            }
            else {
                filteredUfo2 = filteredUfo2;
            }
        };
        if (count == 2) {
            if (entry != "") {
                filteredUfo2 = filteredUfo2.filter(selectState)
            }
            else {
                filteredUfo2 = filteredUfo2;
            }
        };
        if (count == 3) {
            if (entry != "") {
                filteredUfo2 = filteredUfo2.filter(selectCountry)
            }
            else {
                filteredUfo2 = filteredUfo2;
            }
        };
        if (count == 4) {
            if (entry != "") {
                filteredUfo2 = filteredUfo2.filter(selectShape)
            }
            else {
                filteredUfo2 = filteredUfo2;
            }
        };
        count += 1
    });

    // First call clearTable to refresh page; then call loadTable to insert filtered data
    clearTable();
    loadTable(filteredUfo2);
}

