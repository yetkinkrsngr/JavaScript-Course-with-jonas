const year=2023;
const yearEnought=18;
const personFirst={
    name:"yetkin",
    birtYear:2004
};
const personSecond={
    name:"Cemil",
    birtYear:2010
};
const personThird={
    name:"Ayşe",
    birtYear:2000
};
const personfourth={
    name:"ersan",
    birtYear:1979
}
//person first control
if((year-personFirst.birtYear)>=yearEnought){
    console.log(`${personFirst.name} can take drive licence`);
}
else{
    
    console.log(`${personFirst.name} can not take drive licence!!!!\n\ need a (${Math.abs((year-personFirst.birtYear)-yearEnought)}) years to wait.. `);

}
//person second control
if((year-personSecond.birtYear)>=yearEnought){
    console.log(`${personSecond.name} can take drive licence`);
}
else{
    
    console.log(`${personSecond.name} can not take drive licence!!!!\n\ need a (${Math.abs((year-personSecond.birtYear)-yearEnought)}) years to wait.. `);

}
//person third control
if((year-personThird.birtYear)>=yearEnought){
    console.log(`${personThird.name} can take drive licence`);
}
else{
    
    console.log(`${personThird.name} can not take drive licence!!!!\n\ need a (${Math.abs((year-personThird.birtYear)-yearEnought)}) years to wait.. `);
}

if((year-personfourth.birtYear)>=yearEnought){
    console.log(`${personfourth.name} can take drive licence`);
}
else{
    console.log(`${personfourth.name} can not take drive licence !!!! \n\ need a (${Math.abs((year-personfourth.birtYear)-yearEnought)}) years to wait... `);
}