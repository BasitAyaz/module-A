// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-analytics.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.6.4/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5ocbiiM4WgP2oL-FuIBQIsqX2gI1i5KE",
  authDomain: "appointment-6d31b.firebaseapp.com",
  databaseURL: "https://appointment-6d31b-default-rtdb.firebaseio.com",
  projectId: "appointment-6d31b",
  storageBucket: "appointment-6d31b.appspot.com",
  messagingSenderId: "497274237093",
  appId: "1:497274237093:web:8ce286289dd6f2debb9d4c",
  measurementId: "G-QN492XL5ZQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
const dbRef = ref(db, "patientappointments/");

var patientsList = document.getElementById("patientsList");

function renderList(list) {
  list.forEach(function (e) {
    patientsList.innerHTML += ` <tr>
        <td>${e.name}</td>
        <td>${e.age}</td>
        <td>${e.contact}</td>
        <td><button>Approved</button></td>
      </tr>`;
  });
}

window.getPatientsList = function () {
  onValue(
    dbRef,
    function (snapshot) {
      patientsList.innerHTML = "";
      var arr = [];
      snapshot.forEach(function (list) {
        arr.push(list.val());
      });
      renderList(arr);
    },
    {
      onlyOnce: false,
    }
  );
};
