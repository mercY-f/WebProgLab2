// Обработка добавления в корзину
document.querySelectorAll('.add-cart-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const productName = this.closest('.product-card').querySelector('.product-name').textContent;
        alert('✅ ' + productName + ' добавлен в корзину!');
    });
});

// Обработка подписки на рассылку
document.querySelector('.newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = event.target.querySelector('input').value;
    alert('✅ Спасибо за подписку!\n\nВы будете получать уведомления на: ' + email);
    event.target.reset();
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Анимация появления элементов при прокрутке
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.product-card, .category-card, .feature-item');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// Счётчик корзины (демо)
let cartCount = 0;
document.querySelectorAll('.add-cart-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        cartCount++;
        console.log('Товаров в корзине:', cartCount);
    });
});

// Обработка поиска
document.querySelector('.search-box button').addEventListener('click', function(e) {
    e.preventDefault();
    const searchQuery = document.querySelector('.search-box input').value;
    if (searchQuery) {
        alert('🔍 Поиск: "' + searchQuery + '"');
    }
});

// Enter для поиска
document.querySelector('.search-box input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        const searchQuery = this.value;
        if (searchQuery) {
            alert('🔍 Поиск: "' + searchQuery + '"');
        }
    }
});

// Анимация для логотипа при загрузке
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    setTimeout(() => {
        logo.style.transform = 'scale(1.1)';
        setTimeout(() => {
            logo.style.transform = 'scale(1)';
        }, 300);
    }, 500);
});