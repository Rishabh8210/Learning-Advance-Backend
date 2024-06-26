/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let categories = []
  for(let i = 0; i < transactions.length; i++)
  {
      let t = transactions[i];
      if(categories[t.category])
      {
          categories[t.category] = categories[t.category] + t.price;
      }else{
         categories[t.category] = t.price;
      }
  }  
  var keys = Object.keys(categories)
  let res = []
  for(let it of keys){
      res.push({category: it, totalSpent: categories[it]});
  }
  return res;
}

module.exports = calculateTotalSpentByCategory;
