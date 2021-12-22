const toggle = document
  .getElementById("toggle")
  .addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.chacked);
  });
