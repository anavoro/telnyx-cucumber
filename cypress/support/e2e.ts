import "./commands";

if ((window as any).Cypress.config("hideXHRInCommandLog")) {
  const app = window.top;

  if (
    app &&
    !app.document.head.querySelector("[data-hide-command-log-request]")
  ) {
    const style = app.document.createElement("style");
    style.innerHTML =
      ".command-name-request, .command-log-request { display: none; }";
    style.setAttribute("data-hide-command-log-request", "");

    app.document.head.appendChild(style);
  }
}