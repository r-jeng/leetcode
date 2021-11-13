/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var counter = {};
  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];
    if (counter[num] === undefined) {
      counter[num] = 0;
    } else {
      counter[num]++;
    }
  }
  for (var key in counter) {
    if (counter[key] === 0) {
      return key;
    }
  }
};