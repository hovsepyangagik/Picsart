/*

Create a function that takes a string as an argument and 
returns a coded (h4ck3r 5p34k) version of the string.

hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"

a -> 4
e -> 3
i -> 1
o -> 0
s -> 5

*/

function hackerSpeak(str) {

    let i = 0;
    let newStr = "";
    let aTo4 = "4";
    let eTo3 = "3";
    let iTo1 = "1";
    let oTo0 = "0";
    let sTo5 = "5";

    while(i < str.length) {
        switch (str[i]) {
            case "a": newStr += aTo4;   break;
            case "e": newStr += eTo3;   break;
            case "i": newStr += iTo1;   break;
            case "o": newStr += oTo0;   break;
            case "s": newStr += sTo5;   break;
            default:  newStr += str[i]; break;
        }
        i++;
    }
    return newStr
}

console.log(hackerSpeak("javascript is cool"));
console.log(hackerSpeak("programming is fun"));
console.log(hackerSpeak("become a coder"));
