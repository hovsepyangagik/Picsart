function dayOfYear(str) {
    let date = str.split('/');
    let startYear = new Date(date[2]);
    let endYear = new Date(date[2], date[0] - 1, date[1]);
    let oneDay = 1000 * 60 * 60 * 24;
    
    return Math.ceil((endYear - startYear) / oneDay) + 1
}

console.log(dayOfYear("12/13/2020"));
console.log(dayOfYear("12/17/2020"));
console.log(dayOfYear("11/16/2020"));
console.log(dayOfYear("1/9/2019"));
console.log(dayOfYear("3/1/2004"));
console.log(dayOfYear("12/31/2000"));