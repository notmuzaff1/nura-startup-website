// Mobil menyuni boshqarish
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navbar = document.querySelector('.navbar');
    
    mobileToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
    
    // Agar foydalanuvchi ekranni kattalashtirsa, menyuni yopish
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navbar.classList.remove('active');
        }
    });
    
    // Scroll bo'yicha animatsiyalar
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Animatsiya qo'shish uchun kerakli elementlarni kuzatish
    document.querySelectorAll('.card, .feature, .step').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        observer.observe(el);
        
        // Animatsiya qo'shish
        el.addEventListener('animationend', function() {
            this.style.opacity = '1';
            this.style.transform = 'translateY(0)';
        });
    });
});