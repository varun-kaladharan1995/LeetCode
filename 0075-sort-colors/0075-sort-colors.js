/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const N = nums.length;
    let i = 0, j = N - 1, curr = 0;

    while(curr <= j) {
        if(nums[curr] === 0) {
            [nums[i++], nums[curr++]] = [nums[curr], nums[i]];
        } else if(nums[curr] === 2) {
            [nums[j--], nums[curr]] = [nums[curr], nums[j]];
        } else {
            curr++;
        }
    }
    
};