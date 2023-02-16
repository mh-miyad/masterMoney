const incomeInput = document.getElementById('income-input');
const foodInput = document.getElementById('food-input');
const rentInput = document.getElementById('rent-input');
const otherInput = document.getElementById('other-input');
const totalExpense = document.getElementById('total-expens');
const balanceTotal = document.getElementById('balance');
const calculateBtn = document.getElementById('calculate-btn');
const saveValue = document.getElementById('save-input');
const saveBtn = document.getElementById('save-btn')
const saveBalance = document.getElementById('saving-blnc')
const remainingBalance = document.getElementById('remaining-blnc')

function sumOfExpense(sum1, sum2, sum3) {
  let a = parseInt(sum1);
  let b = parseInt(sum2);
  let c = parseInt(sum3);


  return (a + b + c);

}

function savingAmount(saving) {
  let food = foodInput.value;
  let rent = rentInput.value;
  let other = otherInput.value;
  let income = parseInt(incomeInput.value);
  let result = sumOfExpense(food, rent, other);
  let balanceResult = income - result;

  let save = parseInt(saving);
  let savings = balanceResult * (save / 100);
    let remainBlnce  = balanceResult - savings;
  return [savings ,remainBlnce];

};


calculateBtn.addEventListener('click', function () {
  let food = foodInput.value;
  let rent = rentInput.value;
  let other = otherInput.value;
  let income = parseInt(incomeInput.value);

  let result = sumOfExpense(food, rent, other);

  let balanceResult = income - result;
  if (isNaN(result) && isNaN(income - result)) {
    return alert('Please Enter Your Income')
  } else if (result > balanceResult) {
    alert(" Please Your Expense is More Than Your income ")
    totalExpense.innerText = result;
    balanceTotal.innerText = income - result;

  } else {
    totalExpense.innerText = result;
    balanceTotal.innerText = income - result;
  }

});


saveBtn.addEventListener('click', function () {
  let save = savingAmount(saveValue.value);
  saveBalance.innerText = parseFloat(save[0]).toFixed(2);
  remainingBalance.innerText = save[1];

});