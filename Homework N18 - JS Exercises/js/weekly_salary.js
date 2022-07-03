/*
[10, 10, 10, 0, 8, 12, 0] -> 550$

                         Monday  Tuesday  Wednesday  Thirstday  Friday  Saturday  Sunday
working hours per week |   10      10        10          0        8         12       0
earning money per hour |  8 x 10  8 x 10   8 x 10      0 x 10   8 x 10   8 x 20   0 x 20
earning money(overtime)|  2 x 15  2 x 15   2 x 15      0 x 15   0 x 15   4 x 30   0 x 30
*/


function weeklySalary(weeklyWorkHours) {
    let i = 0;
    let salary = 0; 
    const salaryArr = weeklyWorkHours.map((currentDay, index) => {
        if (index < 5) {
            if (currentDay > 8) {
                salary += (currentDay - 8) * 15 + (currentDay-(currentDay - 8)) * 10;
            } else {
                salary += currentDay * 10;
            }
        } else {
            if (currentDay > 8) {
                salary += (currentDay - 8) * 30 + (currentDay - (currentDay - 8)) * 20;
            } else {
                salary += currentDay * 20;
            }
        }
    });
    return `Weekly Salary is $${salary}`

}

console.log(weeklySalary([8, 8, 8, 8, 8, 0, 0]));
console.log(weeklySalary([10, 10, 10, 0, 8, 0, 0]));
console.log(weeklySalary([0, 0, 0, 0, 0, 12, 0]));
console.log(weeklySalary([0, 0, 0, 0, 0, 8, 0]));
console.log(weeklySalary([10, 10, 10, 0, 8, 12, 0]));