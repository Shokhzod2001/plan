// console.log("Shelby maslahatlari:");
// const list = [
//   "yaxshi talaba bo`ling", // 10-20
//   "to`g`ri boshliq tanlang va ko`p xato qiling", //20-30
//   "o`zingizga ishlashni boshlang", //30-40
//   "siz kuchli bo`lgan narsalarni qiling", //40-50
//   "yoshlarga investitsiya qiling", //50-60
//   "endi dam oling oxirgi ostanofkadasiz", //60 ~
// ];

//regular syn function
// function giveAdvice(age) {
//   if (typeof age !== "number") {
//     console.log("insert a number");
//   } else if (age <= 20) {
//     console.log(list[0]);
//   } else if (age > 20 && age <= 30) {
//     console.log(list[1]);
//   } else if (age > 30 && age <= 40) {
//     console.log(list[2]);
//   } else if (age > 40 && age <= 50) {
//     console.log(list[3]);
//   } else if (age > 50 && age <= 60) {
//     console.log(list[4]);
//   } else {
//     console.log(list[5]);
//   }
// }

// giveAdvice(23);

// callback function     err | data
// function giveAdvice(age, callback) {
//   if (typeof age !== "number") callback("insert a number", null);
//   else if (age <= 20) callback(null, list[0]);
//   else if (age > 20 && age <= 30) callback(null, list[1]);
//   else if (age > 30 && age <= 40) callback(null, list[2]);
//   else if (age > 40 && age <= 50) callback(null, list[3]);
//   else if (age > 50 && age <= 60) callback(null, list[4]);
//   else {
//     setInterval(() => {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }

// call part for callback function
// console.log("passed here");
// giveAdvice(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("Answer:", data);
//   }
// });
// console.log("Passed here 1");

// async function
// async function giveAdvice(age) {
//   if (typeof age !== "number") throw new Error("insert a number");
//   else if (age <= 20) return list[0];
//   else if (age > 20 && age <= 30) return list[1];
//   else if (age > 30 && age <= 40) return list[2];
//   else if (age > 40 && age <= 50) return list[3];
//   else if (age > 50 && age <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         // here setinterval doesnot work we need callback functions
//         resolve(list[5]);
//       }, 5000);
//     });
//   }
// }

// then&catch => call function
// console.log("Passed 1");
// giveAdvice(23)
//   .then((data) => {
//     console.log("advice:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("Passed 2");

// asynchrous function to call giveAdvice
// asyn & await
// async function run() {
//   let answer = await giveAdvice(33);
//   console.log(answer);
//   answer = await giveAdvice(63);
//   console.log(answer);
//   answer = await giveAdvice(43);
//   console.log(answer);
//   answer = await giveAdvice(53);
//   console.log(answer);
//   answer = await giveAdvice(23);
//   console.log(answer);
// }
// run();

// Task A

function countLetter(letter, word) {
  if (word.includes(letter)) {
    const wordArray = word.split("");
    return wordArray.filter((ele) => ele === letter).length;
  } else {
    console.log(`this word: ${word} does not contain this letter: ${letter}`);
  }
}

console.log(countLetter("e", "engineer"));
