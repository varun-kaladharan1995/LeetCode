/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
     
     if(m === 0){
        while(n - 1 >= 0){
            nums1[n + m -1] = nums2[n -1 ];
            n--;
        }
        return;
     }
     if(n === 0){
        return;
     }
     let P1 = m - 1, P2 = n - 1; K = n + m -1;

        while(P1 >= 0 && P2 >= 0){
            if(nums1[P1] < nums2[P2]){
                nums1[K] = nums2[P2]; 
                P2--;
            }else {
                nums1[K] = nums1[P1];
                P1--;
            }
            K--;
        }
        while(P2 >= 0){
            nums1[K] = nums2[P2];
            K--; P2--;
        }

};
