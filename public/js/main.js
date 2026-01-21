// ===== CARRUSEL =====
let currentSlide = 0;
const track = document.getElementById('carouselTrack');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

// Función para mover el carrusel
function moveToSlide(slideIndex) {
    if (slideIndex < 0) {
        currentSlide = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
        currentSlide = 0;
    } else {
        currentSlide = slideIndex;
    }
    
    const offset = -currentSlide * 100;
    track.style.transform = `translateX(${offset}%)`;
    
    // Actualizar indicadores
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

// Botones anterior y siguiente
prevBtn.addEventListener('click', () => {
    moveToSlide(currentSlide - 1);
});

nextBtn.addEventListener('click', () => {
    moveToSlide(currentSlide + 1);
});

// Indicadores
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        moveToSlide(index);
    });
});

// Auto-play (cambia cada 5 segundos)
let autoPlayInterval = setInterval(() => {
    moveToSlide(currentSlide + 1);
}, 5000);

// Pausar auto-play al hacer hover
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(autoPlayInterval);
});

carouselContainer.addEventListener('mouseleave', () => {
    autoPlayInterval = setInterval(() => {
        moveToSlide(currentSlide + 1);
    }, 5000);
});

// Botones del carrusel "Agregar al carrito"
const carouselAddButtons = document.querySelectorAll('.btn-carousel-add');
carouselAddButtons.forEach(button => {
    button.addEventListener('click', function() {
        const slide = this.closest('.carousel-slide');
        const productName = slide.querySelector('h3').textContent;
        addToCart(productName);
    });
});

// ===== CARRITO =====
// Contador del carrito
let cartCount = 0;

// Seleccionar elementos
const cartCountElement = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.btn-add-cart');

// Función para agregar al carrito
function addToCart(productName) {
    cartCount++;
    cartCountElement.textContent = cartCount;
    
    // Animación simple
    cartCountElement.style.transform = 'scale(1.5)';
    setTimeout(() => {
        cartCountElement.style.transform = 'scale(1)';
    }, 200);
    
    // Mostrar mensaje (opcional)
    alert(`"${productName}" agregado al carrito!`);
}

// Agregar event listeners a todos los botones
addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        // Obtener el nombre del producto desde el card padre
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h4').textContent;
        
        addToCart(productName);
    });
});

// Smooth scroll para los links de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

console.log('TechStore cargado correctamente ✅');