document.addEventListener('DOMContentLoaded', () => {

    // =========================================================
    // 1. Carrossel: Ofertas do Dia
    // =========================================================
    const offerCards = document.getElementById('offerCards');
    const nextOfferBtn = document.getElementById('nextOffer');
    const prevOfferBtn = document.getElementById('prevOffer');

    if (offerCards && nextOfferBtn && prevOfferBtn) {
        nextOfferBtn.addEventListener('click', () => {
            offerCards.scrollBy({ left: 350, behavior: 'smooth' });
        });
        prevOfferBtn.addEventListener('click', () => {
            offerCards.scrollBy({ left: -350, behavior: 'smooth' });
        });
    }

    // =========================================================
    // 2. Carrossel: Qual Pet Você Procura? (Com Loop)
    // =========================================================
    const petCarousel = document.getElementById('petCarousel');
    const nextPetBtn = document.getElementById('nextPet');
    const prevPetBtn = document.getElementById('prevPet');

    if (petCarousel && nextPetBtn && prevPetBtn) {
        nextPetBtn.addEventListener('click', () => {
            const itemWidth = petCarousel.querySelector('.pet-item').offsetWidth + 20; 
            
            if (petCarousel.scrollLeft + petCarousel.clientWidth >= petCarousel.scrollWidth - 5) {
                petCarousel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                petCarousel.scrollBy({ left: itemWidth, behavior: 'smooth' });
            }
        });

        prevPetBtn.addEventListener('click', () => {
            const itemWidth = petCarousel.querySelector('.pet-item').offsetWidth + 20;
            
            if (petCarousel.scrollLeft <= 0) {
                petCarousel.scrollTo({ left: petCarousel.scrollWidth, behavior: 'smooth' });
            } else {
                petCarousel.scrollBy({ left: -itemWidth, behavior: 'smooth' });
            }
        });
    }

    // =========================================================
    // 3. Comportamento visual dos dots no Banner Principal
    // =========================================================
    const dots = document.querySelectorAll('.dots span');
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            dots.forEach(d => d.classList.remove('active-dot'));
            this.classList.add('active-dot');
        });
    });

    // =========================================================
    // 4. Comportamento visual da Paginação (Mais Vendidos)
    // =========================================================
    const pageButtons = document.querySelectorAll('.page-btn');
    pageButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            if(this.textContent === '❮' || this.textContent === '❯') return;
            
            pageButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

});