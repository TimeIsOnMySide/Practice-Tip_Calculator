// Collect data from the DOM
// When the text changes, calculate result
document.querySelector('#bill').addEventListener('change', (findresult));
document.querySelector('#tip').addEventListener('change', (findresult));
document.querySelector('#people').addEventListener('change', (findresult));


// Initialize variables
let tipTotal;
let billTotal;

// Format usd
let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

// Set starting amounts
document.querySelector('#tipTotal').textContent = USDollar.format(0);
document.querySelector('#billTotal').textContent = USDollar.format(0);
document.querySelector('#tip').value = '15%';
document.querySelector('#bill').value = '0.00';
document.querySelector('#people').value = '1';
document.querySelector('.perPerson1').style.visibility = "hidden";
document.querySelector('.perPerson2').style.visibility = "hidden";


// limit characters in the text fields
const regex = /[0-9.]/;
document.querySelector("#tip").addEventListener("keypress", event => {
  if (!regex.test(event.key)) {
    event.preventDefault();
  }
});
document.querySelector("#bill").addEventListener("keypress", event => {
    if (!regex.test(event.key)) {
      event.preventDefault();
    }
});
const peopleRegex = /[1-9]/;
document.querySelector("#people").addEventListener("keypress", event => {
    if (!peopleRegex.test(event.key)) {
      event.preventDefault();
    }
});

// Function that gives the totals
function findresult() {
    var bill = parseInt(document.getElementById('bill').value);
    var tip = parseInt(document.getElementById('tip').value);
    var people = parseInt(document.getElementById('people').value);

    if(tip) { // Add % to tip text
        document.querySelector('#tip').value = tip.toString() + '%';
    }
    if(people > 1) { // show the per person text if theres multiple people
        document.querySelector('.perPerson1').style.visibility = "visible";
        document.querySelector('.perPerson2').style.visibility = "visible";
    } else { // hide the per person text if theres one person
        document.querySelector('.perPerson1').style.visibility = "hidden";
        document.querySelector('.perPerson2').style.visibility = "hidden";
    }
    if(bill && tip && people === 1) { // If theres only one person
        tipTotal = (tip / 100) * bill;
        billTotal = tipTotal + bill;
        document.querySelector('#tipTotal').textContent = USDollar.format(tipTotal.toString());
        document.querySelector('#billTotal').textContent = USDollar.format(billTotal.toString());
    } else if(bill && tip && people > 1) { // If theres more than one person
        tipTotal = ((tip / 100) * bill) / people;
        billTotal = (tipTotal + bill) / people;
        document.querySelector('#tipTotal').textContent = USDollar.format(tipTotal.toString());
        document.querySelector('#billTotal').textContent = USDollar.format(billTotal.toString());
    }
}