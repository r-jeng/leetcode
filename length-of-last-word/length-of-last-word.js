/**
 * @param {string} s
 * @return {number}
 */

// if string is empty
  // return 0
// else
  // split the string at the space
// return the length of the last word in the arr

var lengthOfLastWord = function(s) {
  var result = [];
  var split = s.split(' ');
  for (var i = 0; i < split.length; i++) {
    if (split[i].length === 0) {
      continue;
    } else {
      result.push(split[i]);
    }
  }
  if (result.length === 1) {
    return result[0].length;
  } else if (result.length === 0) { 
    return 0;
  } else {
    return result[result.length - 1].length;
  }
};