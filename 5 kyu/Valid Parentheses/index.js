// Title:
//     Valid Parentheses
// Description:
//     Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
// Example:
//     "()"              =>  true
//     ")(()))"          =>  false
//     "("               =>  false
//     "(())((()())())"  =>  true
// Kata link:
//     https://www.codewars.com/kata/52774a314c2333f0a7000688

function validParentheses(parens){
    let cond = true;
    while (cond && parens !== '') {
        const newParens = parens.replace('()', '');
        cond = parens !== newParens;
        parens = newParens;
    }
    return parens === '';
}