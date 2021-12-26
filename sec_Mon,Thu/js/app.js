// CH# 1

// window.alert("Hello World");
// alert("Hello World");
// console.log("Hello World");
// document.write("Hello World");

// CH# 2

// var firstVeriable = "new Value";
// var b = firstVeriable;
// console.log(b);

// CH# 3

// var a = 10;
// var b = 20;

// console.log(a - b);

// var a = 10;
// var b = "20";

// console.log(a * b);
// console.log(a / b);
// console.log(a - b);
// console.log(a + b);

// var a = 10; //11

// var b = a++;

// console.log(b);
// console.log(a);

// var a = 10;

// var b = ++a;

// console.log(b);
// console.log(a);

// a = a + 10;

// var name = 'hakjsd' // legal
// var NAME = 'hakjsd' // legal
// var ba_123 = 'hakjsd' // legal
// var ba123 = 'hakjsd' // legal
// var ba$123 = 'hakjsd' // legal
// var my name = 'hakjsd' // illegal
// var 123 = 'hakjsd' // illegal
// var ba-123 = 'hakjsd' // illegal
// var ba.123 = 'hakjsd' // illegal
// var ba&123 = 'hakjsd' // illegal
// var ba!123 = 'hakjsd' // illegal

// var a = prompt();
// document.write(a);

// var a = prompt("Enter User Name");
// var b = prompt("Enter Father Name");
// var c = +prompt("Enter Age");
// var d = prompt("Enter City", "Karachi");

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// var a = 10;
// var b = 20;

// if (a === b) {
//   console.log("IF Condition True");
// }

// if (a < b) {
//   console.log("Condition True");
// } else {
//   console.log("Condition False");
// }

// var a = "some text";
// var b = "another text";

// if (a == b) {
//   console.log("Word Same");
// } else {
//   console.log("not Same");
// }

// var a = 32;
// var b = 10;

// if (a == b) {
//   console.log("same");
// } else {
//   if (a < 30) {
//     console.log("second Condition True");
//   } else {
//     console.log("not same");
//   }
// }

// <   less than
// >   greater than
// ==  equal to
// === eqaual to with data type
// !=  not equal to
// !== not equalt to with data type
// <=  less than equal to
// >=  greater than equal to

// var a = 60;
// var b = 40;

// if (a < b) {
//   console.log("True");
// } else if (a < 50) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// var a = 10;
// var b = 20;
// var c = 30;

// // if (a < b && b < c) {
// //   console.log("Both Conditions are right");
// // }

// if (a < b || b == c) {
//   console.log("Only one Conditions are right");
// }

// var a = "letter 1";
// var b = "letter 1";
// var c = "letter 3";
// var d = "letter 4";
// var e = "letter 5";
// var f = "letter 6";
// var g = "letter 7";
// var h = "letter 8";
// var i = "letter 9";
// var j = "letter 10";

// var arr = ["letter 1", "letter 2", "letter 3", "letter 4", "letter 5"];
// arr[0] = "some new text";

// arr.push("Last Letter"); // add one value in the last
// arr.pop(); // remove on value in the last

// arr.unshift("first letter"); // add value in start
// arr.shift(); // remove from start

// var newArray;
// newArray = arr.slice(1, 4); // copy part in array
// newArray = arr.splice(2, 2);

// console.log(arr);
// console.log(newArray);

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (var i = 0; i < 10; i++) {
//   for (var j = 0; j < 20; j++) {
//     console.log("value of I ", i, "value of J ", j);
//   }
// }

// var a = "BASIT Ahmed";

// console.log(a.toLowerCase());
// console.log(a.toUpperCase());

// var a =
//   "Lorem ipsum dolor sit amet, consectetur ! adipisicing elit. Commodi quas ab voluptatem id consectetur, esse unde possimus voluptas incidunt distinctio, aspernatur quis repellat aliquam earum adipisci corrupti quibusdam et fugit quasi!";

// var firstLetter = a.slice(0, 1);
// var otherLetters = a.slice(1);
// console.log(firstLetter.toUpperCase() + otherLetters.toLowerCase());

// var indexWord = a.indexOf("!");
// if (indexWord == -1) {
//   console.log("user Allowed");
// }

// a = a.replace(/consectetur/g, "new Text");
// console.log(a);

// var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// var b = "Basit";

// console.log(b.charAt(2));

// var a = 1.20213215214;
// console.log(Math.round(a));
// console.log(Math.floor(a));
// console.log(Math.ceil(a));
// console.log(a.toFixed(4));

// var randomNumber = Math.random();

// console.log(randomNumber * 6);

// var a = "150.67";
// console.log(+a);
// console.log(Number(a));
// console.log(parseInt(a));
// console.log(parseFloat(a));

// var a = 456;
// a = a.toString();
// console.log(typeof a);

var dt = new Date();
// console.log(dt);
// console.log(dt.getDay());
// console.log(dt.getDate());
// console.log(dt.getMonth());
// console.log(dt.getFullYear());
// console.log(dt.getHours());
// console.log(dt.getMinutes());
// console.log(dt.getSeconds());
// console.log(dt.getMilliseconds());
// console.log(dt.getTime());

// dt.setDate(1);
// dt.setMonth(1);
// dt.setFullYear(2000);
// dt.setHours(00);
// dt.setMinutes(30);
// dt.setSeconds(45);

// console.log(dt);

// function showTime() {
//   var dt = new Date();
//   var hour = dt.getHours();
//   var min = dt.getMinutes();
//   var sec = dt.getSeconds();
//   console.log(hour + "-" + min + "-" + sec);
// }

// showTime();

// function abc(val) {
//   console.log(val);
// }
// abc("asd");

// function xyz() {
//   var a = "asd";
//   return a;
// }

// console.log(xyz());

// var day = "mon";
// switch (day) {
//   case "mon":
//     alert("Monday");
//     break;
//   case "tue":
//     alert("Tuesday");
//     break;
//   default:
//     alert("No Day Found");
// }

// var a = 0;
// while (a < 10) {
//   a++;
//   console.log("while playing", a);
// }

// var a = 0;
// do {
//   console.log(a);
//   a++;
// } while (a < 0);

// function closeBox(element) {
//   element.className = "close";
// }

// var email = "abc@gmail.com";
// var password = 123456;

// function getValue() {
//   var emailInput = document.getElementById("email");
//   var passwordInput = document.getElementById("password");
//   var showMessagePera = document.getElementById("showMessage");

//   var a = emailInput.value;
//   var b = passwordInput.value;
//   if (a == email && b == password) {
//     showMessagePera.innerHTML = "User Login Successfully";
//     showMessagePera.style.color = "green";
//     console.log(a, b);
//   } else {
//     showMessagePera.innerHTML = "User Not Found";
//     showMessagePera.style.color = "maroon";
//   }
// }

// var box = document.getElementById("box");
// box.className += " largeBox";

// var a = document.getElementById("child2");

// console.log(a.nextSibling);

var b = document.childNodes[1].childNodes[2]

console.log(b.childNodes[1].nodeName)


