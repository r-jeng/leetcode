/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  var addOne = true;  
  for (var i = digits.length - 1; i >= 0;i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    } else {
     digits[i] = 0; 
    }
  }
   if (addOne) { 
     digits.unshift(1); 
  }
   return digits;
};

// [1, 2, 9]
// [1, 3, 0]

// [1, 9, 9]
// [2, 0, 0]

// [1, 8, 8]
// [1, 8, 9]
// [1, 9, 0]