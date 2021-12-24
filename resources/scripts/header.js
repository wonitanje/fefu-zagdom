console.log('123')

const headerMenu = document.querySelector('.menu');
const headerMenuToggle = document.querySelector('.menu-toggle');
if (headerMenuToggle) {
  headerMenuToggle.addEventListener('click', () => {
    headerMenu.classList.toggle('active');
    headerMenuToggle.classList.toggle('active');
  })
}

/////////////////  MODAL WINDOW  ///////////////////

const submit = document.querySelector('.headcontacts_item-submit')
const wModal = document.querySelector('.fon')
const closeBtn = document.querySelector('.modal-window__close-btn')
if (submit) {
  submit.addEventListener('click', () => {
    wModal.style.display = "flex"
  })
}

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    wModal.style.display = "none"
  })
}



/////////////////////  SLIDER  /////////////////////

/* Устанавливаем стартовый индекс слайда по умолчанию: */
console.log(111)
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("item");
    
    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "block";    
}