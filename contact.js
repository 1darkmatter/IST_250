document.getElementById("year").textContent =
 new Date().getFullYear();

document.getElementById("contact-form")
 .addEventListener("submit", function(event) {
 event.preventDefault();

 document.getElementById("form-message")
 .classList.remove("d-none");
 });

function calcFlat() {
 let projectFee = 7500;
 let retainer = prompt("Enter monthly retainer:");

 if (projectFee < retainer) {
 document.getElementById("flat-result").textContent =
 "The project fee is cheaper.";
 } else {
 document.getElementById("flat-result").textContent =
 "The monthly retainer is cheaper.";
 }
}

function calcParam(baseFee) {
 let retainer = prompt("Enter monthly retainer:");

 if (baseFee < retainer) {
 document.getElementById("param-result").textContent =
 "The project fee is cheaper.";
 } else {
 document.getElementById("param-result").textContent =
 "The monthly retainer is cheaper.";
 }
}

function calcInput(baseFee) {
 let retainer =
 document.getElementById("monthly-retainer").value;

 if (baseFee < retainer) {
 document.getElementById("input-result").textContent =
 "The project fee is cheaper.";
 } else {
 document.getElementById("input-result").textContent =
 "The monthly retainer is cheaper.";
 }
}

function calcInput2() {
 calcInput(7500);
}

function sumHours() {
 let total = 0;
 let hours = prompt("Enter hours or type 0 to stop:");

 while (hours != 0) {
 total = total + Number(hours);
 hours = prompt("Enter hours or type 0 to stop:");
 }

 document.getElementById("hours-result").textContent =
 "Total hours: " + total;
}

function sumHoursLimit(limit) {
 let total = 0;

 while (total < limit) {
 let hours = prompt("Enter project hours:");
 total = total + Number(hours);
 }

 document.getElementById("limit-result").textContent =
 "Total hours: " + total;
}

function runLoopCalculations() {
 let evenSum = 0;
 let oddProduct = 1;

 for (let i = 1; i <= 100; i++) {
 if (i % 2 == 0) {
 evenSum = evenSum + i;
 }

 if (i % 2 != 0) {
 oddProduct = oddProduct * i;
 }
 }

 document.getElementById("even-result").textContent =
 "Even number sum: " + evenSum;

 document.getElementById("odd-result").textContent =
 "Odd number product: " + oddProduct;
}
