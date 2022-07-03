function mostExpensive(object) {

    let mostExpensiveVal = Object.values(object)[0];
    let mostExpensiveItem

    Object.getOwnPropertyNames(object).forEach((value) => {
        if (mostExpensiveVal < object[value]) {
            mostExpensiveVal = object[value];
            mostExpensiveItem = value;
        }
    });

    return `The most expensive one is the ${mostExpensiveItem}`
}

console.log(mostExpensive({
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650
}));

console.log(mostExpensive({
    "Silver Bracelet": 280,
    "Gemstone Earrings": 180,
    "Diamond Ring": 3500
}));