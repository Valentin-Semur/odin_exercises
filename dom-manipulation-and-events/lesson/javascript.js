const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);


const pRed = document.createElement("p");
pRed.textContent = "Hey I'm red!";
pRed.style.color = "red";
container.appendChild(pRed);

const hBlue = document.createElement("h3");
hBlue.textContent = "I'm a blue h3!";
hBlue.style.color = "blue";
container.appendChild(hBlue);

const div = document.createElement("div");
div.style.borderColor = "black";
div.style.borderStyle = "dotted"
div.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
const p = document.createElement("p");
p.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(p); 
container.appendChild(div);

// Bad way to do it 
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

// Better way
const btnx = document.querySelector("#btnx");
btnx.addEventListener("click", () => {
    alert("Hello World");
  });

btnx.addEventListener("click", function (e) {
console.log(e.target);
});

btnx.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });



const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
// and for each one we add a 'click' listener
button.addEventListener("click", () => {
    alert(button.id);
});
});