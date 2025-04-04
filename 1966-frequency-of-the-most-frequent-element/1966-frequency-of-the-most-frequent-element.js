/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    nums.sort((a,b) => a - b);
    let l = 0, r = 0, total = 0, N = nums.length, res = 0;

    while(r < N) {
        total += nums[r];

        while(nums[r]*(r - l + 1) > total + k) {
            total -= nums[l];
            l++;
        }
    
        res = Math.max(res, r - l + 1);
        r++;
    }

    return res;

};