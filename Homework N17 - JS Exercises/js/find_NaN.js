/* 
Create a function to find NaN in an array of numbers. 
The return value should be the index where NaN is found. 
If NaN is not found in the array, then return -1.

findNaN([1, 2, NaN]) ➞ 2
findNaN([NaN, 1, 2, 3, 4]) ➞ 0
findNaN([0, 1, 2, 3, 4]) ➞ -1
*/

function findNaN(arr) {
    let i = 0;
    let notFound = -1;
    while(i < arr.length) {
        arr[i] = arr[i].toString();
        if(arr[i] === 'NaN'){
            notFound = 1;
            return i
        }
        i++;
    }
    if(notFound === -1) {
        return notFound
    }
}

console.log(findNaN([1, 2, NaN]));
console.log(findNaN([NaN, 1, 2, 3, 4]));
console.log(findNaN([0, 1, 2, 3, 4]));
