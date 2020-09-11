// Title:
//     Integers: Recreation One
// Description:
//     Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square!
//     Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.
//     The result will be an array of arrays or of tuples (in C an array of Pair) or a string, each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.
// Example:
//     list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
//     list_squared(42, 250) --> [[42, 2500], [246, 84100]]
// Kata link:
//     https://www.codewars.com/kata/55aa075506463dac6600010d

function listSquared(m, n) {
    const result = [];
    for (let i = m; i <= n; i++) {
        const square = getDivisors(i).reduce((acc, val)=> acc+val**2, 0);
        if (isInt(Math.sqrt(square)))
            result.push([i, square]);
    }
    return result;
}
function isInt(num) {
    return num === parseInt(num);
}
function getDivisors(num) {
    result = [1];
    for (let i = 2; i <= num / 2; i++) {
        if (isInt(num/i))
            result.push(i)
    }
    if (num > 1) result.push(num);
    return result;
}