// Title:
//     Where my anagrams at?
// Description:
//     What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:
//         'abba' & 'baab' == true
//         'abba' & 'bbaa' == true
//         'abba' & 'abbba' == false
//         'abba' & 'abca' == false
//     Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:
//         anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
//         anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
//         anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
// Kata link:
//     https://www.codewars.com/kata/523a86aa4230ebb5420001e1

function anagrams(word, words) {
    const result = [];
    const strToObj = str => {
        const result = {};
        str.split('').forEach(value => {
            if(result[value])
                result[value]++;
            else
                result[value] = 1;
        });
        return result;
    }
    const origObj = strToObj(word);
    words.forEach(str => {
        const wordObj = strToObj(str);
        if (Object.keys(origObj).length !== Object.keys(wordObj).length)
            return false;
        for (key of Object.keys(origObj))
            if (origObj[key] !== wordObj[key])
                return false;
        result.push(str)
    })
    return result;
}