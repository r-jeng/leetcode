/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var romanObject = {
    I : 1, 
    V : 5, 
    X : 10, 
    L : 50, 
    C : 100, 
    D : 500, 
    M : 1000,
    IV : 4, IX : 9, XL : 40, XC : 90, CD : 400, CM : 900
  }
  var total = 0;
  var organizedRomans = [];
  var splitString = s.split('');
  for (var i = 0; i < splitString.length; i++) {
    var char = splitString[i];
    var nextChar = splitString[i+1];
    if (char === 'I' && nextChar !== 'V' && nextChar !== 'X'
        || char === 'V' 
        || char === 'X' && nextChar !== 'L' && nextChar !== 'C'
        || char === 'L'
        || char === 'C' && nextChar !== 'D' && nextChar !== 'M'
        || char === 'D'
        || char === 'M') {
      organizedRomans.push(char);
    } else if (char === 'I' && nextChar === 'V' 
        || char === 'I' && nextChar === 'X'
        || char === 'X' && nextChar === 'L'
        || char === 'X' && nextChar === 'C'
        || char === 'C' && nextChar === 'D'
        || char === 'C' && nextChar === 'M') {
      organizedRomans.push(char+nextChar);
      i++;
    }
  }
  for (var j = 0; j < organizedRomans.length; j++) {
    var currentRoman = organizedRomans[j];
    total += romanObject[currentRoman];
  }
  return total;
};