let slideIndex = 1;
showSlides(slideIndex);

document.querySelector('[data-slide-prev]').addEventListener('click', previousSlide);
document.querySelector('[data-slide-next]').addEventListener('click', nextSlide);

function nextSlide() {
    showSlides(++slideIndex);
}

function previousSlide() {
    showSlides(--slideIndex);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName('item');
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";    
}