function displayMinute() {
    const now = new Date();
    const minute = now.getMinutes();
    document.getElementById("minute").innerText = `The current minute is ${minute}.`;
}

function howdy(firstName){
    alert("Howdy " + firstName);
}

function evalNumber() {
    let input = document.getElementById("numInput").value;
    let num = Number(input);
  
    if (Number.isInteger(num) && num >= 10000 && num <= 99999) {
        document.getElementById("result").innerHTML = "Valid 5-digit integer";
    } else {
        document.getElementById("result").innerHTML = "Invalid input, please enter a 5-digit integer";
    }
}

function myFunction(myArray) {
    // your function code goes here
}

function parseArray(arr) {
    return arr.sort();
}
  
const myArray = ["banana", "apple", "orange"];
console.log(parseArray(myArray));


const searchTerm = "JavaScript";
const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${searchTerm}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        april
})
    .catch(error => console.log(error));

function initMap() {
    const myLatLng = { lat: -25.363, lng: 131.044 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: myLatLng,
    });
    const marker = new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Hello World!",
    });
}


const projectId = "12345"; // replace with your project ID
const tableId = "67890"; // replace with your table ID
const url = `https://api.ochre.msu.edu/table?project_id=${projectId}&table_id=${tableId}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    // handle the data here
    const tableData = data.result.data;
    const table = document.createElement("table");

    for (let i = 0; i < tableData.length; i++) {
      const row = document.createElement("tr");
      const column1 = document.createElement("td");
      const column2 = document.createElement("td");

      column1.innerHTML = tableData[i].column1;
      column2.innerHTML = tableData[i].column2;

      row.appendChild(column1);
      row.appendChild(column2);
      table.appendChild(row);
    }

    document.getElementById("table-container").appendChild(table);
  })
  .catch(error => console.log(error));
