/**
 * @param {number[]} nums
 * @return {number}
 */
var continuousSubarrays = function(nums) {

    let l=0; minDeque = []; maxDeque = [], count = 0;

    for(let r=0; r<nums.length; r++) {
        while(minDeque.length && minDeque[minDeque.length - 1] > nums[r]) {
            minDeque.pop();
        }
        minDeque.push(nums[r]);

         while(maxDeque.length && maxDeque[maxDeque.length - 1] < nums[r]) {
            maxDeque.pop();
        }
        maxDeque.push(nums[r]);

        while(maxDeque[0] - minDeque[0] > 2) {
            if(maxDeque[0] === nums[l]) maxDeque.shift();
            if(minDeque[0] === nums[l]) minDeque.shift();
            l++;
        }

        count += r - l + 1;

    }
    
    return count;
};