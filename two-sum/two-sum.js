/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        var numOne = nums[i];
        for (var j = i + 1; j < nums.length; j++) {
            var numTwo = nums[j];
            if (numOne + numTwo === target) {
                return [i, j];
            }
        }
    }
};