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

// Create run function for both events (NOTE:  replaced inputElement / InputValue with chained
// references to filter ID in each function)
function runEnter() {
    d3.event.preventDefault();

    dateValue = d3.select("#datetime").property("value");
    cityValue = d3.select("#city").property("value");
    stateValue = d3.select("#state").property("value");
    countryValue = d3.select("#country").property("value");
    shapeValue = d3.select("#shape").property("value");
    inputValues = [dateValue, cityValue, stateValue, countryValue, shapeValue]
    console.log(dateValue, cityValue, stateValue, countryValue, shapeValue)
    console.log("--------------")
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
    // filteredUfo2 = data.filter(x => x.datetime == dateValue && x.city == cityValue)

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
        console.log(entry);
    });

    // var count = 0;
    // inputValues.forEach((entry) => {
    //     if (entry != "") {
    //         if (count = 0) {
    //             filteredUfo2 = data.filter(selectDate);
    //         }
    //         if (count = 1) {
    //             filteredUfo2 = filteredUfo2.filter(selectCity);
    //         }
    //         else {
    //             filteredUfo2 = filteredUfo2.filter(selectState);
    //         }
    //     }
    //     else {
    //         filteredUfo2 = data;
    //     }
    //     count += 1
    //     console.log(entry);
    // });

    filteredUfo2.forEach((ufo) => {
        var row = body.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
            // console.log(`${key}:  ${value}`);
        });
    });

}

//     // Check as to whether any form fields are loaded; if not; entire data table displays
//     var inputValue = d3.select("#datetime").property("value") || d3.select("#city").property("value");

//     // Add filter functions for each key field -- date, city, state, country, and shape
//     function selectDate(ufodate) {
//         return ufodate.datetime == d3.select("#datetime").property("value");
//     }

//     function selectCity(ufocity) {
//         return ufocity.city == d3.select("#city").property("value");
//     }

//     // Each if / else statement loops through an array of objects and returns 
//     // key value pairs; values are appended to html table rows  

//     // If inputValue equals empty string; show all data (iterate through "data" array)
//     if (inputValue == "") {
//         data.forEach((ufo) => {
//             var row = body.append("tr");
//             Object.entries(ufo).forEach(([key, value]) => {
//                 var cell = row.append("td");
//                 cell.text(value);
//             });
//         });
//         console.log(`Input Value: ${inputValue}`);
//         console.log(`Data entries:  ${data.length}`)
//     }

//     // Else, apply filter function and interate through "filteredUfo" array
//     else {
//         var filteredUfo = data.filter(selectDate);
//         var filteredUfo1 = filteredUfo.filter(selectCity);

//         console.log(filteredUfo1)

//         filteredUfo1.forEach((ufo) => {
//             var row = body.append("tr");
//             Object.entries(ufo).forEach(([key, value]) => {
//                 var cell = row.append("td");
//                 cell.text(value);
//                 // console.log(`${key}:  ${value}`);
//             });
//         });
//         console.log(`Input value: ${inputValue}`);
//         console.log(`Data entries: ${filteredUfo1.length}`)
//     }
// }


// Function to clear table assigned to "Clear Table" button
var button1 = d3.select("#clear-btn");
button1.on("click", clearTable);

function clearTable() {
    d3.selectAll("tbody>tr").remove();
    //    d3.selectAll(".filter list-group-item").remove();
    console.log("Clear table")
}