// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js";

// import {
//   getAuth,
//   createUserWithEmailAndPassword,
// } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtuFqa1CXtp6CYUwMWUqjRRuBzXRXNn_Q",
  authDomain: "test-eca9a.firebaseapp.com",
  databaseURL: "https://test-eca9a-default-rtdb.firebaseio.com",
  projectId: "test-eca9a",
  storageBucket: "test-eca9a.appspot.com",
  messagingSenderId: "791020340065",
  appId: "1:791020340065:web:59db1f4fc53d103b557b20",
  measurementId: "G-Z257Q8LXZW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ================= Sign Up Work ============================

var signUpBtn = document.getElementById("signUpBtn");
var email = document.getElementById("email");
var password = document.getElementById("password");

const auth = getAuth();

function submitForm() {
  var obj = {
    email: email.value,
    password: password.value,
  };
  createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) {
      // Signed in
      console.log("user Created Successfully", success.user.uid);
      // ...
    })
    .catch(function (err) {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.log("user not Created", errorMessage);
      // ..
    });

  console.log(obj);
}

// signUpBtn.addEventListener("click", function () {
//   submitForm();
// });

// ================= login Work ============================

function loginUser() {
  var loginEmail = document.getElementById("loginemail").value;
  var loginPassword = document.getElementById("loginpassword").value;

  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then(function (success) {
      // Signed in
      const user = success.user;
      console.log(success.user.uid);
      // ...
    })
    .catch(function (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });

  console.log(loginEmail, loginPassword);
}

var loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", function () {
  loginUser();
});
