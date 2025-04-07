/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    let N = s.length;
    let maxWindow = Number.MIN_VALUE;
    let left = -1;
    let right = -1;

    for(let i=0; i<N; i++) {
        let window = expand(i, i, N, s);
        if(window[2] > maxWindow) {
            maxWindow = window[2];
            left = window[0];
            right = window[1];
        }
    }

    for(let i=0; i<N; i++) {
        let window = expand(i, i+1, N, s);
        if(window[2] > maxWindow) {
            maxWindow = window[2];
            left = window[0];
            right = window[1];
        }
    }

    function expand(i, j, N, S) {

        while(i >=0 && j<N && S[i] === S[j]) {
            i--; j++;
        }

        return [i+1, j-1, j-i-1];
    }
    
    return s.slice(left, right + 1);
};