function howdy(firstName){
    alert("Howdy " + firstName);
}

function evalNumber() {
    let input = document.getElementById("numInput").value;
    let num = parseInt(input);
  
    if (Number.isInteger(num) && num >= 10000 && num <= 99999) {
        document.getElementById("result").innerHTML = "Valid 5-digit integer";
    } else {
        document.getElementById("result").innerHTML = "Invalid input, please enter a 5-digit integer";
    }
}