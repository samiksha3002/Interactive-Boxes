document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    // Initially hide all dropdowns
    box.querySelector(".dropdowns")?.classList.add("hidden");
  });

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      boxes.forEach((b) => {
        b.classList.remove("active");
        b.querySelector(".dropdowns")?.classList.add("hidden");
        b.querySelector("input[type='radio']").checked = false;
      });

      box.classList.add("active");
      box.querySelector(".dropdowns")?.classList.remove("hidden");
      box.querySelector("input[type='radio']").checked = true;
    });
  });

  // Set the initial active box and show its dropdown
  const activeBox = document.querySelector(".box.active");
  if (activeBox) {
    activeBox.querySelector(".dropdowns")?.classList.remove("hidden");
  }
});
