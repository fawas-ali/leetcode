/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let str = n.toString();
    let sum = 0;
    let prod = 1;
    for(let char of str) {
        sum += Number(char);
        prod *= Number(char)
    }
    return prod - sum;
};