// Collect data from the DOM
// When the text changes, calculate result
document.querySelector('#bill').addEventListener('change', (findresult));
document.querySelector('#tip').addEventListener('change', (findresult));

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

// limit characters in the text field
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

// Function that gives the totals
function findresult() {
    var bill = parseInt(document.getElementById('bill').value);
    var tip = parseInt(document.getElementById('tip').value);
    if(tip) {
        document.querySelector('#tip').value = tip.toString() + '%';
    }
    if(bill && tip) {
        tipTotal = (tip / 100) * bill;
        billTotal = tipTotal + bill;
        document.querySelector('#tipTotal').textContent = USDollar.format(tipTotal.toString());
        document.querySelector('#billTotal').textContent = USDollar.format(billTotal.toString());
    }
}