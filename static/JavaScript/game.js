#testing out colorPicker
let colorPicker = document.getElementById("colorPicker");
let box = document.getElementById("box");
let output = document.getElementById("output");

box.style.borderColor = colorPicker.value;
let playerColor = document.querySelector("#background");
playerColor.style.backgroundColor = colorPicker.value;

colorPicker.addEventListener("input", function(event) {
  box.style.borderColor = event.target.value;
}, false);

colorPicker.addEventListener("change", function(event) {
  output.innerText = "Color set to " + colorPicker.value + ".";
}, false);

let howtoplaybutton = document.getElementById("howtoplay_button");
howtoplaybutton.addEventListener("onclick", () => {
  var thisurl = window.location.pathname;
  window.location.href = thisurl.replace("/", "/howtoplay");
})
