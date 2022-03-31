const button = document.getElementsByTagName("button");

const list = document.getElementsByTagName("ul");

const listItem = document.getElementsByTagName("li");

button.addEventListener("click", () => {
    let newItem = document.createElement("li");
    newItem.innerHTML = document.querySelector("#input");
    list.appendChild(newItem);
});

listItem.addEventListener("click", function () {
    document.this.remove();
});