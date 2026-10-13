/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let freq = {};
    for(let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }
    let  maxFreq = Math.max(...Object.values(freq));
    let total = 0;
    for(let count of Object.values(freq)) {
        if(count === maxFreq) {
            total += count;
        }
    }
    return total;
};