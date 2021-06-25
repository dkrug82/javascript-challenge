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

//created myFilter function to filter dataset by user inputted date
function myFilter() {
        //created empty object 
        var conditions = {};
        var filterData = tableData;
        var date = d3.select('#datetime').property('value');
        //console.log(date)
        if(date) {conditions.datetime = date;}
        
        var cityIn = d3.select('#city').property('value').toLowerCase();
        if(cityIn){conditions.city = cityIn;}
    
        var stateIn = d3.select('#state').property('value').toLowerCase();
        if(stateIn){conditions.state = stateIn} 
    
        var countryIn = d3.select('#country').property('value').toLowerCase();
        if(countryIn) {conditions.country = countryIn}
    
        var shapeIn = d3.select('#shape').property('value').toLowerCase();
        if(shapeIn) {conditions.shape = shapeIn}
    
        console.log(conditions); 
         
            Object.entries(conditions).forEach(([key, value]) => {
                console.log(key);
                console.log(value);
                filterData = filterData.filter(row => row[key] === value);
    
                console.log(filterData);
                
            });
            
    //called the function with the filtered data from the dat.js file
    tableBuild(filterData);
}
//set up event lister to apply the filter on a click of the filter button
d3.selectAll("#filter-btn").on("click", myFilter);
