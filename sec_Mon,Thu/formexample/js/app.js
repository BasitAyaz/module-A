// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-analytics.js";
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
  appId: "1:791020340065:web:171163fbe8752561557b20",
  measurementId: "G-VME6Q5D3YT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//================ Sign Up Work =============

var nameInp = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirmPassword");

function signUp() {
  var obj = {
    name: nameInp.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  };
  console.log(obj);
}
