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
    console.log(`country Name : ${value.name.common}`);
    console.log(`Country Region : ${value.region}`);
    console.log(`Country Sub-Region : ${value.subregion}`);
    console.log(`Country Population : ${value.population}`);
    console.log(`\n`);
  }
  //console.log(JSON.parse(xmlReq.response));
};
