// Title:
//     Calculator
// Description:
//     Create a simple calculator that given a string of operators (), +, -, *, / and numbers separated by spaces returns the value of that expression
// Example:
//     Calculator().evaluate("2 / 2 + 3 * 4 - 6") # => 7
// Kata link:
//     https://www.codewars.com/kata/5235c913397cbf2508000048

class Calculator {
    evaluate(string) {
        if (!string.includes(' ')) return +string;
        const plusMinusRegexp = /-?(\d+\.?\d*(e-?\d*)?)\s[+-]\s-?(\d+\.?\d*(e-?\d*)?)+/;
        const multDivRegexp = /-?(\d+\.?\d*(e-?\d*)?)\s[*/]\s-?(\d+\.?\d*(e-?\d*)?)+/;
        while (string.match(multDivRegexp)) {
            string = string.replace(multDivRegexp, match => calc(...match.split(' ')))
        }
        while (string.match(plusMinusRegexp)) {
            string = string.replace(plusMinusRegexp, match => calc(...(match.split(' '))))
        }
        return +string;

        function calc (left, sign, right) {
            switch (sign) {
                case '+':
                    return +left + +right;
                case '-':
                    return +left - +right;
                case '*':
                    return +left * +right;
                case '/':
                    return +left / +right;
            }
        }
    }
}