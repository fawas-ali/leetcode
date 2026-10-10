/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let aCount = 0;
    let bCount = 0
    for(let i = 0; i < s.length / 2; i++) {
        if(vowels.includes(s[i])) {
            aCount++
        }
    }
    for(let i = s.length / 2; i < s.length; i++) {
        if(vowels.includes(s[i])) {
            bCount++
        }
    }
    return aCount === bCount;
}