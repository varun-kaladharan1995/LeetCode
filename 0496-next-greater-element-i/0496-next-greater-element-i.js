/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {

    let stack = [], map = new Map();

    for(let i=0; i<nums2.length; i++){
        while(stack.length > 0 && nums2[i] > stack[stack.length - 1]){
            map.set(stack.pop(), nums2[i]);
        }

        stack.push(nums2[i]);
    }

    while(stack.length > 0){
        map.set(stack.pop(), -1);
    }

    return nums1.map(num => map.get(num))
    
};