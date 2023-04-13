let mark={
    mass:95,//kilogram
    height:1.88//noy
}
let john={
    mass:85,
    height:1.76
}
// fonksiyonumuz
function BMI(mass,height){
    let BMI=mass/(height**2);
    return BMI;
}

let johnIbm=console.log("John BMI: "+BMI(john.mass,john.height));

let markIbm=console.log("Mark BMI: "+BMI(mark.mass,mark.height));

if(johnIbm>markIbm){
    console.log("john ibm bigger than mark");
}
else{
    console.log("mark ibm bigger than john");
}

