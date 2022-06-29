/* 
Create a function that takes an array of items 
and checks if the last item matches the rest of 
the array concatenated together.

matchLastItem(["rsq", "6hi", "g", "rsq6hig"]) ➞ true
// The last item is the rest joined.

matchLastItem([1, 1, 1, "11"]) ➞ false
// The last item should be "111".

matchLastItem([8, "thunder", true, "8thundertrue"]) ➞ true
*/


function matchLastItem(arr) {
    let i = 0;
    let lastItemIndex = arr.length - 1;
    let lastItemValue = "";
    while (i < arr.length - 1) {
        lastItemValue += arr[i];
        i++;
    }
    if(lastItemValue === arr[lastItemIndex]) {
        return true
    }else {
        return false
    }
}

console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"])); //true
console.log(matchLastItem([1, 1, 1, "11"])); //false
console.log(matchLastItem([8, "thunder", true, "8thundertrue"])); //true
console.log(matchLastItem([])); //false
console.log(matchLastItem([1,2,3, [1,2,3], "123123"])); //false
console.log(matchLastItem([1,2,3, [1,2,3], "1231,2,3"])); //true
