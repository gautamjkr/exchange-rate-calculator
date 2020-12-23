const currencyE1 = document.getElementById('currency-one')
const currencyE2 = document.getElementById('currency-two')
const amountE1 = document.getElementById('amount-one')
const amountE2 = document.getElementById('amount-two')
const swap = document.getElementById('swap')
const result = document.getElementById('result')


function calculate (){
const first_currency = currencyE1.value;
const second_currency = currencyE2.value;

//request data from the given API using fetch()

fetch(`https://api.exchangerate-api.com/v4/latest/${first_currency}`)

//Since the response might be anything, we convert it into JSON Object and then use it for our purpose
.then (res => res.json())
.then (data => {
    const rate = data.rates[second_currency];
    console.log(first_currency, second_currency, rate)
    result.innerText = `1 ${first_currency} = ${rate} ${second_currency}`
    amountE2.value = (amountE1.value * rate).toFixed(2)
})
}

swap.onclick = function(){
    const temp = currencyE1.value;
    currencyE1.value = currencyE2.value;
    currencyE2.value = temp;
    calculate();
}

amountE1.addEventListener('input', calculate)
amountE2.addEventListener('input', calculate)
currencyE1.addEventListener('change', calculate)
currencyE2.addEventListener('change', calculate)

calculate();