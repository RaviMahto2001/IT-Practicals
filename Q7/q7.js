// Create XMLHttpRequest object.
var oXHR = new XMLHttpRequest();
// Initiate request.
oXHR.onreadystatechange = reportStatus;
oXHR.open("GET", "data.json", true);  // get json file.
oXHR.send();
function reportStatus()
{
    if (oXHR.readyState == 4)   // Check if request is complete.
    {
        // Create an HTML table using a response from the server.
        displayData(this.responseText);
    }
}
// Create an HTML table using the JSON data.
function displayData(jsonData)
{
    var arrData = [];
    arrData = JSON.parse(jsonData); 	// Convert JSON to array.
    var col = [];
    for (var i = 0; i<arrData.length; i++)
    {
        for (var key in arrData[i])
        {
            if (col.indexOf(key) === -1)
            {
                col.push(key);
            }
        }
    }
    // Create a dynamic table.
    var table = document.createElement("table");
    // Create table header.
    var tr = table.insertRow(-1);                   // Table row.
    for (var i = 0; i<col.length; i++)
    {
        var th = document.createElement("th");      // Table header.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }
    // Add JSON to the table rows.
    for (var i = 0; i<arrData.length; i++)
    {
        tr = table.insertRow(-1);
        for (var j = 0; j <col.length; j++)
        {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = arrData[i][col[j]];
        }
    }
    // Finally, add the dynamic table to a container.
    var divContainer = document.getElementById("showTable");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
};
