const input = document.querySelector("#validation-input");
// const validInput = document.querySelector("#validation-input.valid");
// const invalidInput = document.querySelector("#validation-input.invalid ");


input.addEventListener("blur", onInputBlur);
function onInputBlur(event) {

    const { value, dataset, classList } = event.target
    
    if (value.length === Number(dataset.length)) {
        classList.add("valid");
        classList.remove("invalid");
        return;
    }
    classList.add("invalid");
    
}