
const ul = document.querySelector("ul");
const input = document.querySelector("input");
const addButton = document.querySelector("button.add");

function addItem() {
    const item = input.value;
    input.value = "";

    const li = document.createElement("li");
    const span = document.createElement("span");
    const removeButton = document.createElement("button");
    li.appendChild(span);
    li.appendChild(removeButton);
    span.textContent = item;
    removeButton.textContent = "Delete";
    ul.appendChild(li);
    removeButton.addEventListener("click", () => removeButton.parentElement.remove());
    input.focus();
}


addButton.addEventListener("click", () => addItem());
input.addEventListener("keypress", function(event) {if (event.key === "Enter") addItem()})
input.focus();