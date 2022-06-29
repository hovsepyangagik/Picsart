/*

Create a function that takes an array of numbers and 
returns the sum of the two lowest positive numbers.

sumTwoSmallestNums([19, 5, 42, 2, 77]) ➞ 7
sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]) ➞ 3453455
sumTwoSmallestNums([2, 9, 6, -1]) ➞ 8
sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]) ➞ 563
sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]) ➞ 4519

*/

function sumTwoSmallestNums(arr) {
    let i = 0;
    let j = 0;
    let sum = 0;
    // sort the array in ascending order
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

    // find the two lowest positive numbers in sorted array 
    i = 0;
    while(i < arr.length) {
        if(arr[i] > 0) {

            sum += arr[i];

            i++; //add one more iteration for second lowest element
                // because the array is already sorted! 

            sum += arr[i]; //this is the second lowest element

            return sum

        } else {
            i++;
        }
    }
    return sum
}

console.log(sumTwoSmallestNums([19, 5, 42, 2, 77])); //7
console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453])); //3453455
console.log(sumTwoSmallestNums([2, 9, 6, -1])); //8
console.log(sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587])); //563
console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]));//4519
