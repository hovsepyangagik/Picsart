function findBrokenKeys(correctPhrase, typed) {

    let i = 0, brokenKeys = [], typedArr = typed.split('');

    let correctPhraseArr = correctPhrase.split('').forEach(element => {
        if (element !== typedArr[i] && brokenKeys.indexOf(element) === -1) {
            brokenKeys.push(element);
        }
        i++;
    });
    
    return brokenKeys
}

console.log(findBrokenKeys("happy birthday", "hawwy birthday"));
console.log(findBrokenKeys("starry night", "starrq light"));
console.log(findBrokenKeys("beethoven", "affthoif5"));