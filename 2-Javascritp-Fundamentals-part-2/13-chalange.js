"use strict";
let testData1 = [17, 21, 23, 25, 18, 19, 15, 35];
const temp = function () {
  for (let i = 0; i < testData1.length; i++) {
    if (testData1[i] < 20) {
      console.log(`${testData1[i]}°C in ${i + 1} days.. 😅`);
    } else {
      console.log(`${testData1[i]}°C in ${i + 1} days.. 😰`);
    }
  }
};
temp();
