function numLeapYears (str) {
    let count = 0
    let dates = str.split("-")
    for (let i = +dates[0]; i <= +dates[1]; i++) {
        if(new Date(i, 1, 29).getMonth() === 1) {
            count++
        }
    }
    return count
}

console.log(numLeapYears("1980-1984"));
console.log(numLeapYears("2000-2020"));
console.log(numLeapYears("1600-2000"));