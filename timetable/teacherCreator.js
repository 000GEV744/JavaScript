var registeredTutors = []; // will store the tutors who have registered themselves onto the portal
class tutors {
  slot = [];
  classAssigned = [];
  constructor(name, expertise) {
    this.name = name;
    this.expertise = expertise;
  }
}

//saving the teachers with proper validations on the form no. 1
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
        "tutor " +
          t.name +
          " with Expertise - " +
          t.expertise +
          " is added!" +
          "\n" +
          "No. of tutors :: " +
          registeredTutors.length
      );
    }
  }
}

//In form 2 after selecting select boxes, it'll show the result in the available teacher sections.
function showTutors(subject, slot) {
  let str = '<select><option value="">select..</option>';
  let tutorName = [];
  if (subject != "" && slot == "") {
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
  } else if (subject == "" && slot != "") {
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
  } else if (subject != "" && slot != "") {
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
  } else {
    document.getElementById("teachersperConditions").innerHTML = "";
  }
}

//setting the drop down list for available teachers after user will select the available text boxes in the form 2
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

//assingning the teacher to a particular slot in the time table div.
function assignTeacher(subject, slot, tutorname, classAlloted) {
  let flag;
  if (classAlloted[0].checked) {
    classAlot = classAlloted[0].value;
  }
  if (classAlloted[1].checked) {
    classAlot = classAlloted[1].value;
  }
  //checking if tutor is already assigned that class or not
  for (let tutor of registeredTutors) {
    flag = 0;
    if (tutor.name == tutorname) {
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
      alert("Congratulations!" + "\n" + "Teacher assigned !");
      resetDom(classAlloted);
      break;
    }
  }
  if (flag == 0) {
    resetDom(classAlloted);
    alert("oops! Teachers is Busy.");
  }
}

function resetDom(classAlloted) {
  document.getElementById("teachersperConditions").innerHTML = "";
  classAlloted[0].checked = false;
  classAlloted[1].checked = false;
  document.getElementById("subject").value = "";
  document.getElementById("slots").value = "";
}
