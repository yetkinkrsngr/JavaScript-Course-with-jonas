/* 
CHALLENGE #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.



👋 OPTIONAL: You can watch my solution in video format in the next lecture
*/
let john={
    massJohn:77,
    heightJohn:1.90
};
let mark={
    massMark:85,
    heightMark:1.80
};
function BMİ(mass,height) {
    let bmiCalcu= mass/(height*height);
    return bmiCalcu;
}
let johnCaluc=BMİ(john.massJohn,john.heightJohn);
let markCaluc=BMİ(mark.massMark,mark.heightMark);
console.log("John: ",johnCaluc);
console.log("Mark: ",markCaluc);


