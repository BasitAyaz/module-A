window.addDataInLocalStorage = function () {
  localStorage.setItem("node1", "ABC 123 Dummy TEXT");
};
window.getDataInLocalStorage = function () {
  var data = localStorage.getItem("node1");
  console.log(data);
};

window.addObjectArrayInLocalStorage = function () {
  var a = {
    id: 1,
    title: document.getElementById("name").value,
  };

  a = JSON.stringify(a);

  localStorage.setItem("objNode", a);

  window.location.assign("./page.html");
};

window.getObjectArrayInLocalStorage = function () {
  var b = localStorage.getItem("objNode");
  b = JSON.parse(b);
  console.log(b);
};

window.clearLocalStorageData = function () {
  localStorage.removeItem("node1");
};
window.clearAllLocalStorageData = function () {
  localStorage.clear();
};
