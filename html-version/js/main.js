// Main JavaScript for E-commerce Site - All Animations and Interactions

// Global State
const state = {
    cartItems: [],
    currentPage: 'home',
    mobileMenuOpen: false,
    chatbotOpen: false,
    activeTrustInfo: null,
    currentTrustSlide: 0,
    currentProductSlide: 0,
    selectedAppliance: '',
    selectedBrand: '',
    language: 'fr'
};

// Mock Products Data
const mockProducts = [
    {
        id: '1',
        name: 'Pompe de vidange universelle pour lave-linge',
        brand: 'Bosch',
        image: 'assets/392ded11266269b334c66232f3a2ce4446dccd83.png',
        price: 24.90,
        inStock: true,
        aiRecommended: true
    },
    {
        id: '2',
        name: 'Résistance chauffante lave-vaisselle',
        brand: 'Siemens',
        image: 'assets/a810ff5212790b6b3fa9f185f1c2754b2082d7bc.png',
        price: 32.50,
        inStock: true
    },
    {
        id: '3',
        name: 'Thermostat électronique four',
        brand: 'Samsung',
        image: 'assets/0174da8e1f21942cc40c4ee01d8d6046c8adb990.png',
        price: 45.00,
        inStock: true
    },
    {
        id: '4',
        name: 'Joint de porte lave-linge universel',
        brand: 'Whirlpool',
        image: 'assets/b1cf5194e2bbea342f9621c357e30343d65454bf.png',
        price: 18.90,
        inStock: true,
        aiRecommended: true
    },
    {
        id: '5',
        name: 'Filtre à eau frigo américain',
        brand: 'LG',
        image: 'assets/0756cd198c9136bad27f0c23ce38fce085c25f47.png',
        price: 28.00,
        inStock: true
    },
    {
        id: '6',
        name: 'Courroie de tambour sèche-linge',
        brand: 'Miele',
        image: 'assets/4bba82a3eff065e6c7d1e5ce7f00580c48bc753b.png',
        price: 15.50,
        inStock: true
    }
];

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    startTrustBarCarousel();
    startProductCarousel();
    initScrollReveal();
    updateCartCount();
});

// Initialize App
function initializeApp() {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        state.cartItems = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Cart drawer toggle
    const cartBtn = document.getElementById('cart-btn');
    const cartClose = document.getElementById('cart-close');
    const cartOverlay = document.getElementById('cart-overlay');
    
    if (cartBtn) cartBtn.addEventListener('click', openCart);
    if (cartClose) cartClose.addEventListener('click', closeCart);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

    // Trust bar items
    const trustItems = document.querySelectorAll('[data-trust-item]');
    trustItems.forEach(item => {
        item.addEventListener('click', function() {
            toggleTrustPopup(this.dataset.trustItem);
        });
    });

    // Close popups when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('[data-trust-item]') && !e.target.closest('.trust-popup')) {
            closeAllTrustPopups();
        }
    });

    // Chatbot toggle
    const chatbotBtn = document.getElementById('chatbot-btn');
    const chatbotClose = document.getElementById('chatbot-close');
    
    if (chatbotBtn) chatbotBtn.addEventListener('click', toggleChatbot);
    if (chatbotClose) chatbotClose.addEventListener('click', toggleChatbot);

    // Add to cart buttons
    document.querySelectorAll('[data-add-to-cart]').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = this.dataset.addToCart;
            addToCart(productId);
        });
    });
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    state.mobileMenuOpen = !state.mobileMenuOpen;
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenu) {
        if (state.mobileMenuOpen) {
            mobileMenu.classList.add('open');
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
        }
    }
}

// Cart Functions
function openCart() {
    const cartDrawer = document.getElementById('cart-drawer');
    const cartOverlay = document.getElementById('cart-overlay');
    
    if (cartDrawer) cartDrawer.classList.add('open');
    if (cartOverlay) cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    renderCartItems();
}

function closeCart() {
    const cartDrawer = document.getElementById('cart-drawer');
    const cartOverlay = document.getElementById('cart-overlay');
    
    if (cartDrawer) cartDrawer.classList.remove('open');
    if (cartOverlay) cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function addToCart(productId) {
    const product = mockProducts.find(p => p.id === productId);
    if (!product) return;

    const existingItem = state.cartItems.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        state.cartItems.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartCount();
    showToast('Produit ajouté au panier');
    
    // Animate cart icon
    const cartBtn = document.getElementById('cart-btn');
    if (cartBtn) {
        cartBtn.style.transform = 'scale(1.2)';
        setTimeout(() => {
            cartBtn.style.transform = 'scale(1)';
        }, 200);
    }
}

function removeFromCart(productId) {
    state.cartItems = state.cartItems.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCartItems();
    showToast('Produit retiré du panier');
}

function updateQuantity(productId, change) {
    const item = state.cartItems.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        renderCartItems();
    }
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const emptyCart = document.getElementById('empty-cart');
    const cartFooter = document.getElementById('cart-footer');
    
    if (!cartItemsContainer) return;

    if (state.cartItems.length === 0) {
        if (emptyCart) emptyCart.style.display = 'block';
        if (cartFooter) cartFooter.style.display = 'none';
        cartItemsContainer.innerHTML = '';
        return;
    }

    if (emptyCart) emptyCart.style.display = 'none';
    if (cartFooter) cartFooter.style.display = 'block';

    let total = 0;
    let html = '';

    state.cartItems.forEach(item => {
        total += item.price * item.quantity;
        html += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div style="flex: 1;">
                    <h4 style="font-size: 0.875rem; font-weight: 600; margin-bottom: 0.25rem;">${item.name}</h4>
                    <p style="font-size: 0.875rem; color: var(--muted-foreground);">${item.brand}</p>
                    <p style="font-size: 1rem; font-weight: bold; color: var(--primary); margin-top: 0.5rem;">${item.price.toFixed(2)}€</p>
                </div>
                <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem; border: 1px solid var(--border); border-radius: 0.375rem; padding: 0.25rem;">
                        <button onclick="updateQuantity('${item.id}', -1)" class="btn-icon" style="padding: 0.25rem 0.5rem;">-</button>
                        <span style="min-width: 30px; text-align: center;">${item.quantity}</span>
                        <button onclick="updateQuantity('${item.id}', 1)" class="btn-icon" style="padding: 0.25rem 0.5rem;">+</button>
                    </div>
                    <button onclick="removeFromCart('${item.id}')" style="color: #ef4444; font-size: 0.75rem; background: none; border: none; cursor: pointer;">Supprimer</button>
                </div>
            </div>
        `;
    });

    cartItemsContainer.innerHTML = html;
    if (cartTotal) cartTotal.textContent = `${total.toFixed(2)}€`;
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const count = state.cartItems.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = count;
        cartCount.style.display = count > 0 ? 'flex' : 'none';
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(state.cartItems));
}

// Trust Bar Carousel (Mobile)
function startTrustBarCarousel() {
    const trustSlides = ['price', 'shipping', 'returns'];
    
    setInterval(() => {
        state.currentTrustSlide = (state.currentTrustSlide + 1) % trustSlides.length;
        updateTrustBarMobile();
    }, 4000);
}

function updateTrustBarMobile() {
    const mobileSlide = document.getElementById('trust-mobile-slide');
    if (!mobileSlide) return;

    const slides = {
        0: `
            <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem;">
                <span style="font-size: 1.25rem; color: #305CDE; font-weight: bold;">€</span>
                <span style="font-weight: 500;">Meilleur prix garanti</span>
            </div>
        `,
        1: `
            <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem;">
                <svg style="width: 1.5rem; height: 1.5rem; color: #305CDE;" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                </svg>
                <span style="font-weight: 500;">Livraison express 24h</span>
            </div>
        `,
        2: `
            <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem;">
                <svg style="width: 1.25rem; height: 1.25rem; color: #305CDE;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <span style="font-weight: 500;">Retours gratuits 30 jours</span>
            </div>
        `
    };

    mobileSlide.style.opacity = '0';
    setTimeout(() => {
        mobileSlide.innerHTML = slides[state.currentTrustSlide];
        mobileSlide.style.opacity = '1';
    }, 300);
}

// Trust Popup Toggle
function toggleTrustPopup(popupId) {
    const popup = document.getElementById(`trust-popup-${popupId}`);
    if (!popup) return;

    const isActive = popup.classList.contains('active');
    
    closeAllTrustPopups();
    
    if (!isActive) {
        popup.classList.add('active');
        state.activeTrustInfo = popupId;
    }
}

function closeAllTrustPopups() {
    document.querySelectorAll('.trust-popup').forEach(popup => {
        popup.classList.remove('active');
    });
    state.activeTrustInfo = null;
}

// Product Carousel
function startProductCarousel() {
    const carousel = document.getElementById('product-carousel');
    if (!carousel) return;

    let currentIndex = 0;
    const slides = carousel.querySelectorAll('.carousel-slide');
    const dotsContainer = document.getElementById('carousel-dots');

    if (slides.length === 0) return;

    // Auto-rotate carousel
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel(currentIndex);
    }, 5000);

    // Update dots
    function updateCarousel(index) {
        const track = carousel.querySelector('.carousel-track');
        if (track) {
            track.style.transform = `translateX(-${index * (100 / 3)}%)`;
        }
        
        const dots = dotsContainer?.querySelectorAll('.carousel-dot');
        if (dots) {
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }
    }
}

// Scroll Reveal Animation
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
}

// Chatbot Toggle
function toggleChatbot() {
    state.chatbotOpen = !state.chatbotOpen;
    const chatWindow = document.getElementById('chatbot-window');
    
    if (chatWindow) {
        chatWindow.classList.toggle('open', state.chatbotOpen);
    }
}

// Toast Notification
function showToast(message, duration = 3000) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        background: #1f2937;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        z-index: 10001;
        animation: slideInUp 0.3s ease-out;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, duration);
}

// Navigation
function navigateTo(page) {
    // Store current page
    state.currentPage = page;
    
    // In a full implementation, this would change which page is displayed
    // For now, we'll just scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Close mobile menu if open
    if (state.mobileMenuOpen) {
        toggleMobileMenu();
    }
}

// Search functionality
function handleSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        const query = searchInput.value;
        showToast(`Recherche: ${query}`);
        // Implement actual search logic here
    }
}

// Form submission
function handleContactForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    showToast('Message envoyé avec succès!');
    e.target.reset();
}

// Image lazy loading
function setupLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Keyboard accessibility
document.addEventListener('keydown', function(e) {
    // Escape key closes modals
    if (e.key === 'Escape') {
        closeCart();
        if (state.chatbotOpen) toggleChatbot();
        closeAllTrustPopups();
    }
});

// Add animation keyframes dynamically
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translate(-50%, 20px);
        }
        to {
            opacity: 1;
            transform: translate(-50%, 0);
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    .cart-drawer {
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
`;
document.head.appendChild(styleSheet);

// Export functions to global scope for onclick handlers
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.navigateTo = navigateTo;
window.toggleChatbot = toggleChatbot;
window.handleSearch = handleSearch;
window.handleContactForm = handleContactForm;
