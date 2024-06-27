/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
function cleanInput(str){
  let newStr = "";
  for(let i = 0; i < str.length; i++)
  {
      if(str[i] >= 'a' && str[i] <= 'z')
      {
          newStr += str[i];
      }
  }
  return newStr;
}
function isPalindrome(str) {
str = str.toLowerCase();
// cleaning input
str = cleanInput(str);

console.log(str);
let i = 0;
let j = str.length - 1;
while(i < j){
    if(str[i] != str[j])
        return false;
    i++;j--;
}
return true;
}
console.log(isPalindrome("Able, was I ere I saw Elba!"))
module.exports = isPalindrome;
