// n - dimensions
// if n = 3 --> 3 x 3
/*
    ###
    # #
    ###
*/

function makeBox(n) {
    let newArr = [];
    let i = 0;
    while (i < n) {
        newArr.push("");
        if (i == 0 || i == n - 1) {
            let j = 0;
            while (j < n) {
                newArr[i] += "#";
                j++;
            }
        } else {
            let k = 0;
            while (k < n) {
                if (k == 0 || k == n - 1) {
                    newArr[i] += "#";
                } else {
                    newArr[i] += " ";
                }
                k++;
            }
        }
        i++;
    }

    return newArr
}

console.log(makeBox(3));
console.log(makeBox(5));
console.log(makeBox(7));

