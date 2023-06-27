"use strict";
let rep = 0;
let set = 0;
while (set <= 4) {
  //   console.log(`🏅---------- exercises ${set}--------🏅`);
  set++;
  while (rep <= 10) {
    // console.log(`repeat a lifting ${rep}🏋`);
    rep++;
  }
  rep = 0;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(dice);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice == 6) {
    console.log("Loop is about the end....");
  }
}
