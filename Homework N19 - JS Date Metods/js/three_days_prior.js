function threeDaysAgo(date) {
    let year = date.getFullYear(),
      month = date.getMonth(),
      day = date.getDate() - 3;
    let newDate = new Date(year, month, day),
      newMonth = Number(newDate.getMonth()) + 1;
    if (newMonth < 10) newMonth = "0" + newMonth;
    return newDate.getFullYear() + "-" + newMonth + "-" + newDate.getDate();
}
  
console.log(threeDaysAgo(new Date(2018, 0, 1)));
console.log(threeDaysAgo(new Date(2015, 5, 17)));
console.log(threeDaysAgo(new Date(1965, 3, 15)));