const thisYear=new Date();
const thisYear2=thisYear.getFullYear();
const ageYetkin=thisYear2-1992;
const ageSerif=thisYear2-1959;
const ageSevim=thisYear2-1988;
const ageCemile=thisYear2-1965;

console.log("yetkin : "+ageYetkin);
console.log("Serif : "+ageSerif);
console.log("Sevim : "+ageSevim);
console.log("Cemile : "+ageCemile);

console.log("karmasık işlem: ",ageYetkin*2,ageCemile*2,2**3);


const name="yetkin";
const surname="karasungur";
console.log(name+" "+surname);

let number=10;
number+=10;// on ekler
console.log(number);

number*=4;//4 ile çarpar 
console.log(number);


number++;//bir ekler
console.log(number);

number--;//bir çıkarır
number--;
console.log(number);

let numberSecond=2;
numberSecond = numberSecond**2;//üst alma
console.log(numberSecond);

let numberThird=10;
let mod=numberSecond%numberThird==0;
let modSecond=numberThird%(numberSecond/2)==0;
console.log(mod);
console.log(modSecond);


//Comparison operator
console.log("karsılastırma operatorleri");
console.log(ageSerif>=ageCemile);
console.log(ageSevim<=ageYetkin);

const isOverAge=ageYetkin>18;
console.log(isOverAge);