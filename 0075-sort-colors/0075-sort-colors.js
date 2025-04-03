/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {

    const N = nums.length;
    let l = 0, m = 0; h = N-1;

    while(m<=h) {
        if(nums[m] === 0) {
            [nums[l++], nums[m++]] = [nums[m], nums[l]];
        } else if (nums[m] === 2) {
            [nums[m], nums[h--]] = [nums[h], nums[m]]; 
        } else {
            m++;
        }
    }
    
};