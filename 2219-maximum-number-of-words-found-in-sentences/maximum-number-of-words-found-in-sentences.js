/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maxWords = 0;
    for(let sentence of sentences) {
        let words = 1;
        for(let char of sentence) {
            if(char === " ") {
                words++;
            }
        }
        maxWords = Math.max(maxWords, words);
    }
    return maxWords;
};