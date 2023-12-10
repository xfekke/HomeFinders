const main = document.createElement("main");
const section_brokers = document.createElement("section");
const h2 = document.createElement("h2");
const ingress = document.createElement("p");
const dealers = document.createElement("div");
// Säljare 1
const dealer_1 = document.createElement("div");
const img_dealer_1 = document.createElement("img");
const h3_1 = document.createElement("h3");
const role_1 = document.createElement("p");
const p_1A = document.createElement("p");
const p_1B = document.createElement("p");
const alink_1A = document.createElement("a");
const alink_1B = document.createElement("a");
// Säljare 2
const dealer_2 = document.createElement("div");
const img_dealer_2 = document.createElement("img");
const h3_2 = document.createElement("h3");
const role_2 = document.createElement("p");
const p_2A = document.createElement("p");
const p_2B = document.createElement("p");
const alink_2A = document.createElement("a");
const alink_2B = document.createElement("a");
// Säljare 3
const dealer_3 = document.createElement("div");
const img_dealer_3 = document.createElement("img");
const h3_3 = document.createElement("h3");
const role_3 = document.createElement("p");
const p_3A = document.createElement("p");
const p_3B = document.createElement("p");
const alink_3A = document.createElement("a");
const alink_3B = document.createElement("a");


// id:n m fl:
section_brokers.id = "brokers"
dealers.id = "dealers"
// Säljare 1
img_dealer_1.src = "./image/dealer.jpg"
img_dealer_1.alt = "Stig Insides"
alink_1A.href = "mailto:stig.insides@homefinder.se"
alink_1B.href = "tel:+46 8 123 45 67"
// Säljare 2
img_dealer_2.src = "./image/dealer2.jpg"
img_dealer_2.alt = "Forentia Zales"
alink_2A.href = "forentia.zales@homefinder.se"
alink_2B.href = "tel:+46 8 123 45 67"
// Säljare 3
img_dealer_3.src = "./image/dealer3.jpg"
img_dealer_3.alt = "Tille Salusson"
alink_3A.href = "mailto:tille.salusson@homefinder.se"
alink_3B.href = "tel:+46 8 123 45 67"


// klasser:
main.classList.add("wrapper");
ingress.classList.add("ingress");
// Säljare 1
dealer_1.classList.add("dealer");
role_1.classList.add("role");
img_dealer_1.classList.add("dealer-img");
// Säljare 2
dealer_2.classList.add("dealer");
role_2.classList.add("role");
img_dealer_2.classList.add("dealer-img");
// Säljare 3
dealer_3.classList.add("dealer");
role_3.classList.add("role");
img_dealer_3.classList.add("dealer-img");


//Utskriven text på sidan
h2.innerText = "Kontaktinformation"
ingress.innerText = "Vill du komma i kontakt med våra vassa mäklare?"
// Säljare 1
h3_1.innerText = "Stig Insides"
role_1.innerText = "Auktoriserad bostadsmäklare"
alink_1A.innerText = "Maila mäklaren direkt!"
alink_1B.innerText = "Ring mig: 08-123 45 67"
// Säljare 2
h3_2.innerText = "Forentia Zales"
role_2.innerText = "Auktoriserad bostadsmäklare"
alink_2A.innerText = "Maila mäklaren direkt!"
alink_2B.innerText = "Ring mig: 08-123 45 67"
// Säljare 3
h3_3.innerText = "Tille Salusson"
role_3.innerText = "Auktoriserad bostadsmäklare"
alink_3A.innerText = "Maila mäklaren direkt!"
alink_3B.innerText = "Ring mig: 08-123 45 67"


//Html-genering
document.body.appendChild(main);
main.appendChild(section_brokers);
section_brokers.appendChild(h2);
section_brokers.appendChild(ingress);
section_brokers.appendChild(dealers);
// Säljare 1
dealers.appendChild(dealer_1);
dealer_1.appendChild(img_dealer_1);
dealer_1.appendChild(h3_1);
dealer_1.appendChild(role_1);
dealer_1.appendChild(p_1A);
p_1A.appendChild(alink_1A);
dealer_1.appendChild(p_1B);
p_1B.appendChild(alink_1B);
// Säljare 2
dealers.appendChild(dealer_2);
dealer_2.appendChild(img_dealer_2);
dealer_2.appendChild(h3_2);
dealer_2.appendChild(role_2);
dealer_2.appendChild(p_2A);
p_2A.appendChild(alink_2A);
dealer_2.appendChild(p_2B);
p_2B.appendChild(alink_2B);
// Säljare 3
dealers.appendChild(dealer_3);
dealer_3.appendChild(img_dealer_3);
dealer_3.appendChild(h3_3);
dealer_3.appendChild(role_3);
dealer_3.appendChild(p_3A);
p_3A.appendChild(alink_3A);
dealer_3.appendChild(p_3B);
p_3B.appendChild(alink_3B);


// ------- malia direkt-formulär -------- //
const section_2 = document.createElement("section");
const ingress_2 = document.createElement("p");
const form = document.createElement("form");
const input_1 = document.createElement("input");
const input_2 = document.createElement("input");
const input_3 = document.createElement("input");
const send = document.createElement("button");

// id:n, m fl. ------- //
// Fält 1
input_1.type = "email";
input_1.id = "email";
input_1.placeholder = "Ange e-postadress";
input_1.name = "email";
input_1.required = true;
// Fält 2
input_2.type = "text";
input_2.id = "not";
input_2.placeholder = "Ärende";
input_2.name = "not";
input_2.required = true;
// Fält 3
input_3.type = "text";
input_3.id = "message";
input_3.placeholder = "Meddelande";
input_3.name = "message";
input_3.required = true;

// klasser
section_2.classList.add("form-section");
ingress_2.classList.add("ingress");
send.classList.add("button");

// Innehåll
ingress_2.innerText = "Du kan också skicka e-post till oss via formuläret:"
send.innerText = "Skicka"

main.appendChild(section_2);
section_2.appendChild(ingress_2);
section_2.appendChild(form);
form.appendChild(input_1);
form.appendChild(input_2);
form.appendChild(input_3);
form.appendChild(send);