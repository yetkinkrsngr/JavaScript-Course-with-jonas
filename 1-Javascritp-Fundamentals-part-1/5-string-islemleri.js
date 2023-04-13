const year=2023;
const person={
    name:"yetkin",
    job:"programmer",
    birtYear:1992,
};

const yetkin="I'm "+person.name+" . I am a "+person.job+" and I  am a "+(year-person.birtYear)+" years old.";
const yetkinNew=` I'm ${person.name} . I am a ${person.job} and I  am a ${(year-person.birtYear)} years old.`;
// ` back tick denilen sembol ile ${} yapılabilir. string içine js yazılır.
console.log(yetkin);
console.log(yetkinNew);
// \n\ newline 
console.log("yetkin \n\karasungur");

