const ulElement = document.querySelector("#categories");
const liElements = ulElement.querySelectorAll(".item");
console.log(`Number of categories:${liElements.length}`);


liElements.forEach((li) => {
    console.log("Category:", li.querySelector("h2").textContent);
    console.log("Elements:", li.querySelectorAll("li").length);
});
