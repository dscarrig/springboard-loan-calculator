


window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const amountInput = document.getElementById("loan-amount");
  const yearsInput = document.getElementById("loan-years");
  const rateInput = document.getElementById("loan-rate");
  
  amountInput.value = "200.00";
  yearsInput.value = "5";
  rateInput.value = "12";

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  var values = getCurrentUIValues();
  var monthlyPayment = calculateMonthlyPayment(values);
  updateMonthly(monthlyPayment);  
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  var monthlyRate = (values.rate / 100) / 12;
  var totalPayments = 12 * values.years;

  var monthlyPayment = (monthlyRate * values.amount) / (1 - Math.pow((1 + monthlyRate), -totalPayments));

  return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const paymentElement = document.getElementById("monthly-payment");

  paymentElement.innerText = monthly;
}
