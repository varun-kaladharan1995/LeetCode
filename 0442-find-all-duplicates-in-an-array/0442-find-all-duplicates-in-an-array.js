/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {

    let result = [];

    for(let i=0; i<nums.length; i++){
        let index = Math.abs(nums[i]) - 1;
        if(nums[index] > 0) nums[index] = -nums[index];
        else result.push(Math.abs(nums[i]));
    }

    return result;
    
};