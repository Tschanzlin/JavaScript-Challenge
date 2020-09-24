# JavaScript-Challenge

Notes:
- I incorporated a number of changes into UFO-Challenge-2, that are not present in UFO-1.  Functionally, the full data table loads automatically on opening the web-site rather than having to load by hitting the "Filter Table" in UFO-1.  The table also filters automatically when adding additional criteria (date, city, shape, etc.), rather than having to clear the data first.  I did this by incorporating the clearTable function just prior to the loadTable function.  I also created the loadTable and clearTable functions to avoid repetitve coding.  I decided not to change the coding on UFO-1 so I can see the change to coding as the project progressed.  Please refer to UFO-2 for the complete version of this homework assignment.

- All loading and filtering functions work properly using both the forms and the buttons.  I had difficulty getting the runEnter function to call after hitting "return" despite being linked to the "form.on" event handler.  I tried multiple corrections (changing button classes and ids, changing events, and adding selectAll, rather than select), but could not get this to work in UFO-Challenge-2 until finally using the "change" rather than "submit" event. The "Filter Table" button also activates the runEnter function, which calls both the loadTable and clearTable functions.  The "Clear Table" button only calls the clearTable function to clear all data.  

- The logic around multiple filter functions in UFO-Challenge-2 proved to be more difficult than I expected.  I quickly discovered that using "&&" to join two or more filters would not work.  Ultimately, I developed a chained filter that loops through each input value and filters if any string value is present.  The initial full (unfiltered) data set is stored as filteredUfo2.  All input values are stored in the array "inputValues".  A forEach loop iterates through each inputValue; if the current value is a non-empty string, the data object ("filteredUfo2") is filtered by that particular inputValue (date, city, etc).  If not, filteredUfo2 remains unchanged.  I assigned a counter to keep track of which inputValue to filter by, as the forEach loop iterates sequentially through the inputValue array.  This was the most difficult part of the assignment, and I would be interested in learning whether there are simpler ways to filter on multiple fields.
 

9/23:  UFO-2
- Further code clean-up
- Solved loading problem by changing form event handler event from 
"submit" to "change"

9/22:  UFO-2
- Added additional forms
- Solved the cumulative filtering function
- Cleaned code


9/21:  UFO-1
- Develop forEach loop to read through data.js and console.log output (objects within array)
- Add object iteration; console.log output (keys / values within each object in array)
- Add d3 select and append functions to represent data on index.html page
- Add filter function; console.log output
- Loading correctly with and without filter input
- Created clearTable function and added dedicated button



