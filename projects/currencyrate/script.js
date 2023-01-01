//const currFrom = document.querySelector(`.from`);
//const currTo = document.querySelector(`.to`);
const num = document.querySelector(`.num`);
const answer = document.querySelector(`.answer`);
const button = document.querySelector(`.add-currency-btn`);

let usdRate = 62.50;
let tryRate = 3.35;

var optionsFrom = document.getElementById('from').options;
var optionsTo = document.getElementById('to').options;
var currFrom = "TRY";
var currTo = "RUB";
console.log(currFrom);
console.log(currTo);

function SelectFrom() {
  var sel = document.getElementById('from').selectedIndex;
  var options = document.getElementById('from').options;
  currFrom = options[sel].value;
  console.log(currFrom)
}

function SelectTo() {
    var sel = document.getElementById('to').selectedIndex;
    var options = document.getElementById('to').options;
    currTo = options[sel].value;
    console.log(currTo)
}



button.addEventListener(`click`, () => {
    console.log(num.value);
    var x = Number(num.value);
    var currName = "";
    console.log(x);
    if(currFrom === "TRY") {
        x = x * tryRate;
    } else if(currFrom === "USD") {
        x = x * usdRate;
    }
    
    if(currTo === "TRY") {
        x = x / tryRate;
        currName = "₺";
    } else if(currTo === "USD") {
        x = x / usdRate;
        currName = "$";
    } else {
        currName = "₽";
    }
    
    
    answer.innerHTML = currName + x.toFixed(1);
})
