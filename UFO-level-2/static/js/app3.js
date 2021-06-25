// from data.js
var tableData = data;
console.log(tableData)
// selected tbody in html
var tbody = d3.select("tbody");
//built function to add data from data file to table
function tableBuild(data) {
    //used to clear current data on table
    tbody.html("");
    //used forEach to itrate through each ro of data
    data.forEach((row) => {
        //created variable to create a new row on the table
        var dataRow = tbody.append('tr');
        //read values from each row of the dataset
        Object.values(row).forEach((value) => {
            //appened the new row in order to accept the values
            var cell = dataRow.append('td');
            //inserted the values into each corresponing cell on the table
            cell.text(value);
        })
    })
}
//called the function with the data from the dat.js file
tableBuild(tableData);

function multipleFilters(){
    var filters = {};
    var userInput = d3.select(this.select("input"));  // The this will make sure you are selecting current object in case you change later
    var valueFromUser = userInput .property("value");
    var keyFromUser = userInput.html();
    console.log(userInput)
    console.log(valueFromUser)
    // Call function to apply all filters and rebuild the table
    someFunctionfilterTable();
    }
    
    function someFunctionfilterTable(){
    // You can use Object.Entries to get both key and Value !
    Object.entries(filters).forEach(([key, value]) => {
    myfilteredData = myfilteredData.filter(row => row.key === value);
    }
    )}

d3.selectAll("#filter-btn").on("click", multipleFilters);