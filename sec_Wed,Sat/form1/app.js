// ================= Firebase Configuration ============================

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
  child,
  get,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo45JnMmf1wuawzLPwLzFkfsxg-p0m12o",
  authDomain: "fir-test-8b604.firebaseapp.com",
  projectId: "fir-test-8b604",
  storageBucket: "fir-test-8b604.appspot.com",
  messagingSenderId: "133956416113",
  appId: "1:133956416113:web:82462b76cbda392c1de1d0",
  measurementId: "G-PKC0V788ZE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getDatabase();

// ================= Sign Up Work ============================

var signUpBtn = document.getElementById("signUpBtn");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var userNameInput = document.getElementById("userName");

function submitForm() {
  var obj = {
    email: emailInput.value,
    password: passwordInput.value,
    userName: userNameInput.value,
  };
  createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (succes) {
      console.log("Successfully Created");
      console.log(succes.user.uid);
      obj.uid = succes.user.uid;
      const refrence = ref(db, "users/" + obj.uid);
      set(refrence, obj);
    })
    .catch(function (err) {
      console.log("Creation Rejected");
      console.log(err.code);
      console.log(err.message);
    });

  console.log(obj);
}

// signUpBtn.addEventListener("click", function () {
//   submitForm();
// });

// ================= login Work ============================

var loginBtn = document.getElementById("loginBtn");

function loginUser() {
  var loginEmail = document.getElementById("loginemail").value;
  var loginPassword = document.getElementById("loginpassword").value;

  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then(function (loginUsers) {
      console.log(loginUsers.user.uid);
      const dbRef = ref(getDatabase());
      get(child(dbRef, "users/" + loginUsers.user.uid))
        .then(function (userData) {
          console.log(userData.val());
        })
        .catch();
    })
    .catch(function () {});

  console.log(loginEmail, loginPassword);
}

// loginBtn.addEventListener("click", function () {
//   loginUser();
// });

// ================= Dashboard Work ============================

var addProductButton = document.getElementById("addProductButton");
var productName = document.getElementById("productName");
var desc = document.getElementById("desc");
var getDataBtn = document.getElementById("getDataBtn");

function addProduct() {
  var obj = {
    title: productName.value,
    desc: desc.value,
  };
  const postListRef = ref(db, "posts");
  const newPostRef = push(postListRef);
  const key = newPostRef.key;
  obj.key = key;
  set(newPostRef, obj);

  console.log(obj, key);
}

addProductButton.addEventListener("click", function () {
  addProduct();
});

getDataBtn.addEventListener("click", function () {
  const dbRef = ref(db, "posts");
  onValue(
    dbRef,
    function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        const childData = childSnapshot.val();
        console.log(childData);
        // ...
      });
    },
    {
      onlyOnce: true,
    }
  );
});
