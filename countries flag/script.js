const URL = "https://restcountries.com/v3.1/all";

const xmlReq = new XMLHttpRequest();

xmlReq.open("GET", URL);

xmlReq.send();

// xmlReq.onreadystatechange = () => {
//   console.log(xmlReq.readyState);
// };

xmlReq.onload = () => {
  const obj1 = JSON.parse(xmlReq.response);
  for (let value of obj1) {
    console.log(value.flags.png);
  }
  // console.log(JSON.parse(xmlReq.response));
};

// for (let [key, value] of Object.entries(xmlReq)) {
//   console.log(`${key}: ${value}`);
// }
// console.log(xmlReq.flag.png);
// console.log(xmlReq[population]);
