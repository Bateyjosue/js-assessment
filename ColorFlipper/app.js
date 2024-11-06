document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementByUD("btn");

  btn,
    btn.addEventListener("click", () => {
      document.body.style.backgroundColor = `
    rgb(
      ${Math.random() * 256},
      ${Math.random() * 256},
      ${Math.random() * 256}
    )
    `;
    });
});
