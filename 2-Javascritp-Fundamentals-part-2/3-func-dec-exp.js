'use strict';
/*
function declation and expration
*/
//declation
function calcAge1(birtYear) {
    const age=2037-birtYear;
    return age;
}
// const birtYear=1992;
const age=calcAge1(1992);

// anonamus function exprasion funtion aşağıdadır.
const calcAge2=function (birtYear) {
    return 2045-birtYear;
}
const age2=calcAge2(1992);

console.log(age,age2);