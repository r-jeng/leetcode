/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var valueIndex;
    for (var i = 0; i < nums.length; i++) {
      nums.push(nums.splice(nums.indexOf(val), 1)[0])
    }
    for (var j = 0; j < nums.length; j++) {
      if (nums[j] === val) {
        valueIndex = j;
        break;
      }
    }
    return valueIndex;
};