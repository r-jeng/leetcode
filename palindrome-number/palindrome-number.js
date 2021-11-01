/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  var numString = x.toString();
  if (numString.length === 0 || numString.length === 1)  {
    return true;
  }
  if (numString[0] === numString[numString.length - 1]) {
    return isPalindrome( numString.slice(1, numString.length - 1) );
  }
    return false;  
};