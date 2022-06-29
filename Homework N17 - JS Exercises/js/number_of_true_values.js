/*
    Create a function which returns the number 
    of true values there are in an array.

    countTrue([true, false, false, true, false]) ➞ 2
    countTrue([false, false, false, false]) ➞ 0
    countTrue([]) ➞ 0
*/

function countTrue(arr) {
    let i = 0;
    let count = 0;
    while(i < arr.length) {
        if (arr[i] === true) {
            count++;
        }
        i++;
    }
    return count;
}

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));
