/* 

    You are given an array of integers having both negative 
    and positive values, except for one integer which can be 
    negative or positive. Create a function to find out that integer.

    lonelyInteger([1, -1, 2, -2, 3]) ➞ 3
    // 3 has no matching negative appearance.

    lonelyInteger([-3, 1, 2, 3, -1, -4, -2]) ➞ -4
    // -4 has no matching positive appearance.

    lonelyInteger([-9, -105, -9, -9, -9, -9, 105]) ➞ -9

*/

function lonelyInteger(arr) {
    let i = 0;
    let j = 0;
    let lonelyInt;
    while (i < arr.length) {
        j = i + 1;
        while(j < arr.length) {
            if(arr[j] === arr[i] - 2 * arr[i]){
                console.log(`${arr[i]} and ${arr[j]}`);
            } else {
                lonelyInt = arr[i];
            }
            j++
        }
        i++
    }
    return lonelyInt
}

console.log(lonelyInteger([1, -1, 3, 2, -2])); //3
console.log(lonelyInteger([-3, 1, 2, 3, -1, -4, -2])); //-4
console.log(lonelyInteger([-9, -105, -9, -9, -9, -9, 105])); //-9
console.log(lonelyInteger([0, 1, 0, -1, 2])); //2