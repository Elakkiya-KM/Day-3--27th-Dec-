// 3. use rest countries api url and print all countries names,regions,sub-region and populations
const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload = function () {
  const result = JSON.parse(request.response);
  for (let i = 0; i < result.length; i++) {
    console.log(result[i].name);
    console.log(result[i].region);
    console.log(result[i].subregion);
    console.log(result[i].population);
  }
};
