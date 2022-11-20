// creating a reference to the element
let targetArea = document.getElementById("tableDisplayContainer");

// Display Table
targetArea.innerHTML = "";
let i = 2;
let myInterval = setInterval(function () {
    let row = document.createElement("p");
    let table = "";
    for(let j=1; j<=10; j++){
        table = table + i*j + " ";
    }
    row.innerHTML = table;
    row.style.color = "#" + (Math.floor((1 << 24) * Math.random())).toString(16);
    row.style.border = "2px solid black";
    row.style.margin = "5px";
    row.style.textAlign = "center";
    row.style.fontSize = `${14 + 2 * i}px`;
    targetArea.appendChild(row);
    i = i + 1;
    if (i > 10) {
        clearInterval(myInterval);
    }
}, 1000);


