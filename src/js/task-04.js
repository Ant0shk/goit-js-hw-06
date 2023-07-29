const incrementBtn = document.querySelector('[data-action="increment"]');

const decrementBtn = document.querySelector('[data-action="decrement"]');

incrementBtn.addEventListener("click", handlerButtonPlus);
decrementBtn.addEventListener("click", handlerButtonPlus);

let counterValue = 0;
const currentContent = document.getElementById("value");

function handlerButtonPlus(event) {
  event.target.dataset.action === "increment"
    ? (counterValue += 1)
    : (counterValue -= 1);
  currentContent.textContent = counterValue;
}

// const counterValue = document.getElementById("value");
// const decrementBtn = document.querySelector('[data-action="decrement"]');
// const incrementBtn = document.querySelector('[data-action="increment"]');

// let currentValue = 0;

// decrementBtn.addEventListener("click", () => {
//   currentValue -= 1;
//   counterValue.textContent = currentValue;
// });

// incrementBtn.addEventListener("click", () => {
//   currentValue += 1;
//   counterValue.textContent = currentValue;
// });
