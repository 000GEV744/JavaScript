var registeredTutors = []; // will store the tutors who have registered themselves onto the portal
var slotAssignedMap = new Map(); //once user will assign the slot to the tutor that will get store here
//where the key will be the slot and value will be the tutors object .

//*********************** Creating a class of tutors <START> ******************************
class tutors {
  constructor(name, expertise) {
    this.name = name;
    this.expertise = expertise;
    this.slots = null;
    this.classAssigned = null;
  }
}
//*********************** Creating a class of tutors <END> ******************************

//*********************************Creating tutors<START>*****************************************/
function saveTeacher() {
  let count = 0;
  let expertsArray = [];
  let form = document.forms.tutorform;
  let checkedExpertise = form.elements.Expert_in;
  let name = form.elements.name.value;
  for (let exp of checkedExpertise) {
    if (exp.checked == true) {
      ++count;
      expertsArray.push(exp.value);
    }
  }
  if (name == "" || name === undefined) {
    alert("please fill up the form first !");
  } else if (count < 1) {
    alert("please select atleast one expertise !");
  } else {
    let t = new tutors(name, expertsArray);
    registeredTutors.push(t); //pushing the tutors to the registeredTutors array
    form.elements.name.value = "";
    for (let exp of checkedExpertise) {
      exp.checked = false;
    }
    if (t != undefined) {
      alert(
        "tutor registered and details are :: " +
          t.name +
          " :: " +
          t.expertise +
          "\n" +
          " & No. of tutors :: " +
          registeredTutors.length
      );
    }
  }
}
//*********************************Creating tutors<END>*****************************************/


function()