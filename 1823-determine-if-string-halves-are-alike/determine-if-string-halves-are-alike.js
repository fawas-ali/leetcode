/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;
    let half = s.length / 2;
    for(let i = 0; i < half; i++) {
        if(vowels.includes(s[i])) {
            count++;
        }
        if(vowels.includes(s[half + i])) {
            count--;
        }
    }
    
    return count === 0;
}