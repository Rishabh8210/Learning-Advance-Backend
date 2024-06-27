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
  constructor(){
      this.result = 0;
  }
  add = (num)=>{
      this.result += num;
  }
  subtract = (num)=>{
      this.result -= num;
  }
  multiply = (num)=>{
      this.result *= num;
  }
  divide = (num)=>{
      if(num == 0)
          throw new Error("Error");
      this.result /= num;
  }
  getResult = ()=>{
      return this.result;
  }
  calculate = (str)=>{
      // cleaning the string
      let exp = "";
      let cntBraces = 0;
      str = str.toLowerCase();
      for(let i = 0; i < str.length; i++)
      {
          if(str[i] == ' ')
              continue;
          else if(str[i] >= 'a' && str[i] <= 'z')
              throw new Error("Error");
          else {
              if(str[i] == '(') cntBraces++;
              else if(str[i] == ')') cntBraces--;
              exp += str[i];
          }
      }
      if(cntBraces != 0) throw new Error("Error")
      if(exp){
          console.log(exp);
          exp = toPostfix(exp);
          console.log(exp);
          this.result = evaluatePostfix(exp);
      }
  }
  clear = ()=>{
      this.result = 0;
  }
}

function toPostfix(expression) {
const precedence = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    '^': 3
};

let output = [];
let stack = [];

// Regular expression to match operators, parentheses, and numbers
const tokens = expression.match(/\d+(\.\d+)?|[+\-*/^()]/g);

tokens.forEach(token => {
    if (/^\d+(\.\d+)?$/.test(token)) {
        output.push(token);  
    } else if ('+-*/^'.includes(token)) {
        while (stack.length > 0 && precedence[stack[stack.length - 1]] >= precedence[token]) {
            output.push(stack.pop());  
        }
        stack.push(token);  
    } else if (token === '(') {
        stack.push(token);  
    } else if (token === ')') {
        while (stack.length > 0 && stack[stack.length - 1] !== '(') {
            output.push(stack.pop());
        }
        stack.pop(); 
    }
});


while (stack.length > 0) {
    output.push(stack.pop());
}
return output.join(' ');
}
function evaluatePostfix(expression) {
let stack = [];
const tokens = expression.split(' ');

tokens.forEach(token => {
    if (!isNaN(token)) {
        stack.push(parseFloat(token));
    } else {
        let operand2 = stack.pop();
        let operand1 = stack.pop();
        switch (token) {
            case '+':
                stack.push(operand1 + operand2);
                break;
            case '-':
                stack.push(operand1 - operand2);
                break;
            case '*':
                stack.push(operand1 * operand2);
                break;
            case '/':
                if(operand2 == 0)
                    throw new Error("Error")
                stack.push(operand1 / operand2);
                break;
            default:
                throw new Error('Invalid token: ' + token);
        }
    }
});

if (stack.length !== 1) {
    throw new Error('Invalid expression: ' + expression);
}

return stack.pop();
}

module.exports = Calculator;
