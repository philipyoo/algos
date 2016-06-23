/*

We are given a String that contains two different times in a 12 hour clock format, separated by a hyphen. Return the total number of minutes between the two times.

Example input: "1:00pm-11:00am"
Example Output: 1320

Expect:
 > All inputs to always be formatted the same way, with colons between the hour and minutes, an AM or PM following the time, and separated by a hyphen.
 > All inputs will always be a String.
 > All times are valid:
    -> minutes are represented as a number between 0 and 59 inclusive
    -> hours are represented as a number between 1 and 12 inclusive

*/

function CountingMinutesI(str) {
    var times = str.split("-").map(function(str) {
        var time = str.match(/\d+/g);
        var ampm = str.match(/[a-z]{2}/gi);

        if (ampm[0] === "pm") {
            time[0] = parseInt(time[0]) + 12;
        }

        var totalMinutes = (parseInt(time[0]) * 60) + parseInt(time[1]);

        return totalMinutes;
    });

    if (times[0] > times[1]) {
        return (times[1] + (60 * 24)) - times[0];
    } else {
        return (times[1] - times[0]);
    }
}


//////////////////////////////////////////////////
// TESTS: [All should return `true`]

console.log(CountingMinutesI("1:00pm-11:00am") === 1320);

console.log(CountingMinutesI("1:00am-11:00am") === 600);

console.log(CountingMinutesI("1:18pm-1:00pm") === 1422);

console.log(CountingMinutesI("12:00pm-7:45am") === 465);

console.log(CountingMinutesI("4:57am-3:25am") === 1348);












//.
