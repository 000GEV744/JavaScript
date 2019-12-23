const EventEmitter = require("events"); //getting the class from the module
const eventEmitter = new EventEmitter(); //creating the object of EventEmitter class that we got above

eventEmitter.on("tutorials", (num1, num2) => {
  //attaching a listener first and then function that should get called when that listener emits
  console.log(num1 + num2);
  console.log("event tutorials get called");
});

eventEmitter.emit("tutorials", 1, 2); //listener will only get called when the object emits

class Person extends EventEmitter {
  constructor(name) {
    super();
    this._name = name;
  }
  get name() {
    return this._name;
  }
}

let anuj = new Person("anuj");
let ambikesh = new Person("ambikesh");

// function onEmitFunc(persn) {
//   console.log("my name is " + persn);
// }

anuj.on("name", name => {
  console.log("my name is " + name);
});
ambikesh.on("name", name => {
  console.log("my name is " + name);
});

anuj.emit("name", anuj.name);
ambikesh.emit("name", ambikesh.name);
