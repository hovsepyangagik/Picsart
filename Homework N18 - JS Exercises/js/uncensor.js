function uncensor(string, vowel) {
    let stringArr = string.split(''); // []
    let vowelArr = vowel.split('');   // [] 
    let i = 0;
    let j = 0;

    while (i < stringArr.length) {
        if (stringArr[i] === "*") {
            stringArr[i] = vowelArr[j];
            j++;
        }
        i++;
    }
    
    return stringArr.join("");
}

console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"));
console.log(uncensor("abcd", ""));
console.log(uncensor("*PP*RC*S*", "UEAE"));