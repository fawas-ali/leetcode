/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let freq = {};
    for(let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }
    return Number(Object.keys(freq).find(key => freq[key] === 1));
};