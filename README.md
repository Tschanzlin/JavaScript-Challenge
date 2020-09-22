# JavaScript-Challenge

Notes:
- The logic around multiple filter functions proved to be really challenging, and I quickly discovered that using an "&&" function to join two or more filters would not work.  I was finally able to develop a chained filter.  The initial data set is stored as filteredUfo.  All input values are stored in an array "inputValues".  I then created a forEach loop to iterat through each inputValue.  If the current value is a non-empty string, the filteredUfo is filtered by that particular input field.  If not, the filteredUfo remains unchanged.  This was the most difficult part of the assignment, and I would be interested in learning whether there are simpler ways to filter on multiple fields.



9/22:  UFO-level-2
- Added additional forms
- Solved the cumulative filtering function


9/21:  UFO-level-1
- Develop forEach loop to read through data.js and console.log output (objects within array)
- Add object iteration; console.log output (keys / values within each object in array)
- Add d3 select and append functions to represent data on index.html page
- Add filter function; console.log output
- Loading correctly with and without filter input
- Created clearTable function and added dedicated button



