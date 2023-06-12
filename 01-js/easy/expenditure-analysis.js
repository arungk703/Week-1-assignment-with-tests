/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {

  const map = new Map();
  function expenditure(category, totalSpent){
    this.category = category;
    this.totalSpent = totalSpent;
  }

  var expenditures = [];

  for(let transaction of transactions){
    let category = transaction.category;
    let price = transaction.price;
    if(map.has(category))
      map.set(category, map.get(category)+price);
    else
      map.set(category, price);
  }

  map.forEach(function(value, key){
    expenditures.push(new expenditure(key, value));
  });

  return expenditures;
}


module.exports = calculateTotalSpentByCategory;
