// Title:
//     Calculating with Functions
// Description:
//     This time we want to write calculations using functions and get the results. Let's have a look at some examples:
//         seven(times(five())); // must return 35
//         four(plus(nine())); // must return 13
//         eight(minus(three())); // must return 5
//         six(dividedBy(two())); // must return 3
//     Requirements:
//     There must be a function for each number from 0 ("zero") to 9 ("nine")
//     There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
//     Each calculation consist of exactly one operation and two numbers
//     The most outer function represents the left operand, the most inner function represents the right operand
//     Divison should be integer division. For example, this should return 2, not 2.666666...:
//         eight(dividedBy(three()));
// Kata link:
//     https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

function executor () {
    switch(arguments[0][1]) {
        case '+':
            return arguments[0][0] + arguments[0][2];
        case '-':
            return arguments[0][0] - arguments[0][2];
        case '*':
            return arguments[0][0] * arguments[0][2];
        case '/':
            return Math.floor(arguments[0][0] / arguments[0][2]);
    }
}
function zero () {return arguments.length ? executor([0, arguments[0][0], arguments[0][1]]) : 0;}
function one() {return arguments.length ? executor([1, arguments[0][0], arguments[0][1]]) : 1;}
function two() {return arguments.length ? executor([2, arguments[0][0], arguments[0][1]]) : 2;}
function three() {return arguments.length ? executor([3, arguments[0][0], arguments[0][1]]) : 3;}
function four() {return arguments.length ? executor([4, arguments[0][0], arguments[0][1]]) : 4;}
function five() {return arguments.length ? executor([5, arguments[0][0], arguments[0][1]]) : 5;}
function six() {return arguments.length ? executor([6, arguments[0][0], arguments[0][1]]) : 6;}
function seven() {return arguments.length ? executor([7, arguments[0][0], arguments[0][1]]) : 7;}
function eight() {return arguments.length ? executor([8, arguments[0][0], arguments[0][1]]) : 8;}
function nine() {return arguments.length ? executor([9, arguments[0][0], arguments[0][1]]) : 9;}
const plus = (num) => ['+', num]
const minus = (num) => ['-', num]
const times = (num) => ['*', num]
const dividedBy = (num) => ['/', num]