



const boxes = document.querySelectorAll(".str-bx");

  boxes.forEach(box => {

    // CLICK → permanent active
    box.addEventListener("click", () => {
      boxes.forEach(b => b.classList.remove("active-box"));
      box.classList.add("active-box");
    });

    // HOVER → temporary active
    box.addEventListener("mouseenter", () => {
      boxes.forEach(b => b.classList.remove("active-box"));
      box.classList.add("active-box");
    });

  });
