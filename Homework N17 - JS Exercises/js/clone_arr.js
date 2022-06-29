/* 
    clone of an array to itself

    clone([1, 1]) ➞ [1, 1, [1, 1]]
    clone([1, 2, 3]) ➞ [1, 2, 3, [1, 2, 3]]
    clone(["x", "y"]) ➞ ["x", "y", ["x", "y"]]
*/

function clone(arr) {
    arr = [...arr, [...arr]];
    return arr 
}

console.log(clone([1, 1]));
console.log(clone([1, 2, 3]));
console.log(clone(["x", "y"]));