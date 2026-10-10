/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let longest = 0
    for(let sentence of sentences) {
        let word = sentence.split(" ");
        let length = word.length;
        longest = Math.max(length, longest);
    }
    return longest;
};