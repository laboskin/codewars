// Title:
//     The Hashtag Generator
// Description:
//     The marketing team is spending way too much time typing in hashtags.
//     Let's help them with our own Hashtag Generator!
//     Here's the deal:
//     It must start with a hashtag (#).
//         All words must have their first letter capitalized.
//         If the final result is longer than 140 chars it must return false.
//         If the input or the result is an empty string it must return false.
// Example:
//     " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
//     "    Hello     World   "                  =>  "#HelloWorld"
//     ""                                        =>  false
// Kata link:
//     https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag (str) {
    if (str.trim() === '') return false;
    const res = '#' + str.split(' ')
        .filter(v => v!=='')
        .map(value => value.charAt(0).toUpperCase()+value.slice(1).toLowerCase())
        .join('');
    return res.length<=140?res:false;
}