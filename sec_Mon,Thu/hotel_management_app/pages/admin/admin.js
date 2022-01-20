// ==================== firebase Config ======================
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";
import {
  getDatabase,
  ref,
  onValue,
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
const dbRef = ref(db, "bookings");

// ==================== Admin Code ======================
var ordersData = [];

function renderArray() {
  var ordersList = document.getElementById("ordersList");
  ordersList.innerHTML = "";
  ordersData.forEach(function (e) {
    console.log(e);
    ordersList.innerHTML += `
    <div class="p-3 my-3 themeLight rounded shadow">
              <div class="d-flex justify-content-between">
                <h3 class="fw-bold">Hotel Name</h3>
                <h5>${e.fullName} <i class="fad fa-user"></i></h5>
              </div>
              <h5><i class="fad fa-users"></i> ${e.noOfMembers}</h5>
              <h5><i class="fad fa-bed"></i> 3 Bed Room</h5>
              <div class="py-2">
                <div class="row">
                  <div class="col-md-3">
                    <h5><i class="fad fa-calendar"></i> ${e.startingDate}</h5>
                  </div>
                  <div class="col-md-3">
                    <h5><i class="fad fa-calendar-check"></i> ${e.days}</h5>
                  </div>
                  <div class="col-md-3">
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        checked
                      />
                      <label class="form-check-label" for="flexSwitchCheckChecked"
                        >Allowed</label
                      >
                    </div>
                  </div>
                  <div class="col-md-3 text-end">
                  <button onclick="deleteOrder('${e.id}')" class="p-2 btn"><i class="fad fa-trash"></i></button>
                </div>
                </div>
              </div>
            </div>`;
  });
}
function deleteOrder(id) {
  console.log(id);
}
onValue(
  dbRef,
  function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      ordersData.push(childSnapshot.val());
      renderArray();
      // ...
    });
  },
  {
    onlyOnce: false,
  }
);
