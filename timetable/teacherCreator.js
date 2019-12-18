var registeredTutors = []; // will store the tutors who have registered themselves onto the portal
var slotAssignedMap = new Map(); //once user will assign the slot to the tutor that will get store here
//where the key will be the slot and value will be the tutors object .

//*********************** Creating a class of tutors <START> ******************************
class tutors {
  slot = [];
  classAssigned = [];
  constructor(name, expertise) {
    this.name = name;
    this.expertise = expertise;
    if (this.name == "Anuj Singh") {
      this.slot.push("8-9 AM");
    }
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

//******************Showing tutors in dropDown List using Subject <Start>***********************/
function showTutors(subject, slot) {
  let str = '<select><option value="">select..</option>';
  let tutorName = [];
  if (subject != "" && slot == "") {
    // *************************************<START> :: ONLY FOR SUBJECT**********************************
    for (let tutors of registeredTutors) {
      let tutorForSubject = tutors.expertise.find(item => {
        if (item == subject) {
          return item;
        }
      });
      if (tutorForSubject != undefined) {
        tutorName.push(tutors.name);
      }
    }
    setDOM(tutorName);
    // *************************************<END> :: ONLY FOR SUBJECT**********************************
  } else if (subject == "" && slot != "") {
    // *************************************<START> :: ONLY FOR SLOTS**********************************
    let tutorName = [];
    for (let tutors of registeredTutors) {
      console.log(tutors.slot);
      let alreadySlots = tutors.slot.find(item => {
        console.log(item + " :: " + slot);
        if (item === slot) {
          return item;
        }
      });
      if (alreadySlots == undefined) {
        console.log(alreadySlots);
        tutorName.push(tutors.name);
        alert(`${tutors.name} is pushed to array`);
      }
    }
    setDOM(tutorName);
    // *************************************<END> :: ONLY FOR SLOTS **********************************
  } else if (subject != "" && slot != "") {
    alert(`both slot ${slot} and subject ${subject} is selected`);
    let tutorName = [];
    for (let tutors of registeredTutors) {
      console.log(tutors);
      let alreadySlots = tutors.slot.find(item => {
        if (item == slot) {
          console.log(item);
          return item; //checking if that slot is available or not
        }
      });
      if (alreadySlots == undefined) {
        let tutorForSubject = tutors.expertise.find(item => {
          if (item == subject) {
            return item; //checking he is a tutor of that subject or not
          }
        });
        if (tutorForSubject != undefined) {
          tutorName.push(tutors.name);
          alert(`${tutors.name} is pushed to array`);
        }
      }
    }
    setDOM(tutorName); //calling to set the drop down list.
  } else {
    document.getElementById("teachersperConditions").innerHTML = "";
  }
}
//******************Showing tutors in dropDown List using Subject <End>*************************/

function setDOM(tutorName) {
  let str = '<select><option value="">select..</option>';
  if (tutorName.length > 0) {
    for (let names of tutorName) {
      str += `<option value="${names}">${names}</option>`;
    }
    str += "</select>";
    document.getElementById("teachersperConditions").innerHTML = str;
  } else {
    document.getElementById("teachersperConditions").innerHTML = "";
    alert("oops! No teachers are available. ");
  }
}
