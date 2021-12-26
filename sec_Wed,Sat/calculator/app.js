var displayInput = document.getElementById("showDisplay");
function getButtonValue(num) {
  displayInput.value += num;
}
function calculateValue() {
  displayInput.value = eval(displayInput.value);
}
function clearAll() {
  displayInput.value = "";
}