import "../components/counter.js";

export default () => {
  const isAuthenticated = localStorage.getItem("loggedIn") === "false";

  return isAuthenticated
    ? /*html*/`
        <h2>Mäklarsidan</h2>
        <p>Välkommen mäklare!</p>
      `
    : /*html*/`
        <p>Du måste vara inloggad som mäklare för att se denna sida.</p>
      `;
};
