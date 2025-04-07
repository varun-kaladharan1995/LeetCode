/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map(), N = nums.length;

    for(let i=0; i<N; i++) {
        let comp = target - nums[i];
        if(map.has(comp)) {
            return [map.get(comp),i];
        } else {
            map.set(nums[i], i);
        }

    }
};