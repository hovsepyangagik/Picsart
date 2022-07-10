// am - 00:00 - 11:59
// pm - 12:00 - 23:59

function timeToEat(str) {
    const BREAKFAST = 7 * 60;
    const LUNCH = 12 * 60; 
    const DINNER = 19 * 60;

    let time = str.split(" ");
    let hours = +time[0].split(":")[0];
    let minutes = +time[0].split(":")[1];

    if (time[1] === "p.m." && hours < 12) {
        hours += 12;
    } else if (time[1] === "a.m." && hours === 12) {
        hours -= 12;
    }
    else {
        hours
    }

    let givenHour = hours * 60 + minutes;

    let hoursLeft = [];

    

    if (hours < BREAKFAST) {
        hoursLeft[0] = Math.floor((BREAKFAST - givenHour) / 60);
        hoursLeft[1] = (BREAKFAST - givenHour) % 60;
    } else if (hours < LUNCH) {
        hoursLeft[0] = Math.floor((LUNCH - givenHour) / 60);
        hoursLeft[1] = (LUNCH - givenHour) % 60;
    } else {
        hoursLeft[0] = Math.floor((DINNER - givenHour) / 60);
        hoursLeft[1] = (DINNER - givenHour) % 60;
    }
    return hoursLeft

}

console.log(timeToEat("12:00 a.m."));
console.log(timeToEat("5:50 a.m."));
console.log(timeToEat("2:00 p.m."));



