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

// function countLetter(letter, word) {
//   if (word.includes(letter)) {
//     const wordArray = word.split("");
//     console.log(wordArray);
//     return wordArray.filter((ele) => ele === letter).length;
//   } else {
//     console.log(`this word: ${word} does not contain this letter: ${letter}`);
//   }
// }

// console.log(countLetter("e", "engineer"));

// const countLetter = (letter, word) => {
//   let count = 0;

//   for (let i = 0; i < word.length; i++) {
//     console.log(`${i} => ${word[i]}`);
//     if (word[i] == letter) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(countLetter("e", "engineer"));

// const countLetter = (a, b) => {
//   a = a.toLowerCase();
//   b = b.toLowerCase();

//   let count = 0;
//   for (const char of b) {
//     // ✅ Cleaner loop
//     if (char === a) count++;
//   }
//   return count;
// };

// console.log(countLetter("e", "Engineer")); // Output: 3

// function countLetter(harf, jumla) {
//   return jumla.split("").filter((a) => a === harf).length;
// }

// console.log(countLetter("e", "engineer"));

// MIT Task B
// console.log("First way of counting digits");
// function countDigits(mixedWord) {
//   return mixedWord.split("").filter((ele) => Number(ele)).length;
// }

// console.log(countDigits("ad2a54y79wet1sfgb9"));

// console.log("Second way of counting digits");
// const countDigits2 = (word) => {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (Number(word[i])) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(countDigits2("ad2a54y79wet1sfgb9"));

//MITASK C
const products = ["bread", "noodle", "cola"];
const moment = require("moment");

class Shop {
  constructor(bread, noodle, cola) {
    this.bread = bread;
    this.noodle = noodle;
    this.cola = cola;
  }
  leftProduct() {
    const time = moment().format("HH:mm");
    return `hozir ${time}da ${this.bread}ta non, ${this.noodle}ta lagmon va ${this.cola}ta cola mavjud `;
  }
  sellProduct(productName, number) {
    if (products.includes(productName)) {
      if (productName === "bread") {
        if (this.bread > number) {
          this.bread -= number;
          return `${number}ta ${productName} sotildi`;
        } else {
          return "We have not enough bread";
        }
      } else if (productName === "noodle") {
        if (this.noodle > number) {
          this.noodle -= number;
          return `${number}ta ${productName} sotildi`;
        } else {
          return "We have not enough noodle";
        }
      } else if (productName === "cola") {
        if (this.cola > number) {
          this.cola -= number;
          return `${number}ta ${productName} sotildi`;
        } else {
          return "We have not enough cola";
        }
      }
    } else {
      return `We have only these products: ${products}`;
    }
  }

  recieveProducts(productName, number) {
    if (products.includes(productName)) {
      if (productName === "bread") {
        this.bread += number;
      } else if (productName === "noodle") {
        this.noodle += number;
      } else if (productName === "cola") {
        this.cola += number;
      }
      return `${number}ta ${productName} qo'shildi`;
    } else {
      return `We can recieve only these products: ${products}`;
    }
  }
}

const shop = new Shop(4, 5, 2);
console.log(shop.leftProduct());
console.log(shop.sellProduct("noodle", 2));
console.log(shop.sellProduct("cola", 1));
console.log(shop.sellProduct("bread", 3));
console.log(shop.recieveProducts("cola", 4));
console.log(shop.recieveProducts("bread", 14));
console.log(shop.recieveProducts("cola", 3));
console.log(shop.leftProduct());
