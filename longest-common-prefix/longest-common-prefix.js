/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var prefix = "";
  if (strs === null || strs.length === 0) {
    return prefix
  }
  for (var i = 0; i < strs[0].length; i++){ 
    var char = strs[0][i];
    for (var j = 1; j < strs.length; j++){ 
      if (strs[j][i] !== char) {
        return prefix;
      }  
    }
    prefix = prefix + char;
  }
  return prefix;
}