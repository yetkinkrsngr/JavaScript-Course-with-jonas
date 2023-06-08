'use strict';
// katı mod oluşabilicek hataların önüne geçmemizi sağlar.
let hasDriversLicense=false;
const passTest=true;

if (passTest) hasDriversLicense=true;  
if (hasDriversLicense) console.log("I can drive :D");

console.log(passTest);