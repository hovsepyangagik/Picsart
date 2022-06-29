/*
    Create a function that takes an array of numbers 
    and returns the second largest number.

    secondLargest([10, 40, 30, 20, 50]) ➞ 40
    secondLargest([25, 143, 89, 13, 105]) ➞ 105
    secondLargest([54, 23, 11, 17, 10]) ➞ 23
*/
// Bubble sorting

function secondLargest(arr, whichLargest) {
    let i = 0;
    let j = 0; 
    while (i < arr.length) {
        j = i + 1;
        let tempValue;
        while(j < arr.length){
            if(arr[i] > arr[j]){
                tempValue = arr[i];
                arr[i] = arr[j];
                arr[j] = tempValue;
            }
            j++;
        }
        i++;
    }
    return arr[arr.length - whichLargest]
}

console.log(secondLargest([10, 40, 30, 20, 50], 2)); //2nd largest element
console.log(secondLargest([25, 143, 89, 13, 105], 2));
console.log(secondLargest([54, 23, 11, 17, 10], 2));
console.log(secondLargest([10, 40, 30, 20, 50], 3)); //3rd largest element



