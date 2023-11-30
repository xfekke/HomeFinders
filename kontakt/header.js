// Header
const header = document.createElement("header");
const nav = document.createElement("nav");
const ul1 = document.createElement("ul");
const ul2 = document.createElement("ul");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");
const a_left1 = document.createElement("a");
const a_left2 = document.createElement("a");
const a_right1 = document.createElement("a");
const a_right2 = document.createElement("a");
const navCircle = document.createElement("div");
const div_underline= document.createElement("div");
const div_circle = document.createElement("div");
const logo = document.createElement("img");


// Alla id, input mm
nav.id = "to-meny"
nav.id = "to-meny"
a_left1.href = "#A"
a_left2.href = "#A"
a_right1.href = "#A"
a_right2.href = "#A"
navCircle.id = "nav-circle"
div_underline.id = "green-underline"
div_circle.id = "green-circle"
logo.id = "logo"
logo.src = "../image/hf-logo.svg"


// Alla klasser
ul1.classList.add("meny-left");
ul2.classList.add("meny-right");


// Innehållstexter
a_left1.innerText = "Sök bostad";
a_left2.innerText = "Sälja";
a_right1.innerText = "Kontakt";
a_right2.innerText = "Logga in";


// Skriv ut till html
document.body.appendChild(header);
header.appendChild(nav);
nav.appendChild(ul1);
nav.appendChild(ul2);
ul1.appendChild(li1);
ul1.appendChild(li2);
ul2.appendChild(li3);
ul2.appendChild(li4);
li2.appendChild(a_left2);
li1.appendChild(a_left1);
li3.appendChild(a_right1);
li4.appendChild(a_right2);

document.body.appendChild(div_underline);
div_underline.appendChild(div_circle);

header.appendChild(navCircle);
navCircle.appendChild(logo);



// homeFinders logotype
// const logo = document.createElement("svg");
// const g1 = document.createElement("g");
// const g2 = document.createElement("g");
// const path_1 = document.createElement("path");





// ----- kodexempel ------------
// const element = document.createElement("element");

// element.innerText = "Texten som ska skrivas ut";

// input.type = "text";
// input.id = "playerX";
// input.placeholder = "Spelare X:s namn";
// input.name = "playerX";
// input.required = true;

// element.classList.add("className");

// document.body.appendChild(element);
// element.appendChild(under-element);