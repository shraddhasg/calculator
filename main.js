function display(event) {
  let input = event.target.innerText;
  let screen = document.getElementById("screen");
  screen.innerText = screen.innerText + input;
}

function dispayResult(event) {
  let screen = document.getElementById("screen");
  let expression = screen.innerText;
  let result = eval(expression);
  screen.innerText = result;
}
