// from data.js
var tableData = data;
console.log(tableData)
// YOUR CODE HERE!
var tbody = d3.select("tbody");
function tableBuild(data){
    tbody.html("");
    data.forEach((row) =>{
        var dataRow = tbody.append('tr');
        Object.values(row).forEach((value) =>{
            var cell = dataRow.append('td');
            cell.text(value);
        })
    })
}

tableBuild(tableData);

function filter(){
    var date = d3.select('#datetime').property('value');
    if (date){
        var filterData = tableData.filter(row => row.datetime===date);

    }
    tableBuild(filterData);
}
d3.selectAll("#filter-btn").on("click", filter);
