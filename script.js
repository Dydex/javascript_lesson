// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 95;
// const johnHeight = 1.76;

// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / johnHeight ** 2;

// const markHigherBMI =  markBMI > johnBMI;
// // console.log(markBMI, johnBMI, markHigherBMI);

// if (markBMI > johnBMI) {
//     console.log (`Mark's BMI ${markBMI} is higher than John's ${johnBMI}`)
// }
// else {
//     console.log (`John's BMI ${johnBMI} is higher than Mark's ${markBMI}`)
// }

// const teamDolphins = (96 + 108 + 89) / 3
// const teamKoalas = (97 + 112 + 101) / 3

// console.log(`teamDolphins: ${teamDolphins}`)
// console.log(`teamKoalas: ${teamKoalas}`)

// if(teamDolphins > teamKoalas && teamDolphins >= 100 && teamKoalas >= 100) {
//     console.log(`Team Dolphins wins!`)
// }

// else if(teamDolphins === teamKoalas && teamDolphins >= 100 && teamKoalas >= 100) {
//     console.log(`It is a Draw!`)
// }

// else if(teamKoalas > teamDolphins && teamDolphins >= 100 && teamKoalas >= 100) {
//     console.log(`Team Koalas wins!`)
// }

// else{
//     console.log(`Team score must be up to 100`)
// }

// const day = prompt('what day of the week is it?')

// if(day === 'monday' ) {
//     console.log(`Plan course structure`)
//     console.log(`Go to coding meetup`)
// }

// else if(day === 'tuesday') {
//     console.log(`Prepare theory videos`)
// }

// else if(day === 'wednesday' || day === 'thursday') {
//     console.log(`Write code examples`)
// }

// else if(day === 'friday') {
//     console.log(`Record videos`)
// }

// else if( day === 'saturday' || day === 'sunday') {
//     console.log(`Enjoy the weekend :D`)
// }

// else {
//     console.log(`Not a valid day`)
// }

// const bill = 275

// const tip =  bill >= 50 && bill <= 300 ? 0.15 * bill :
// 0.2 * bill
// console.log (`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)

// const calcAverage = (x, y, z) => (x + y + z) / 3
// // console.log(calcAverage(1,2,3))

// const teamDolhins = calcAverage(44, 23, 71)
// const teamKoalas = calcAverage(65, 54, 49)

// console.log(teamDolhins, teamKoalas)

// const checkWinner = function (avgDolhins, avgKoalas) {
//     if (avgDolhins > avgKoalas){
//         console.log(`Dolphins win (${avgDolhins} vs ${avgKoalas})`)
//     }
//     else if(avgKoalas > avgDolhins){
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolhins})`)
//     }
// }

// checkWinner(teamDolhins, teamKoalas)

// const cash = prompt("how much are u paying?")

// function calcTip(bill) {
//     if (bill >= 50 && bill <= 300){
//         return 0.15 * bill
//     }
//     else {
//         return 0.20 * bill
//     }
// }
// // calcTip()

// const bills = [125, 555, 44]

// let billsone = calcTip(bills[0])
// let billstwo = calcTip(bills[1])
// let billsthree = calcTip(bills[2])

// const tips = [billsone, billstwo, billsthree]

// console.log (tips)

// const total = [(bills[0] + billsone), (bills[1] + billstwo), (bills[2] + billstwo)]

// console.log (total)

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function(){
//         return this.mass / this.height**2
//     }
// }
// // mark.bmi = mark.calcBMI()

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function(){
//         return this.mass / this.height**2
//     }
// }

// const markBmi = mark.calcBMI()
// const johnBmi = john.calcBMI()

//     if (markBmi > johnBmi){
//         console.log (`${mark.fullName}'s BMI ${markBmi} is higher than ${john.fullName}'s BMI ${johnBmi}`)
//    }
//    else {
//        console.log (` ${john.fullName}'s BMI ${johnBmi} is higher than ${mark.fullName}'s BMI ${markBmi}`)
//    }

// const jonas = [
//   "Jonas",
//   "Dolapo",
//   2025 - 2001,
//   "Developer",
//   ["Muby", "Aj", "Taiwo"],
//   false,
// ];

// for (let i = 0; i < jonas.length; i++) {
//   console.log(jonas[i]);
// }
// console.log("");
// console.log();

// const testData1 = [17, 21, 23, 7];

// const printForecast = function (arr) {
//   let ans = "";
//   for (let i = 0; i < arr.length; i++) {
//     ans += `... ${arr[i]}'C in ${i + 1}day${i + 1 > 1 ? "s" : ""} `;
//   }
//   return ans;
// };

// const result = printForecast(testData1);
// console.log(result);

// Guess Calculator
// let secretNumber = Math.floor(Math.random() * 20) + 1;
// console.log(secretNumber);
// let score = 20;
// const showMessage = function (message) {
//   document.querySelector(".message").textContent = message;
// };

// document.querySelector(".check").addEventListener("click", function () {
//   const guess = Number(document.querySelector(".guess").value);
//   let score = Number(document.querySelector(".score").textContent);

//   if (!guess) {
//     showMessage("!No Number");
//   }

//   // If guess is less than number
//   else if (guess < secretNumber) {
//     if (score > 1) {
//       showMessage("Too Low");
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       showMessage("You lost the game");
//     }
//   }

//   // If guess is greater than number
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       showMessage("Too High");
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       showMessage("You lost the game");
//     }
//   }

//   // When player wins
//   else if (guess === secretNumber) {
//     showMessage("!Correct Number");
//     score--;
//     document.querySelector(".score").textContent = score;
//     document.querySelector(".highscore").textContent = score;
//     document.querySelector(".number").textContent = secretNumber;
//     document.body.style.backgroundColor = "green";
//     document.querySelector(".number").style.width = "30rem";
//   }
// });

// document.querySelector(".again").addEventListener("click", function () {
//   secretNumber = Math.floor(Math.random() * 20) + 1;
//   score = 20;

//   document.querySelector(".guess").value = "";
//   showMessage("Start guessing...");
//   document.querySelector(".score").textContent = 20;
//   document.querySelector(".highscore").textContent = 0;
//   document.body.style.backgroundColor = "#222";
//   document.querySelector(".number").textContent = "?";
//   document.querySelector(".number").style.width = "15rem";
// });

// Modal Game
