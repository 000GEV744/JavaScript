var registeredTutors = []; // will store the tutors who have registered themselves onto the portal

//creating a class of tutors
class tutors {
  constructor(name, expertise) {
    this.name = name;
    this.expertise = expertise;
  }
}

//registering the tutors i.e creating an array to store the details of those registered tutors
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
          " :: " +
          "\n" +
          " & No. of tutors :: " +
          registeredTutors.length
      );
    }
  }
}
