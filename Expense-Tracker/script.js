  const addBtn = document.querySelector(".add-btn");
  const addTransactionElem = document.querySelector(".add-transaction");
  const amountInput = document.querySelector(".add-transaction #add-amount");
  const description = document.querySelector(".add-transaction #add-description");
  const radioBtns = document.querySelectorAll(
    ".add-transaction .radio-btn input[type=radio]"
  );
  const addTransactionForm = document.querySelector(".add-transaction form");
  const incomeAmount = document.querySelector(".income .income-amount");
  const expenseAmount = document.querySelector(".expense .expense-amount");
  const transactionElem = document.querySelector(".transaction-list");
  const leftBalance = document.querySelector(".expense .balance");
  const clearBtn = document.querySelector(".clear .clear-btn");
  const searchElem = document.querySelector('#search')

  let income = localStorage.getItem('income') || 0;
  income = parseInt(income)
  let expense = localStorage.getItem('expense') || 0;
  expense = parseInt(expense)
  let balance = income - expense;
  let color = "";
  transactionArr = JSON.parse(localStorage.getItem('transactionlist')) || [];

  addBtn.addEventListener("click", () => {
    addTransactionElem.classList.toggle("hidden");
    if (addBtn.innerText === "ADD") {
      addBtn.innerText = "cancel";
    } else {
      addBtn.innerText = "add";
    }
  });

  function showBalance () {
    transactionElem.innerHTML = ""
    leftBalance.innerText = `$${income - expense}`
    incomeAmount.innerText = `$${income}`
    expenseAmount.innerText = `$${expense}`
    let listString = localStorage.getItem('transactionlist') || "";
    let listArr = JSON.parse(localStorage.getItem('transactionlist') || "[]")
    listArr.forEach(elem => {
      showList(elem.localAmount, elem.descriptionVal, elem.color)
      });
  }

  window.addEventListener('load', () => {
    showBalance()
  })

  addTransactionForm.addEventListener('submit', (e) => {
    e.preventDefault()
    radioBtns.forEach(data => {
      if(data.checked){
        if(data.getAttribute('id') === 'add-expense'){
          color = "red"
          expense += parseInt(amountInput.value)
          let localAmount = parseInt(amountInput.value)
          localStorage.setItem('expense', expense)
          let descriptionVal = description.value;
          let information = {
            localAmount,
            descriptionVal,
            color
          }
          try {
            transactionArr.push(information)
            let dummyArr = JSON.stringify(transactionArr)
            localStorage.setItem('transactionlist', dummyArr);
          } catch (error) {
            console.log(error)
          }
          showBalance()
        } else {
          color = "green"
          income += parseInt(amountInput.value)
          console.log(income);
          let localAmount = parseInt(amountInput.value)
          localStorage.setItem('income', income)
          let descriptionVal = description.value;
          let information = {
            localAmount,
            descriptionVal,
            color
          }
          try {
            transactionArr.push(information)
            let dummyArr = JSON.stringify(transactionArr)
            localStorage.setItem('transactionlist', dummyArr);
          } catch (error) {
            console.log(error)
          }
          showBalance()
        }
      }
    })
    addTransactionForm.reset()
    addTransactionElem.classList.toggle("hidden");
    addBtn.innerText = "add"
  })

  function showList (amount, description, color) {
    let elem = document.createElement('div');
    elem.innerHTML = `
    <li class="flex border-r-4 border-r-${color}-500 rounded border p-2 text-xs justify-between items-center mb-2">
                      <p class="transaction-category">${description}</p>
                      <p class="transaction-amount">$${amount}</p>
                  </li>
    `
    transactionElem.append(elem)
  }
clearBtn.addEventListener('click', () => {
  localStorage.clear()
  income = 0
  expense = 0
  showBalance()
})

searchElem.addEventListener('input', searchField)

function searchField() {
  const searchInput = document.querySelector('#search');
  const filter = searchInput.value.toLowerCase()
  const groupList = document.querySelectorAll('.transaction-list li')
  groupList.forEach(data => {
    let text = data.textContent;
    if(text.toLowerCase().includes(filter)) {
      data.style.display = ""
    } else {
      data.style.display = "none"
    }
  })
} 