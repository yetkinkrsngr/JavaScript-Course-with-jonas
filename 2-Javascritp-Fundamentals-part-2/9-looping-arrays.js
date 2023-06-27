"use strict";
const person = ["yetkin", "programmer", 30, ["cemile", "şerif", "sevim"], true];
const types = [];

for (let i = 0; i <= person.length; i++) {
  // console.log(person[i],typeof person);

  types[i] = typeof person[i];
}

console.log(types);
for (let j = 0; j <= types.length; j++) {
  types.splice(0, j);
  // console.log(j);
}
// console.log(types);

const years = [1959, true, 1965, NaN, 1988, 1992];
const currentYear = new Date();
let age = [];
let erAge = [];
// for(let z=0;z<years.length;z++){
// age.push(currentYear.getFullYear()-years[z]);

// }

for (let z = 0; z < years.length; z++) {
  //     if(typeof years[z] == "number"){
  //         age.push(currentYear.getFullYear()-years[z]);
  //     }
  // else{
  //     continue;
  // }
  if (typeof years[z] !== "number" || isNaN(years[z])) {
    erAge.push(years[z]);
  } else {
    age.push(currentYear.getFullYear() - years[z]);
  }
}
console.log("Only Number");
console.log(age);

console.log("not a number in the list");
console.log(erAge);
