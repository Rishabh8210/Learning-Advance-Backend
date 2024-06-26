/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {
  constructor(initialValue) {
    this.result = initialValue
  }

  add = (num1, num2) => {
    this.result = num1 + num2;
    console.log(this.result)

    return this.result
  }

  sub = (num1, num2) => {
    this.result = num1 - num2;
    console.log(this.result)

    return this.result
  }
  mul = (num1, num2) => {
    this.result = num1 * num2;
    console.log(this.result)

    return this.result
  }
  div = (num1, num2) => {
    this.result = num1 / num2;
    console.log(this.result)

    return this.result
  }
  clear = () => {
    this.result = 0;
    console.log(this.result)
  }
}

let expression = "10 +   2 *    (   6 - (4 + 1) / 2) + 7";
let newExp = ""

// remove the spaces
for(let it of expression){
    if(it != ' ')
        newExp += it;
    else if(it >= 'a' && it <= 'z' && it >= 'A' && it <= 'Z'){
       console.log("Failed")
       break;
    }
}

// postfix conversion 
function infixToPostfix(expression) {
  let precedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2
  };

  let outputQueue = [];
  let operatorStack = [];

  let tokens = expression.split(/\s+/);

  for (let token of tokens) {
      if (!isNaN(token)) {
          outputQueue.push(token);
      } else if (token === '+' || token === '-' || token === '*' || token === '/') {
          while (operatorStack.length > 0 && precedence[operatorStack[operatorStack.length - 1]] >= precedence[token]) {
              outputQueue.push(operatorStack.pop());
          }
          operatorStack.push(token);
      } else if (token === '(') {
          operatorStack.push(token);
      } else if (token === ')') {
          while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] !== '(') {
              outputQueue.push(operatorStack.pop());
          }
          operatorStack.pop();
      }
  }

  while (operatorStack.length > 0) {
      outputQueue.push(operatorStack.pop());
  }

  return outputQueue.join(' ');
}
let postfixExpression = infixToPostfix(newExp);
console.log(postfixExpression)
// Postfix evaluation
function evaluatePostfix(expression, obj) {

  let stack = [];

  for (let token of expression.split(' ')) {
      if (!isNaN(token)) {
          
          stack.push(Number(token));
      } else {
         
          let b = stack.pop();
          let a = stack.pop();
          switch (token) {
              case '+':
                  let add = obj.add(a, b);
                  stack.push(add);
                  break;
              case '-':
                  let sub = obj.sub(a, b);
                  stack.push(sub);
                  break;
              case '*':
                  let mul = obj.mul(a, b);
                  stack.push(mul);
                  break;
              case '/':
                  let div = obj.div(a, b)
                  stack.push(div);
                  break;
              default:
                  throw new Error(`Unknown operator: ${token}`);
          }
      }
  }

  if (stack.length !== 1) {
      throw new Error('Invalid postfix expression');
  }

  return stack.pop();
}
let obj = new Calculator(0)

let res = evaluatePostfix(postfixExpression, obj);
console.log(res)
module.exports = Calculator;