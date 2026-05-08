



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

  var $carousel = $('[data-owl-carousel]');
 if ($carousel.length) {
     $carousel.each(function (index, el) {
         $(this).owlCarousel($(this).data('owl-carousel'));
     });
 }

 
  // Set countdown time (4 Hours 46 Minutes 17 Seconds)
  let totalSeconds = (4 * 60 * 60) + (46 * 60) + 17;

  // Select all counter numbers
  const counterNumbers = document.querySelectorAll(".win-text h2");

  function updateCounter() {

    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    // Add leading zero
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    // Update UI
    counterNumbers[0].innerText = hours;
    counterNumbers[1].innerText = minutes;
    counterNumbers[2].innerText = seconds;

    // Stop at 0
    if (totalSeconds > 0) {
      totalSeconds--;
    }
  }

  // Run immediately
  updateCounter();

  // Update every second
  setInterval(updateCounter, 1000);


   
