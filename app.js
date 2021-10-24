document.getElementById("loan-form").addEventListener('submit', function (e) {
    document.getElementById("loading").style.display = "block";

    setTimeout(() => {
        calculate();
    }, 3000);
    e.preventDefault();
});


function calculate() {


    const amount = (document.getElementById("amount"))
    const interest = (document.getElementById("interest"))
    const years = (document.getElementById("years"))
    const submit = (document.getElementById("submit"))
    const loading = (document.getElementById("loading"))
    const monthlyPayment = (document.getElementById("monthly-payment"))
    const totalPayment = (document.getElementById("total-payment"))
    const totalInterest = (document.getElementById("total-interest"))


    const principle = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedpayments = parseFloat(years.value) * 12;
    const x = Math.pow(1 + calculatedInterest, calculatedpayments);
    const monthly = (principle * x * calculatedInterest) / (x - 1);


    if (isFinite(monthly)) {
        document.getElementById('loading').style.display = "none";
        document.querySelector(".results").style.display = "block";

        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedpayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedpayments) - principle).toFixed(2);

    }
    else {
        Swal.fire('Check your number Please!')
    }

}