// Title:
//     String incrementer
// Description:
//     Your job is to write a function which increments a string, to create a new string.
//         If the string already ends with a number, the number should be incremented by 1.
//         If the string does not end with a number. the number 1 should be appended to the new string.
// Example:
//     foo -> foo1
//     foobar23 -> foobar24
//     foo0042 -> foo0043
//     foo9 -> foo10
//     foo099 -> foo100
// Kata link:
//     https://www.codewars.com/kata/54a91a4883a7de5d7800009c

const incrementString =  str => {
    const rgxp = /(\d+)$/;
    if (!str.match(rgxp)) return str+'1';
    const matchNum = str.match(rgxp)[0];
    let stringNewNum = (parseInt(matchNum)+1).toString();
    while (stringNewNum.length < matchNum.length)
        stringNewNum = '0' + stringNewNum;
    return str.replace(matchNum, '') + stringNewNum;
}