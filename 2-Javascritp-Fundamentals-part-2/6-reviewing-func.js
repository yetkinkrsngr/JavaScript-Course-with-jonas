'use strict';
/*
const calcWork=10;
const calcAge=function (birthYear) {
    const year=new Date();
    year.getFullYear();
    return birthYear-year;
}

const yearRetirement=function (calcAgee,calcWorkk) {
    const age=calcAge(calcAgee);
    const retiretment=calcWorkk;
    const calculate=(age+retiretment)-60;
    return calculate;
}
yearRetirement(1992,calcWork);*/

const calcAge=function (birthYear) {
    return 2023-birthYear;
}
const yersUntilRetirement=function (birthYear,firstName) {
    const age=calcAge(birthYear);
    const retiretment=65-age;
    //return retirement
    //return `${firstName} retires in ${retiretment} years`;
}
// const person=yersUntilRetirement(1992,"yetkin");
// const person2=yersUntilRetirement(1988,"sevim");
console.log(yersUntilRetirement(1992,"yetkin"));
console.log(yersUntilRetirement(1988,"sevim"));
console.log(yersUntilRetirement(1959,"seref"));
console.log(yersUntilRetirement(1965,"cemile"));
 if (retiretment>0) {
    
    console.log(`${firstName} retires in ${retiretment} years`);
    return retirement;
 }
 else{
    
    console.log(`${firstName} is allready retired..`);
    return -1;
 }