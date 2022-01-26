var arr = [
  {
    name: "hotel PC",
    desc: "7 Bed Room  askjhas kdsahkdjahs d",
    category: "7 Bed Room",
  },
  {
    name: "hotel Marriot",
    desc: "asdasd as dsa dsa das das askjhas kdsahkdjahs d",
    category: "5 Bed Room",
  },
  {
    name: "hotel ABC",
    desc: "asdasd as dsasasd asd asd sa dsa das das askjhas kdsahkdjahs d",
    category: "2 Bed Room",
  },
];

window.viewMore = function () {
  var obj = {
    name: "hotel PC",
    desc: "7 Bed Room  askjhas kdsahkdjahs d",
    category: "7 Bed Room",
  };

  localStorage.setItem("viewMore", JSON.stringify(obj));
  window.location.assign("./pages/booking/booking.html");
};
