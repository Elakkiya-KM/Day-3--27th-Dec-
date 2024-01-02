//let obj1 = { name: "Person 1", age: 5 };
//let obj2 = { age: 5, name: "Person 1" };

//let string1 = JSON.stringify(obj1);
//let string2 = JSON.stringify(obj2);

//if (string1 === string2) {
//  console.log("The JSON objects have the same properties (without order).");
//} else {
// console.log("The JSON objects do not have the same properties.");
//}
function areObjectsEqual(obj1, obj2) {
  const sortedStringify1 = JSON.stringify(obj1, Object.keys(obj1).sort());
  const sortedStringify2 = JSON.stringify(obj2, Object.keys(obj2).sort());

  return sortedStringify1 === sortedStringify2;
}

let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

const result = areObjectsEqual(obj1, obj2);

console.log(result); // true
