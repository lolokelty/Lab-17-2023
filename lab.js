////////// PROBLEM 1 //////////
let lovesCode = true
  if(lovesCode === true) {
    console.log('I hate to code!')
  }else {
    console.log('coding fun but hard')
  }

//CODE HERE

// For problems 2-3 use the following lines of code:
var amysAge = 29;
var brittanisAge = 34;
var amysBirthYear = 1991;
var brittanisBirthYear = 1986;

////////// PROBLEM 2 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy or Brittani is older, and then console.log '{name} is older'. Hint: Consider what will happen if they are the same age. Handle this situation.
*/

if (amysAge > brittanisAge) {
  console.log("amy is oder!")

}else if (brittanisAge > amysAge){
console.log("i tink Britt is oder")

}else {
  console.log("dey bof da same age")
}



////////// PROBLEM 3 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy and Brittani were born in the same year. If they were, console.log 'Amy & Brittani were born in the same year'. If they were not, console.log 'Amy & Brittani were not born in the same year'
*/

if(amysBirthYear === brittanisBirthYear){
  console.log(`They were both born in ${amysBirthYear}!`)
}else{
  console.log(`actually... Amy was born in ${amysBirthYear}, Brittani was born in ${brittanisBirthYear}!`)
}


////////// PROBLEM 4 //////////
//tried to do something here

let temprange = [];
for (let x = 1; x <= 110; x++) {
  temprange.push(x)
}
let i = Math.floor(Math.random()* temprange.length);
let temp = temprange[i];
let rain = true;

if (temp === 100 && rain){
  console.log('wearing a t as well as take a umbrella wit ya today its ')
}else if(temp === 80 && rain){
  console.log('ya better were that jacket goofball!!!')
}else if(temp === 110 && rain){
  console.log('get naked its hot out! lol...jk... But FR it hot')
}else if(temp === 120 && rain){
  console.log('okay put a shirt back on but keep the pants off its getting a bit chilly...')
}else if(temp === 135 && rain){
  console.log('okay put ur undies on getting even colder..... lol lol lol')
}else{
  console.log('it gunna be cold fam!')
}

////////// PROBLEM 5 //////////

/*
  Create a for-loop that runs 10 times, and on each iteration logs the word 'hello'.
*/

for (let i = 0; i < 10; i++) {
  console.log('hello')
}

////////// PROBLEM 6 //////////

/*
  Create a for-loop that runs 10 times, logging the numbers 1 through 10. Ex, on the first iteration it would log 1, on the second iteration it would log 2.
*/

for (let i = 1; i < 11; i++) {
  console.log(i)
}

////////// PROBLEM 7 //////////

/*
  Create a for-loop that logs the numbers 0 through 10 backwards. Ex, on the first iteration it would log 10, on the second iteration it would log 9.
*/

for (let i = 10; i > 0; i--) {
  console.log(i)
}


////////// PROBLEM 8 //////////

let score = 0;
let passingScore = 7;

/*
  Create a while-loop that logs "Your score is not high enough" while the score variable above is below passingScore. In each iteration of the loop, increase the score by one. If your code is successful, you will see your logged statement 7 times.
*/

while (score < passingScore){
console.log('yo score aint high enough boi!!!')
score++
}
////////// INTERMEDIATE PROBLEMS //////////

////////// PROBLEM 9 //////////
/*
  Create a variable called 'changeMyMind' and set it equal to true. 
  Check to see if changeMyMind is set to true or false, if it is true, change the status to false, if it is false, change the status to true.

*/

let changeMyMind = true;

if (changeMyMind) {
  changeMyMind = false;
}else{
  changeMyMind = true;
}

////////// PROBLEM 10 //////////
// Using the "not" operator (!), change the current value of changeMyMind to true (it should currently be set to false due to the if-else statement in Problem 9). After you change the value of changeMyMind, console.log it's new value (it should now read true).

changeMyMind = !changeMyMind
console.log(changeMyMind)

////////// ADVANCED PROBLEMS //////////

////////// PROBLEM 11 //////////

let z = 5;
// Create a while loop that continues to run while z is greater than 0. Within the while loop, log a countdown from the value of z to 1. Once you have logged the countdown, make sure you decrement z by 1. If your code is running properly, you should see: 5,4,3,2,1,4,3,2,1,3,2,1,2,1,1.

while (z > 0){
  for (let i = z--; i > 0; i--){
    console.log(i)
  }
}
