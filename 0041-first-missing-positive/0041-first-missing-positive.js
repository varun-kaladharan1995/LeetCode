/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let N = nums.length;
    for(let i=0; i<N; i++){
        if(nums[i] < 0) {
            nums[i] = 0;
        }
    }

    for(let i=0; i<N; i++){
        let val = Math.abs(nums[i]);
        if(1 <= val && val<=N){
            if(nums[val - 1] > 0) nums[val - 1] = -1*nums[val - 1];
            else if(nums[val - 1] === 0) nums[val - 1] = -1*(N+1);
        }
    }

    for(let i=1; i<=N; i++){
        if(nums[i - 1] >= 0) return i;
    }

    return N+1;
};