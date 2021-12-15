let btn = document.getElementById("btn")
let bill_amount = document.getElementById("bill_amount")
let percentage_tip = document.getElementById("percentage_tip")
let tip_amount = document.getElementById("tip_amount")
let total = document.getElementById("total")

percentage_tip.addEventListener("input",()=>{
    tip_amount.value=`${(bill_amount.value)*(percentage_tip.value/100)}`
})
btn.addEventListener("click", ()=>{
    total.value = `${Number(tip_amount.value)+Number(bill_amount.value)}`
})