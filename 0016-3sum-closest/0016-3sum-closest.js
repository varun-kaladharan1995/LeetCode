/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a - b);
    let res = nums[0] + nums[1] + nums[2];
    let minDifference = Number.MAX_VALUE;
    let N = nums.length;

    for(let i = 0; i<N-2; i++) {
        let left = i + 1;
        let right = N - 1; 

        while(left <  right) {
            let sum = nums[i] + nums[left] + nums[right];

            if(sum === target) {
                return sum;
            } else if(sum < target) {
                left++;
            } else {
                right--;
            }

            let diffToTarget = Math.abs(target - sum);

            if(diffToTarget < minDifference) {
                minDifference = diffToTarget;
                resSum = sum;
            }
        }
    }

    return resSum;
};