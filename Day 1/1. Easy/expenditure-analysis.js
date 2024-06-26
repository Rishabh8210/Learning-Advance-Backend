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
    for(let it of transactions)
        if(!(categories.includes(it.category)))
          categories.push(it.category)
    
    let res = []
    for(let category of categories){
        let price = 0
        let data = {}
        for(let transaction of transactions){
            if(category == transaction.category)
                price += transaction.price
        }
        data[category] = price;
        res.push(data);
    }
    return res;
}
let data = [
  {
    itemName: "Banana",
    category: "Fruit",
    price: 34,
    timeStamp: new Date().getTime()
  },
  {
    itemName: "Apple",
    category: "Fruit",
    price: 64,
    timeStamp: new Date().getTime()
  },
  {
    itemName: "Chicken",
    category: "Nonveg",
    price: 34,
    timeStamp: new Date().getTime()
  },
  {
    itemName: "Mutton",
    category: "Nonveg",
    price: 34,
    timeStamp: new Date().getTime()
  },
  {
    itemName: "Paneer",
    category: "Veg",
    price: 34,
    timeStamp: new Date().getTime()
  },
]
let res = calculateTotalSpentByCategory(data);
console.log(res)
module.exports = calculateTotalSpentByCategory;