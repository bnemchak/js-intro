const expense = {
  id: 1,
  location: 'Baja Burrito',
  date: '11/11/20',
  price: 1324,
}

// Challenge
// write a function that takes in an expense object
// if the price (in pennies) is greater than 1500
// add a key of approved with a value of false
// otherwise add a key of approved with a value of true
// return the expense object

const priceChecker = (expenseObject) => {
  if (expenseObject.price > 1500){
    expenseObject.approved = false;
  } else {
    expenseObject.approved = true;
  }
  return expenseObject;
}

  console.log(priceChecker(expense));
