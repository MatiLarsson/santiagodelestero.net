// Dropdown menu
const turismoDropDown = document.getElementById('turismo-dropdown');
document.getElementById('turismo-dropdown-btn').addEventListener('click', (e) => {turismoDropDown.classList.toggle('show');});


// Carousel 1
const buttons1 = document.querySelectorAll("[data-carousel-button]");

buttons1.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton === 'next' ? 1 : -1
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    });
});

// Swiper Carousel "que hacer en Santiago"
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 0,
        },
        1280: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 0,
        },
        1920: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 0,
        },
    }
});
