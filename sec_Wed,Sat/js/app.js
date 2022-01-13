// alert("MEssage from start");
// window.alert("MEssage from start");
// console.log("MEssage from start");
// document.write("MEssage from start");

// var name = "Abdul Basit Ahmed";
// name = "Muhammad Ali";

// console.log(name);

// var a = 10;
// var b = 20;

// var c = a + b;

// console.log(c);

// var var = 'asd' // illegal
// var 123 = 'asd' // illegal
// var 1asdkjhhs = 'asd' // illegal
// var asd123 = 'asd' // legal
// var a.sd123 = 'asd' // illegal
// var a sd123 = 'asd' // illegal
// var a-sd123 = 'asd' // illegal
// var a_sd123 = 'asd' // legal
// var a_sd1$23 = 'asd' // legal
// var a_sd1&23 = 'asd' // illegal
// var .a = 'asd' // illegal

// var a = 10;
// var b = 20;

// var c = a + (b - a) * b;

// var a = 10;

// var b = ++a;

// var a = "Basit ";
// var b = "Ahmed";
// var c = a + b;

// console.log(c);

// var a = prompt("Enter Name");
// var b = prompt("Enter Age");
// var c = prompt("Enter Age", "Karachi");

// var a = 10;
// var b = 10;

// if (a == b) {
//   console.log("true condition");
// }

// var a = 10;
// var b = 20;

// if (a != b) {
//   console.log("true condition");
// } else {
//   console.log("false condition");
// }

// if(a == b){

// }else if(b == c){

// }else{

// }

// if( a == b && b == c ){

// }

// if( a == b || b == c ){

// }

// if( a == b ){

// }else if(b == c){

// }

// var a = "letter 1";
// var b = "letter 2";
// var c = "letter 3";

// arr[10] = "new Text";

// arr.push("new Text"); //add last main
// arr.pop(); //remove last se

// arr.unshift("new text"); // add start main
// arr.shift(); // remove start se

// var newArray = arr.slice(1, 3); // copy index se
// var newArray = arr.splice(0, 1, "new value 1", "new value 2"); // cut or delete index and amount se

// console.log(arr);

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

var arr = ["letter 1", "letter 2", "letter 3"];

// for (var i = 0; i < 3; i++) {
//   for (var j = 0; j < 10; j++) {
//     console.log("inner Loop", i);
//   }
// }

// for (var i = 0; i < 10; i++) {
//   if (i == 5) {
//     break;
//   }
//   console.log(i);
// }

// var status = true;

// for (var i = 0; i < 10; i++) {
//   if (i == 5) {
//     status = false;
//     console.log(status);
//   }
//   console.log(status);
// }
// var a = "asdasd "
// var b = "asdasdsad"

// var text =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, mollitia, cupiditate modi necessitatibus Optio illo animi odit, aut quidem Optio rerum quod ipsum enim non quasi sapiente accusamus vel vero earum cum.";

// Optio

// for (var i = 0; i < text.length; i++) {
//   var word = text.slice(i, i + 5);
//   if (word === "Optio") {
//     text = text.slice(0, i) + "apna letter" + text.slice(i + 5);
//   }
// }

// var ind = text.indexOf("Optio");

// text = text.replace(/Optio/g, "Apna Word");

// console.log(text);

// var letter = text.charAt(57);

// console.log(letter);

// var a = 1.978945647897;

// var ans = Math.round(a);
// var ans = Math.ceil(a); force fully next
// var ans = Math.floor(a); force fully previous
// var ans = a.toFixed(3);
// var randomNumber = Math.random();

// console.log(Math.ceil(randomNumber * 6));

// var a = "100.112";
// a = Number(a);

// a = parseInt(a);
// console.log(a);

// a = parseFloat(a);
// console.log(a);

// console.log(typeof a);

// console.log(+a + +a);

// var a = 50000000;

// a = a.toLocaleString();

// console.log(a);
// var months = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];

// var now = new Date();
// var yr = now.getFullYear();
// var month = now.getMonth();
// var dat = now.getDate();
// var day = now.getDay();
// var hours = now.getHours();
// var min = now.getMinutes();
// var sec = now.getSeconds();
// var miliSec = now.getMilliseconds();
// var time = now.getTime();

// console.log(time);

// var currentDate = new Date();
// var currentTime = currentDate.getTime();

// var birthDate = new Date("01-01-2000");
// var birthTime = birthDate.getTime();

// var finalCalTime = currentTime - birthTime;

// var answer = finalCalTime / (1000 * 60 * 60 * 24 * 365);

// console.log(answer);

// var currentDate = new Date();

// currentDate.setFullYear(2022);
// currentDate.setMonth(0);
// currentDate.setDate(10);
// currentDate.setHours(10);
// currentDate.setMinutes(30);
// currentDate.setSeconds(55);

// console.log(currentDate);

// function displayName() {
//   var a = 2;
//   var b = 4;
//   alert(a + b);
// }

// displayName(); // call, invoke, execute
// displayName(); // call, invoke, execute
// displayName(); // call, invoke, execute
// displayName(); // call, invoke, execute
// displayName(); // call, invoke, execute
// displayName(); // call, invoke, execute
// displayName(); // call, invoke, execute
// displayName(); // call, invoke, execute

// creation of Function
// function showMessage(abc) {
//   alert(abc);
//   var a = abc;
//   console.log(a);
// }

// console.log(a);
// calling of Function
// showMessage("Happy Birthday ABC");
// showMessage("Happy Birthday XYZ");

// var a;

// function displayName() {
//   var a = 10;
// }
// displayName();

// console.log(a);

// function abc() {
//   var a = "some text";
//   return a;
// }

// var z = abc();
// console.log(z);

// function calculateDiscount(amount) {
//   var discount = 200;
//   if (amount < 300) {
//     alert("No Discount Available");
//     return;
//   }
//   var finalAmount = amount - discount;
//   return finalAmount;
// }

// var productAmount = prompt();
// var price = calculateDiscount(productAmount);
// console.log(price);

// var day = prompt();
// if (day == "mon") {
//   alert("Monday");
// } else if (day == "tue") {
//   alert("Tuesday");
// } else if (day == "wed") {
//   alert("Wednsday");
// } else {
//   alert("Day Not Found");
// }

/* switch (day) {
  case "mon": 
    console.log("Monday");
    break;
  case "tue":
    console.log("Tuesday");
    break;
  case "wed":
    console.log("Wednesday");
    break;
  default:
    console.log("Day Not Available");
} */

// var i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// var i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 1);

// function abc(message) {
//   console.log(message);
// }
// function changeStyle(element) {
//   element.style.backgroundColor = "blue";
// }

// var dummyEmail = "abc@gmail.com";
// var dummyPassword = 123456;

// function login() {
//   var emailInput = document.getElementById("email");
//   var passwordInput = document.getElementById("password");
//   var showMessageInput = document.getElementById("showMessage");

//   var a = emailInput.value;
//   var b = passwordInput.value;

//   if (a === dummyEmail && b == dummyPassword) {
//     showMessageInput.innerHTML = "user Sign In Succesfully";
//     showMessageInput.style.color = "green";
//   } else {
//     showMessageInput.innerHTML = "No User Found";
//     showMessageInput.style.color = "maroon";
//   }
// }

// function get(element){
//   element.parentNode.style.backgroundColor = 'grey'
//   console.log(element.parentNode)
// }

// var a = document.getElementById('pro2')
// // console.log(a.parentNode)
// // console.log(a.previousSibling)
// console.log(a.nextSibling)

// console.log(document.childNodes[1].childNodes[2].childNodes[3].nodeName)

// function createElementNode(){
//   var parent = document.getElementById('box')
//   var inp = document.getElementById('inp')
//   // var
//   parent.innerHTML += '<p>'+inp.value+'<button onclick="del(this)">Delete</button>'+'</p>'
//   inp.value = ''
// }

// function del(element){
//   console.log(element.parentNode)
//   element.parentNode.remove()
// }

// var table = document.getElementById("studentDate");
// var rollNumberInput = document.getElementById("rollNumberInput");
// var showRollNumber = document.getElementById("showRollNumber");
// var showName = document.getElementById("showName");
// var showFatherName = document.getElementById("showFatherName");
// var showResult = document.getElementById("showResult");

// var student = [
//   {
//     name: "Ali",
//     fatherName: "Abdullah",
//     rollNumber: 1,
//     isClearedInAllSubjects: true,
//   },
//   {
//     name: "Haris",
//     fatherName: "Abdullah",
//     rollNumber: 2,
//     isClearedInAllSubjects: false,
//   },
//   {
//     name: "Zaid",
//     fatherName: "Abdullah",
//     rollNumber: 3,
//     isClearedInAllSubjects: true,
//   },
//   {
//     name: "Sajid",
//     fatherName: "Abdullah",
//     rollNumber: 4,
//     isClearedInAllSubjects: false,
//   },
//   {
//     name: "Majid",
//     fatherName: "Abdullah",
//     rollNumber: 5,
//     isClearedInAllSubjects: true,
//   },
// ];

// for (var i = 0; i < student.length; i++) {
//   table.innerHTML +=
//     "<tr><td>" +
//     student[i].rollNumber +
//     "</td><td>" +
//     student[i].name +
//     "</td><td>" +
//     student[i].fatherName +
//     "</td><td>" +
//     student[i].isClearedInAllSubjects +
//     "</td></tr>";
// }

// function searchResult() {
//   var userRollNumber = rollNumberInput.value;
//   for (var i = 0; i < student.length; i++) {
//     if (userRollNumber == student[i].rollNumber) {
//       var obj = student[i];
//       console.log(obj);
//       showRollNumber.innerHTML = obj.rollNumber;
//       showName.innerHTML = obj.name;
//       showFatherName.innerHTML = obj.fatherName;
//       showResult.innerHTML = obj.isClearedInAllSubjects;
//     }
//   }
// }

// var arr = [];

// function CreateStudent(name, age) {
//   this.name = name;
//   this.age = age;
// }

// CreateStudent.prototype.inst = "SAIMS";

// function createStdOb(name, age) {
//   var student1 = new CreateStudent(name, age);
//   arr.push(student1);
//   console.log(student1.inst);

//   console.log(arr);
// }

// window.location.href // url
// window.location.hostname // host name
// window.location.pathname // current path
// window.location.hash //hash
// window.location.assign('') // move to url
// window.location.replace('') // replace current url by new Url
// window.location.reload() // browser reload
// window.location.reload(false) //browser reload
// window.location.reload(true) //server reload
// history.back()
// history.forward()
// hostory.go()
window.open();
window.open("url");
window.open("url", "win1");
window.open("url", "win1", "width=250,height=250");
