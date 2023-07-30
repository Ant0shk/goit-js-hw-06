const input = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
input.addEventListener("input", onInputChange);

function onInputChange(event) {
    console.log(event);
    if (event.target.value === "") {
      outputName.textContent = "Anonymus";
      return;
    }
    outputName.textContent = event.target.value;
}


