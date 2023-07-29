const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
    const { email, password } = event.currentTarget.elements;

      if (email.value === "" || password.value === "") {
       
        alert("Все поля должны быть заполнены!!!");
        return;
      }
    
    const data = {
        email: email.value,
        password: password.value,
    };
   console.dir(data);
   event.currentTarget.reset();
}
