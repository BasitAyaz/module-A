window.addToCart = function () {
  // string
  //   localStorage.setItem("localData3", "Dummy String Data");
  //array

  var arr = ["a", "b", "c"];
  localStorage.setItem("arrList", JSON.stringify(arr));
};
window.getData = function () {
  // string
  //   var a = localStorage.getItem("localData1");

  var a = localStorage.getItem("arrList");
  a = JSON.parse(a);
  console.log(a);
};
function clearData() {
  localStorage.removeItem("localData1");
}
function clearAll() {
  localStorage.clear();
}
