// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js";

import {
  getDatabase,
  ref,
  set,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY5OQ5K1OLBs25rTdaGFgb1DdIltEPptg",
  authDomain: "fir-test-app-2798b.firebaseapp.com",
  projectId: "fir-test-app-2798b",
  storageBucket: "fir-test-app-2798b.appspot.com",
  messagingSenderId: "1089645057384",
  appId: "1:1089645057384:web:772fb9a3ded9fcb2f472dd",
  measurementId: "G-DSVBWY0YFZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getDatabase();

//================ Sign Up Work =============

var nameInp = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirmPassword");
var signUpBtn = document.getElementById("signUpBtn");
var errorShow = document.getElementById("errorShow");
// ===========Login Variables============
var loginBtn = document.getElementById("loginBtn");
var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");

function signUp() {
  var obj = {
    name: nameInp.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  };

  createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) {
      console.log(success.user.uid);
      obj.uid = success.user.uid;
      errorShow.innerHTML = "User Created Successfully";

      // ============= database work ===================
      const refrence = ref(db, "users/" + obj.uid);
      set(refrence, obj);
    })
    .catch(function (rej) {
      console.log("User Creation Rejected");
      console.log(rej.code);
      console.log(rej.message);
      errorShow.innerHTML = rej.message;
    });

  console.log(obj);
}

function lognUser() {
  var obj = {
    email: loginEmail.value,
    password: loginPassword.value,
  };
  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) {
      console.log("User Sign in Successfully");
      console.log(success);

      const loginReference = ref(db);
      get(child(loginReference, "users/" + success.user.uid))
        .then(function (userData) {
          console.log(userData.val());
        })
        .catch(function (err) {
          console.log(err);
        });
      // window.location.assign("/dashboard.html");
    })
    .catch(function (rej) {
      console.log("User Sign in Rejected");
      console.log(rej.message);
    });

  console.log(obj);
}

// signUpBtn.addEventListener("click", function () {
//   signUp();
// });

loginBtn.addEventListener("click", function () {
  lognUser();
});
