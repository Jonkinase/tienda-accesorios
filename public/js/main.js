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