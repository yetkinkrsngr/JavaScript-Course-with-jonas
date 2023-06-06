console.log(Boolean(0));//false
console.log(Boolean(1));//true
console.log(Boolean(undefined));//false
console.log(Boolean({}));//true
console.log(Boolean(""));//false


let money=100;
if (money){
    console.log("you should keep it");
}
else{
    console.log("You should get a job");
}

let height;
if(height){
    console.log("YAY height is a defined");
}
else{
    console.log("height is a undefined");
}