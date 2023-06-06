/*
CHALLENGE #3
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.



TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
*/
 let scoreDolphins={
     score:96 ,
     score_2:108,
     score_3:89
 }
 let scoreKoalas={
     score:88 ,
     score_2:91,
     score_3:110
 }
 function avarage(score,score_2,score_3) {
    let avarage=(score+score_2+score_3)/3;
     return avarage;
 }
 let finalDolphin=avarage(scoreDolphins.score,scoreDolphins.score_2,scoreDolphins.score_3);
 let finalKoalas=avarage(scoreKoalas.score,scoreKoalas.score_2,scoreKoalas.score_3);


 if(finalDolphin>finalKoalas){
     console.log("Dolphins win the trophy");
 }
 else if(finalKoalas>finalDolphin){
 console.log("Dolphins win the trophy");
 }
 else{
     console.log("Both win the trophy");
 }
