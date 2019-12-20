const tutorial = require("./tutorial1"); //  "./" means the file is in the same current directory where this app.js is and we dont need to pass in the extension
console.log(tutorial);
/**So, now this tutorial const is having the object.
 i.e : {
  sum1: [Function: sum],
  PI: 3.14,
  SomeMathObject1: [Function: SomeMathObject]
}
and if we want to execute it it's like accessing the normal Object
 */

console.log(tutorial.sum1(1, 2));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject1());
