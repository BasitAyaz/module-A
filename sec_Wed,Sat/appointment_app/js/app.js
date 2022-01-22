var doctorListParent = document.getElementById("doctorListParent");
var appointmentCategory = document.getElementById("appointmentCategory");
var appointmentStar = document.getElementById("appointmentStar");

var speciality = [
  {
    label: "General",
    value: "gp",
  },
  {
    label: "Child Specialist",
    value: "childSpecialist",
  },
  {
    label: "Cardiac Specialist",
    value: "cardiac",
  },
  {
    label: "Diabetec Specialist",
    value: "diabetic",
  },
  {
    label: "Neuro Specialist",
    value: "neuro",
  },
  {
    label: "Nephro Specialist",
    value: "nephro",
  },
  {
    label: "Eye Specialist",
    value: "eye",
  },
  {
    label: "ENT Specialist",
    value: "ent",
  },
];

var doctorList = [
  {
    name: "Muhammad Ali",
    speciality: {
      label: "General",
      value: "gp",
    },
    days: ["sun", "mon"],
    timing: "9:00 to 12:00",
    hospital: "AKUH",
    starRating: 5,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ExO1JlXvYrV2MfSMVNHkRQsGGaEX0-C_iazBS-8NPkBk7kEAyfbx9h2MvkX7bNpiP_U&usqp=CAU",
  },
  {
    name: "Muhammad Ahmed",
    speciality: {
      label: "Cardiac Specialist",
      value: "cardiac",
    },
    days: ["sun", "mon"],
    timing: "9:00 to 12:00",
    hospital: "LNH",
    starRating: 3,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ExO1JlXvYrV2MfSMVNHkRQsGGaEX0-C_iazBS-8NPkBk7kEAyfbx9h2MvkX7bNpiP_U&usqp=CAU",
  },
  {
    name: "Muhammad Ali",
    speciality: {
      label: "Cardiac Specialist",
      value: "cardiac",
    },
    days: ["sun", "mon"],
    timing: "9:00 to 12:00",
    hospital: "LNH",
    starRating: 3,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ExO1JlXvYrV2MfSMVNHkRQsGGaEX0-C_iazBS-8NPkBk7kEAyfbx9h2MvkX7bNpiP_U&usqp=CAU",
  },
  {
    name: "Muhammad Ahsan",
    speciality: {
      label: "Nephro Specialist",
      value: "nephro",
    },
    days: ["sun", "mon"],
    timing: "9:00 to 12:00",
    hospital: "LNH",
    starRating: 3,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ExO1JlXvYrV2MfSMVNHkRQsGGaEX0-C_iazBS-8NPkBk7kEAyfbx9h2MvkX7bNpiP_U&usqp=CAU",
  },
  {
    name: "Muhammad Basit",
    speciality: {
      label: "Nephro Specialist",
      value: "nephro",
    },
    days: ["sun", "mon"],
    timing: "9:00 to 12:00",
    hospital: "LNH",
    starRating: 3,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ExO1JlXvYrV2MfSMVNHkRQsGGaEX0-C_iazBS-8NPkBk7kEAyfbx9h2MvkX7bNpiP_U&usqp=CAU",
  },
];

function renderDoctorList(key, filterValue) {
  doctorListParent.innerHTML = "";
  var arr = [];
  var filterdDoctorList = doctorList.filter(function (e) {
    if (key) {
      if (e[key] == filterValue) {
        return e;
      }
    } else {
      if (e.speciality.value == filterValue) {
        return e;
      }
    }
    if (e.speciality.value == filterValue) {
      return e;
    }
  });
  if (filterdDoctorList && filterdDoctorList.length > 0) {
    arr = filterdDoctorList;
  } else {
    arr = doctorList;
  }

  arr.forEach(function (e) {
    doctorListParent.innerHTML += ` <div class="row my-3 bg-white shadow rounded p-3">
    <div class="col-md-2">
      <img
        src="${e.imgUrl}"
        width="100%"
        alt=""
        class="rounded"
      />
    </div>
    <div class="col-md-6">
      <h2>Dr ${e.name}</h2>
      <h5>${e.speciality.label}</h5>
      <h5>${e.hospital}</h5>
      <div>
        <span class="colorPrimary"><i class="fas fa-star"></i></span>
        ${e.starRating}
      </div>
    </div>
    <div class="col-md-4">
      <div>
        <h4>
          <span class="colorPrimary"
            ><i class="fad fa-clock"></i
          ></span>
          ${e.timing}
        </h4>
        <h4>
          <span class="colorPrimary"
            ><i class="fad fa-calendar-day"></i
          ></span>
          ${e.days}
        </h4>
        <button
        onclick="bookAppointment()"
          class="p-2 border-0 rounded-pill px-5 backgroundPrimary text-white"
        >
          Make Appointment
        </button>
      </div>
    </div>
  </div>`;
  });
}

window.filterDoctor = function () {
  console.log(appointmentCategory.value);
  renderDoctorList(appointmentCategory.value);
};
window.filterDoctorbyStarRating = function () {
  renderDoctorList("starRating", appointmentStar.value);
};
window.bookAppointment = function (e) {
  console.log(e);
};

renderDoctorList();
