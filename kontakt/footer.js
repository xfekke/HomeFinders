const footer = document.createElement("footer")
const p_end = document.createElement("p")
document.body.appendChild(main);
main.appendChild(footer);
footer.appendChild(p_end);

p_end.innerText = "Sida under utveckling"
p_end.id = "footer-p"



// ----- Minnesexempel kod ------------//
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