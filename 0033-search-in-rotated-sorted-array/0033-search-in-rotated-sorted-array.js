/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    const findIndex = (start, end, arr) => {   
        if(arr.length === 1) return 0;
        while(start<=end){ 
            let mid = Math.floor(start + (end - start)/2); 
            if(arr[mid] > arr[mid + 1]) return mid;
            else if(arr[mid] >= arr[0]) start = mid + 1;
            else if(arr[mid] < arr[0]) end = mid - 1;
        }
        return 0;
    }

    const binarySearch = (i, j, arr, k) => {
        if(arr.length === 1 && arr[0] === k) return 0
        while(i <= j){
            let mid = Math.floor(i + (j - i)/2);
            if(arr[mid] === k) return mid;
            else if(arr[mid] > k) j = mid - 1;
            else i = mid + 1;
        }

        return -1;
    }

    if (nums.length === 0) return -1;
    if (nums.length === 1) return nums[0] === target ? 0 : -1;

    let index = findIndex(0,nums.length - 1, nums);

    let indexInLeftArray = binarySearch(0, index, nums, target);
    if(indexInLeftArray !== -1) return indexInLeftArray
    let indexInRightArray = binarySearch(index + 1, nums.length - 1, nums, target);
    return indexInRightArray;

};