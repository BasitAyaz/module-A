// ==================== firebase Config ======================
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";
import {
  getDatabase,
  ref,
  push,
  set,
} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAitKAVNU6ZmMlRq4Z2J1iQKpM8bjFdcIU",
  authDomain: "hotel-management-app-65436.firebaseapp.com",
  projectId: "hotel-management-app-65436",
  storageBucket: "hotel-management-app-65436.appspot.com",
  messagingSenderId: "832113467385",
  appId: "1:832113467385:web:07ce4ba94b80c02e136728",
  measurementId: "G-LDV7RX3RFF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

// ==================== Bookign Code ======================

var bookBtn = document.getElementById("bookBtn");

bookBtn.addEventListener("click", function () {
  var obj = {};

  obj.fullName = document.getElementById("fullName").value;
  obj.contact = document.getElementById("contact").value;
  obj.cnic = document.getElementById("cnic").value;
  obj.noOfMembers = document.getElementById("noOfMembers").value;
  obj.days = document.getElementById("days").value;
  obj.startingDate = document.getElementById("startingDate").value;

  const bookingRef = ref(db, "bookings");
  const newPostRef = push(bookingRef);
  obj.id = newPostRef.key;
  set(newPostRef, obj)
    .then(function () {
      console.log("success");
    })
    .catch(function (err) {
      console.log(err);
    });

  console.log(obj);
});
