var display = document.getElementById("displayInput");
function getButtonValue(btnValue) {
  display.value += btnValue;
}
function calculate() {
  var a = display.value;
  var ans = eval(a);
  display.value = ans;
}
function clearAll() {
  display.value = "";
}
