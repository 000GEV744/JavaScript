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
        tutorName.push(tutors.name);
      }
    }
    setDOM(tutorName);
    // *************************************<END> :: ONLY FOR SLOTS **********************************
  } else if (subject != "" && slot != "") {
    // *************************************<START> :: both for slots and subjects **********************************

    let tutorName = [];
    for (let tutors of registeredTutors) {
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
        }
      }
    }
    setDOM(tutorName); //calling to set the drop down list.
    // ************************<END> :: both for slots and subjects*************************
  } else {
    document.getElementById("teachersperConditions").innerHTML = "";
  }
}
//******************Showing tutors in dropDown List using Subject <End>*************************/

function setDOM(tutorName) {
  let str = '<select  id="selectedTutor"><option value="">select..</option>';
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

//******************* <START> ************************/
function assignTeacher(subject, slot, tutorname, classAlloted) {
  let flag = 0;
  if (classAlloted[0].checked) {
    classAlot = classAlloted[0].value;
  }
  if (classAlloted[1].checked) {
    classAlot = classAlloted[1].value;
  }
  //checking if tutor is already assigned that class or not
  for (let tutor of registeredTutors) {
    console.log(tutor);
    if (tutor.name == tutorname) {
      console.log("name matched");
      if (tutor.slot.length == 0) {
        flag = 1;
      }
      //iterating over registered tutors and now finding the tutor who is assigned!
      for (var i = 0; i < tutor.slot.length; i++) {
        /*checking if that slot is available or not and if slot is not available then check whether
       tutor is assigned for that same class or not and
       if he is not assigned for same class then make flag = 1; means teacher is available to get assigned!*/
        console.log(tutor.slot[i] + " :: " + slot);
        if (tutor.slot[i] == slot) {
          console.log(tutor.classAssigned[i] + " :: " + classAlot);
          if (tutor.classAssigned[i] != classAlot) {
            flag = 1;
            break;
          }
        } else {
          flag = 1;
          break;
        }
      }
    }

    if (flag == 1) {
      tutor.slot.push(slot);
      tutor.classAssigned.push(classAlot);
      document.getElementById(
        `${classAlot} ${slot}`
      ).innerHTML = `<b>${subject}</b> <sub>(By ${tutorname})</sub>`;
    }
  }
  if (flag == 0) {
    alert("oops! Teachers is Busy.");
  }
}
//******************* <END> ************************/
