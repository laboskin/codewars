// Title:
//     First non-repeating character
// Description:
//     Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.
//     For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
//     As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
//     If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
// Kata link:
//     https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

const firstNonRepeatingLetter = s => {
    if (s.length < 2) return s;
    const letter =  s.toLowerCase().split('')
        .filter((value, idx, array) =>array.indexOf(value) === idx && array.lastIndexOf(value) === idx)[0]
    if (!letter) return '';
    if (s.indexOf(letter) !== -1)
        return s[s.indexOf(letter)]
    else
        return s[s.indexOf(letter.toUpperCase())]
}