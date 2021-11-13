/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var hasDup = false;
  var counter = {};
  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];
    if (counter[num] === undefined) {
      counter[num] = 0;
    } else {
      hasDup = true;
    }
  }
  return hasDup;
};