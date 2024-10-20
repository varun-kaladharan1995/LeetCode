/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let N = nums1.length;
    let M = nums2.length;

    let set = new Set(nums1);

    let result = [];

    for(let i=0; i<nums2.length; i++){
        if(set.has(nums2[i])){
            result.push(nums2[i]);
            set.delete(nums2[i]);
        }
    }

    return result;
};