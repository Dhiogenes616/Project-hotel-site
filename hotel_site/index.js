
const navbar = document.getElementById('nav-principal');

function changeNavbarColorOnScroll() {
  const scrollY = window.scrollY;

  const scrollThreshold = 100;

  if (scrollY > scrollThreshold) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
}

window.addEventListener('scroll', changeNavbarColorOnScroll);

// Selecione os elementos do slide e dos botões de navegação
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prevButton');
const nextButton = document.querySelector('.nextButton');

let currentSlide = 0;

// Função para exibir o slide atual e ocultar os demais
function showSlide(slideIndex) {
  if (slideIndex < 0) {
    currentSlide = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    currentSlide = 0;
  }

  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Exibir o primeiro slide ao carregar a página
showSlide(currentSlide);

// Adicionar um ouvinte de evento ao botão "Anterior"
prevButton.addEventListener('click', () => {
  currentSlide--;
  showSlide(currentSlide);
});

// Adicionar um ouvinte de evento ao botão "Próximo"
nextButton.addEventListener('click', () => {
  currentSlide++;
  showSlide(currentSlide);
});




