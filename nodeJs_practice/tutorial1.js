const sum = (num1, num2) => {
  return num1 + num2;
}; //expose this function for the outside world(Module Concept)

//Now, How to export more than one thing
const pi = 3.14;
class SomeMathObject {
  constructor() {
    console.log("object is created");
  }
}

// module.exports = sum; //we are exporting the sum function
//first way is to add the porperties to the module.exports object
// module.exports.sum1 = sum; //now exports.sum1 is gonna have the sum function
// module.exports.PI = pi;
// module.exports.SomeMathObject1 = SomeMathObject;

//now instead of writing this way of export, we can also add an object literal to module.exports object
module.exports = {
  sum1: sum,
  PI: pi,
  SomeMathObject1: SomeMathObject
};
