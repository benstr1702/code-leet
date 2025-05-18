param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const closeStrings = (word1, word2) => {
    if (word1.length !== word2.length) return false;
    
    const word1Map = new Map();
    const word2Map = new Map();

    for (const character of word1) {
        word1Map.set(character, (word1Map.get(character) || 0) + 1);
    } 
    for (const character of word2) {
        word2Map.set(character, (word2Map.get(character) || 0) + 1);
    } 

    const keys1 = [...word1Map.keys()].sort();
    const keys2 = [...word2Map.keys()].sort();
    if (keys1.join('') !== keys2.join('')) return false;

    const values1 = [...word1Map.values()].sort((a, b) => a - b);
    const values2 = [...word2Map.values()].sort((a, b) => a - b);
    
    return values1.join('') === values2.join('');
};
