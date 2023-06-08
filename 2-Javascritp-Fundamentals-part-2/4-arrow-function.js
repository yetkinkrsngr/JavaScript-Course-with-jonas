'use strict';
// arrow function örneği
const calcAge3 = birtYear =>2037-birtYear;
const age3=calcAge3(1988);
console.log(age3);

const yearsUntilRetirement = birtYear =>{
    const age=2023-birtYear;
    const retirement=60-age;
    return retirement;
}
console.log(yearsUntilRetirement(1992));



