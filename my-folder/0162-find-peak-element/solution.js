/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {

    let N = nums.length;
    let l = 0;
    let r = N - 1;

    while(l<=r) {
        let mid = (l + r) >> 1;

        if((mid === 0 || nums[mid-1] <= nums[mid]) && (mid === N-1 || nums[mid+1] <= nums[mid])) {
            return mid;
        }

        if(mid > 0 && nums[mid-1] > nums[mid]) r = mid -1 ;
        else l = mid + 1;

    }

    return -1;
    
};
