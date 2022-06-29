/*
Create a function that takes an array of items, removes all duplicate 
items and returns a new array in the same sequential order as the old 
array (minus duplicates).

removeDups([1, 0, 1, 0]) ➞ [1, 0]
removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]
removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]
*/

function removeDups(arr) {
    let newArr = [];
    let i = 0;
    
    while(i < arr.length) {
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i]);
        }
        i++;
    }

    return newArr
}

console.log(removeDups(['A', 'B', 'A', 'C', 'B']));
console.log(removeDups(["The", "big", "cat"]));
console.log(removeDups(["John", "Taylor", "John"]));
console.log(removeDups([1, 2, 3, 1, 1, 1, 1, 1, 1, 1]));
