// Title:
//     Moving Zeros To The End
// Description:
//     Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
//     moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
// Kata link:
//     https://www.codewars.com/kata/52597aa56021e91c93000cb0

moveZeros = arr => {
    const zeros = [];
    return arr.filter(val => {
        if(val===0) {
            zeros.push(val);
            return false;
        }
        else
            return true;
    }).concat(zeros)
}