function animateValue(id, start, end, duration) {
    var obj = document.getElementById(id);
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function() {
      current += increment;
      obj.innerHTML = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, stepTime);
  }

  animateValue("counter1", 0, 89, 10000); // Adjust start, end, and duration as needed
  animateValue("counter2", 0, 305, 5000); 
  animateValue("counter3", 0, 79, 20000); 
  animateValue("counter4", 0, 654, 5000);

    var  swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });