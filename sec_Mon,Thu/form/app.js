var a = document.getElementById("name");
var b = document.getElementById("email");
var c = document.getElementById("dropdown");
var d;
function checkValue(e) {
  e.preventDefault();
  if (a.value == "" || a.value == " " || a.value.length < 3) {
    alert("Enter Name");
    return;
  }
  if (b.value == "" || b.value == " ") {
    alert("Enter email");
    return;
  }
  if (c.value == "") {
    alert("Select Category");
    return;
  }
  var radioList = document.getElementsByName("gender");
  for (var i = 0; i < radioList.length; i++) {
    if (radioList[i].checked) {
      console.log(radioList[i].value);
      d = radioList[i].value;
    } else {
      alert("Select gender");
    }
  }

  var obj = {
    name: a.value,
    email: b.value,
    category: c.value,
    gender: d,
  };
  console.log(obj);
}

function HintShow(id) {
  var elem = document.getElementById(id);
  elem.style.display = "block";
}
function HintHide(id) {
  var elem = document.getElementById(id);
  elem.style.display = "none";
}

// false ""
// true " "
// false 0
// true -1
// true 1
// false null
// false undefine
// true []
// true {}
