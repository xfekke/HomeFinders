class Counter extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = /*html*/`
            <button>Clicks : ${count}</button>
        `;

    let btn = this.querySelector("button");

    // State
    btn.onclick = () => {
      btn.innerHTML = "Clicks : " + ++count;
    };
  }
}

let count = 0;

customElements.define("click-counter", Counter);
// representerar antalet klick i en knapp + uppdaterar dynamiskt