/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    let count = 0;

    const merge = (A, B) => {

        let N = A.length, M = B.length;
        let P1 = 0, P2 = 0, K = 0, ans = new Array(N + M);

        while(P1 < N && P2 < M){
            if(A[P1] < B[P2]) {
                ans[K] = A[P1];
                K++; P1++;
            }else {
                ans[K] = B[P2];
                K++; P2++;
            }
        }

        while(P1 < N){
            ans[K] = A[P1];
            K++; P1++;
        }

        while(P2 < M){
            ans[K] = B[P2];
            K++; P2++;
        }

        return ans;

    }

    const mergeSort = (nums, l, h) => {

        if(l === h){
            return [nums[l]];
        }

        let m = Math.floor((l + h)/2);

        let left = mergeSort(nums, l, m);
        let right = mergeSort(nums, m + 1, h);

        let i=0, j=0;
        while(i < left.length && j < right.length){
            if(left[i] > 2*right[j]){
                count += left.length - i;
                j++;
            }else {
                i++;
            }
        }

        let ans = merge(left, right);

        return ans;
    }

    mergeSort(nums, 0, nums.length - 1);

    return count;
};
