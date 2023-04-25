const inputYear="1992";
console.log(inputYear+18);
// yukarıdaki örnekte inputYear string olarak devam etmektedir.
console.log(Number(inputYear));
console.log(typeof Number(inputYear));
console.log(typeof inputYear);
// tek atamalık number type conversion
const inputYearNumber=Number(inputYear);
console.log(typeof inputYearNumber);
console.log(inputYearNumber);
//değişken atıyarak burada number olarak aldılattık.
console.log(Number(inputYear)+18);
//referans tip olmadığı için değişiklikler gözükmüyor.
console.log(NaN+1);
console.log(typeof NaN);