document.getElementById("year").textContent =
 new Date().getFullYear();

document.getElementById("contact-form").onsubmit =
 function(event) {
 event.preventDefault();

 document.getElementById("form-message")
 .classList.remove("d-none");
 };

let totalHours = 0;

function sumHours() {
 totalHours = 0;
 let hours = prompt("Enter hours or 0 to stop:");

 while (hours != 0 && hours != null) {
 totalHours += Number(hours);
 hours = prompt("Enter hours or 0 to stop:");
 }

 document.getElementById("hours-result").textContent =
 "Total hours: " + totalHours;
}

function calcQuote() {
 let rate =
 document.getElementById("hourly-rate").value;

 let retainer =
 document.getElementById("monthly-retainer").value;

 let projectCost = totalHours * rate;
 let answer = "The monthly retainer is cheaper.";

 if (projectCost < retainer) {
 answer = "The hourly project cost is cheaper.";
 }

 if (projectCost == retainer) {
 answer = "Both options cost the same.";
 }

 document.getElementById("quote-result").textContent =
 "Project cost: $" + projectCost + ". " + answer;
}
