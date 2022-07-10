function getDays(firstDate, secondDate) {
    return ((secondDate.getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24));
}

console.log(getDays(
    new Date("June 14, 2019"),
    new Date("June 20, 2019")
));

console.log(getDays(
    new Date("December 29, 2018"),
    new Date("January 1, 2019")
));

console.log(getDays(
    new Date("July 20, 2019"),
    new Date("July 30, 2019")
));