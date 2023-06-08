'use strict';
// arrow function örneği
const calcAge3 = birtYear =>2037-birtYear;
const age3=calcAge3(1988);
console.log(age3);

const yearsUntilRetirement = (birtYear,firstName) =>{
    const age=2023-birtYear;
    const retirement=60-age;
    const retirementYears=retirement+2023
    return `${firstName} retires in ${retirement} years later at ${retirementYears}`;
}
console.log(yearsUntilRetirement(1992,"Yetkin"));
console.log(yearsUntilRetirement(1988,"Sevim"));


