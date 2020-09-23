# JavaScript-Challenge

Notes:
- All loading and filtering functions work properly; please use the "Filter Table" and "Clear Table" buttons as the only remaining functional hurdle is getting the filtered tables to load when hitting "enter" after entering a value in any field.  The "Filter Table" button correctly activates the associated fun, filter, and load functions, and the "Clear Table" button similarly clears all data.  I tried multiple corrections (changing button classes and ids, changing events, and adding selectAll, rather than select), but could not get this to work in UFO-Challenge-2.
- The logic around multiple filter functions in UFO-Challenge-2 proved to be more difficult than I expected.  I quickly discovered that using "&&" to join two or more filters would not work.  Ultimately, I developed a chained filter that loops through each input value and filters if any string value is present.  The initial full (unfiltered) data set is stored as filteredUfo2.  All input values are stored in the array "inputValues".  A forEach loop iterates through each inputValue; if the current value is a non-empty string, the object is filtered by that particular inputValue (date, city, etc).  If not, filteredUfo2 remains unchanged.  I assigned a counter to keep track of which inputValue to filter by, as the forEach loop iterates sequently through the inputValue array.  This was the most difficult part of the assignment, and I would be interested in learning whether there are simpler ways to filter on multiple fields.
- Lastly, the coding changed slightly between UFO-1 and UFO-2.  For example, in UFO-2, I created a loadTable function to avoid repititive code.  I kept the original code in UFO-1 to see some of the changes from the initial code to the final project.

 



9/22:  UFO-level-2
- Added additional forms
- Solved the cumulative filtering function
- Cleaned code


9/21:  UFO-level-1
- Develop forEach loop to read through data.js and console.log output (objects within array)
- Add object iteration; console.log output (keys / values within each object in array)
- Add d3 select and append functions to represent data on index.html page
- Add filter function; console.log output
- Loading correctly with and without filter input
- Created clearTable function and added dedicated button



