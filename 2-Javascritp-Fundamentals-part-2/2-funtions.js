'use strict';
/*fonsiyonlar birden fazla kere çalıştırabileceğimiz kod yapısıdır*/

function logger() {
    console.log("my name is yetkin");
}
// calling/running invoking function
logger();
logger();
logger();

function fruitProcessor(apples,oranges) {
    console.log(apples,oranges);
    const juice=`juice with ${apples} apples and ${oranges} with a oranges.`;
    return juice;
}

const appleJuice=fruitProcessor(5,0);
console.log(appleJuice);



const appleOrangeJuice=fruitProcessor(5,4);
console.log(appleOrangeJuice);
