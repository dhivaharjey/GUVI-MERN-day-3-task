// const _ = require("lodash");

const obj1 = { name: "DHIVAHAR", age: 24, id: 46 };
const obj2 = { age: 24, name: "DHIVAHAR", id: 46 };

const obj1Keys = Object.keys(obj1).sort();
const obj2Keys = Object.keys(obj2).sort();
// console.log(obj1Keys, obj1Keys);

const arr1 = Object.values(obj1).sort();
const arr2 = Object.values(obj2).sort();

// console.log(arr1, arr2);
const compareArrays = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b);
};

// console.log(compareArrays(arr1, arr2));
// console.log(compareArrays(obj1Keys, obj2Keys));

let flag1 = compareArrays(obj1Keys, obj2Keys);
let flag2 = compareArrays(arr1, arr2);
//console.log(flag1, flag2);
if (flag1 == true && flag2 == true) {
  console.log("true");
} else {
  console.log("false");
}

// const cricketer1 = {
//   name: "MS Dhoni",
//   age: 42,
//   team: "India",
//   trophies: ["T20I worldcup", " ODI worldcup", "Champions trophy"],
//   year: [2007, 2011, 2013],
// };

// const cricketer2 = {
//   name: "MS Dhoni",
//   age: 42,
//   team: "Chennai Super Kings",
//   trophies: ["IPL", "CLT20 "],
//   year: [2010, 2011, 2014, 2018, 2021, 2023],
// };

// console.log(_.isEqual(cricketer1, cricketer2));

// console.log(cricketer1);
