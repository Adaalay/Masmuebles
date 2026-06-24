/**
 * MAAS Muebles - Frontend Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       PRODUCT DATABASE (for search and quick view)
       ========================================================================== */
    const productsData = [
        {
            id: 1,
            name: "Paoli Ejecutivo",
            price: 6999,
            img: "imagenes/oficina.png",
            imgStyle: "",
            categories: ["oficina", "premium"],
            desc: "Nuestra silla estrella de la línea de oficina. Cuenta con soporte lumbar ajustable 3D, cabecera regulable en altura y ángulo, coderas 4D acolchadas y pistón de gas clase 4 de alta resistencia. Respaldo en malla premium transpirable y asiento tapizado en piel de alta calidad.",
            options: ["Negro", "Gris", "Rojo"],
            sku: "OHE-505"
        },
        {
            id: 2,
            name: "Paoli Visitante",
            price: 4999,
            img: "imagenes/oficina.png",
            imgStyle: "filter: hue-rotate(15deg);",
            categories: ["oficina", "premium"],
            desc: "Silla de visita premium a juego con el diseño Paoli Ejecutivo. Estructura tipo trineo en acero cromado de alto calibre. Respaldo de malla transpirable ergonómica, coderas fijas con almohadilla suave y asiento con espuma inyectada de alta densidad.",
            options: ["Negro", "Gris"],
            sku: "OHV-508"
        },
        {
            id: 3,
            name: "Alufsen Ejecutivo",
            price: 7999,
            img: "imagenes/oficina.png",
            imgStyle: "filter: brightness(0.9) contrast(1.1);",
            categories: ["oficina"],
            desc: "Diseño vanguardista y ergonomía avanzada. La silla Alufsen Ejecutivo incluye mecanismo synchro multiposiciones con slide de asiento, soporte lumbar dinámico auto-ajustable y coderas ajustables en altura. Base de aluminio pulido y ruedas de poliuretano de alta rodabilidad.",
            options: ["Negro", "Azul"],
            sku: "OHE-405"
        },
        {
            id: 4,
            name: "Alufsen Visitante",
            price: 5399,
            img: "imagenes/oficina.png",
            imgStyle: "filter: hue-rotate(200deg);",
            categories: ["oficina"],
            desc: "Silla visitante de diseño elegante para salas de juntas o recepción. Patas de 4 puntos en acero reforzado con acabado en pintura electrostática negra. Estructura ergonómica de soporte lumbar y asiento tapizado en tela premium de alta fricción.",
            options: ["Negro", "Blanco"],
            sku: "OHV-408"
        },
        {
            id: 5,
            name: "Silla Contract Nord",
            price: 2490,
            img: "imagenes/interior.png",
            categories: ["interior"],
            desc: "Silla de diseño nórdico minimalista ideal para interiores, comedores o restaurantes de concepto moderno. Monocasco de polipropileno de alta resistencia con cojín tapizado en vinil. Patas de madera de haya natural con estructura de soporte metálica oculta.",
            options: ["Madera", "Blanco"],
            sku: "CTR-206"
        },
        {
            id: 6,
            name: "Silla Gamer Orion",
            price: 4790,
            img: "imagenes/gamer.png",
            imgStyle: "",
            categories: ["gamer"],
            desc: "Silla gaming diseñada para largas sesiones de juego u oficina. Respaldo reclinable hasta 180 grados, cojín lumbar y cervical removibles, y coderas con ajuste de altura. Tapizado en piel sintética fácil de limpiar con costuras de alta resistencia.",
            options: ["Rojo", "Azul"],
            sku: "GMR-777"
        },
        {
            id: 7,
            name: "Banco Alto Bar",
            price: 1890,
            img: "imagenes/interior.png",
            imgStyle: "filter: hue-rotate(90deg) brightness(0.9);",
            categories: ["interior"],
            desc: "Banco alto de bar/barra de cocina con diseño minimalista de madera. Asiento ergonómico tapizado en tela resistente con reposapiés metálico en acabado negro mate. Excelente estabilidad y elegancia para comedores modernos.",
            options: ["Madera", "Gris"],
            sku: "CTR-301"
        },
        {
            id: 8,
            name: "Silla Evento Metal",
            price: 850,
            img: "imagenes/exterior.png",
            imgStyle: "filter: grayscale(1) brightness(0.8);",
            categories: ["exterior"],
            desc: "Silla plegable de metal súper resistente para eventos en exteriores o interiores. Estructura de tubo de acero reforzado y asiento/respaldo de plástico soplado de alta densidad. Protección UV y diseño apilable.",
            options: ["Blanco", "Negro"],
            sku: "EXT-102"
        },
        {
            id: 9,
            name: "Silla Visitante Exterior",
            price: 1250,
            img: "imagenes/exterior.png",
            imgStyle: "",
            categories: ["exterior"],
            desc: "Silla de jardín y terraza fabricada en polipropileno inyectado con fibra de vidrio para máxima durabilidad ante el sol y la lluvia. Diseño moderno, ergonómico y apilable para ahorrar espacio.",
            options: ["Azul", "Blanco", "Negro"],
            sku: "EXT-205"
        },
        {
            id: 10,
            name: "Banca Lobby Tres",
            price: 4200,
            img: "imagenes/interior.png",
            imgStyle: "filter: hue-rotate(240deg) contrast(1.2);",
            categories: ["bancas"],
            desc: "Banca de recepción para lobby o sala de espera de 3 plazas. Estructura de acero cromado perforado de alta resistencia con soportes laterales ergonómicos y niveladores de piso ajustables.",
            options: ["Gris"],
            sku: "BNC-003"
        },
        {
            id: 11,
            name: "Silla Industrial Heavy",
            price: 3100,
            img: "imagenes/oficina.png",
            imgStyle: "filter: grayscale(1) contrast(1.3);",
            categories: ["industriales"],
            desc: "Silla alta para laboratorio o taller industrial. Asiento y respaldo en poliuretano resistente a químicos e impactos. Aro reposapiés ajustable en altura y base de estrella con rodajas de alta duración.",
            options: ["Negro"],
            sku: "IND-808"
        },
        {
            id: 12,
            name: "Silla Gamer Pro Max",
            price: 6200,
            img: "imagenes/gamer.png",
            imgStyle: "filter: hue-rotate(180deg);",
            categories: ["gamer", "premium"],
            desc: "Edición premium de la silla gamer Orion. Cuenta con reposapiernas retráctil integrado, cojines de espuma viscoelástica (memory foam) con soporte cervical magnético y tapizado en ecopiel microperforada transpirable.",
            options: ["Azul", "Rojo", "Negro"],
            sku: "GMR-999"
        }
    ];

    /* ==========================================================================
       SHOPPING CART STATE
       ========================================================================== */
    let cart = [];

    // Load cart from localStorage
    if (localStorage.getItem('maas_cart')) {
        try {
            cart = JSON.parse(localStorage.getItem('maas_cart'));
        } catch (e) {
            cart = [];
        }
    }

    /* ==========================================================================
       DOM ELEMENTS SELECTORS
       ========================================================================== */
    // Header
    const header = document.querySelector('.main-header');
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    const dropdownSubmenuToggles = document.querySelectorAll('.dropdown-submenu > a');

    // Cart Drawer
    const cartTrigger = document.getElementById('cart-trigger');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartClose = document.getElementById('cart-close');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartCount = document.getElementById('cart-count');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartDrawerSubtotal = document.getElementById('cart-drawer-subtotal');
    const clearCartBtn = document.getElementById('clear-cart-btn');
    const checkoutBtn = document.getElementById('checkout-btn');

    // Search Modal
    const searchTrigger = document.getElementById('search-trigger');
    const searchModal = document.getElementById('search-modal');
    const searchClose = document.getElementById('search-close');
    const searchInput = document.getElementById('search-input');
    const searchResultsContainer = document.getElementById('search-results-container');
    const searchForm = document.getElementById('search-modal-form');

    // Hero Slider
    const slides = document.querySelectorAll('.slide');
    const prevArrow = document.getElementById('slider-prev');
    const nextArrow = document.getElementById('slider-next');
    const dotsContainer = document.getElementById('slider-dots');

    // Product Filters
    const filterTabs = document.querySelectorAll('.filter-tab');
    const productCards = document.querySelectorAll('.product-card');

    // Quick View Modal
    const quickViewModal = document.getElementById('quick-view-modal');
    const quickViewClose = document.getElementById('quick-view-close');
    const quickViewCloseOverlay = document.getElementById('quick-view-close-overlay');
    const quickViewBody = document.getElementById('quick-view-body');

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    // Quick Link Premium
    const filterPremiumTriggers = document.querySelectorAll('.filter-premium-trigger, .footer-cat-link');

    /* ==========================================================================
       STICKY NAV
       ========================================================================== */
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    /* ==========================================================================
       MOBILE NAVIGATION
       ========================================================================== */
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
    }

    // Toggle dropdowns in mobile mode
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const parent = toggle.parentElement;
                parent.classList.toggle('active');
            }
        });
    });

    dropdownSubmenuToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const parent = toggle.parentElement;
                parent.classList.toggle('active');
            }
        });
    });

    /* ==========================================================================
       HERO CAROUSEL / SLIDER
       ========================================================================== */
    let currentSlide = 0;
    let slideInterval;
    const intervalTime = 5000;

    function initSlider() {
        if (slides.length === 0) return;

        // Generate dots dynamically
        slides.forEach((_, idx) => {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            if (idx === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(idx));
            dotsContainer.appendChild(dot);
        });

        startSlideShow();

        // Control click listeners
        prevArrow.addEventListener('click', () => {
            prevSlide();
            resetSlideShow();
        });
        nextArrow.addEventListener('click', () => {
            nextSlide();
            resetSlideShow();
        });

        // Pause on Hover
        const heroSection = document.querySelector('.hero-slider');
        heroSection.addEventListener('mouseenter', stopSlideShow);
        heroSection.addEventListener('mouseleave', startSlideShow);
    }

    function updateSlidePosition() {
        slides.forEach((slide, idx) => {
            slide.classList.remove('active');
            if (idx === currentSlide) {
                slide.classList.add('active');
            }
        });

        // Update dots
        const dots = dotsContainer.querySelectorAll('.slider-dot');
        dots.forEach((dot, idx) => {
            dot.classList.remove('active');
            if (idx === currentSlide) {
                dot.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlidePosition();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlidePosition();
    }

    function goToSlide(idx) {
        currentSlide = idx;
        updateSlidePosition();
        resetSlideShow();
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    function resetSlideShow() {
        stopSlideShow();
        startSlideShow();
    }

    initSlider();

    /* ==========================================================================
       CART DRAWER LOGIC
       ========================================================================== */
    function saveCart() {
        localStorage.setItem('maas_cart', JSON.stringify(cart));
        renderCart();
    }

    function renderCart() {
        if (!cartItemsContainer) return;

        // Update counts
        const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
        const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

        // Update labels
        cartCount.textContent = totalItems;
        const formattedPrice = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(totalPrice);
        cartSubtotal.textContent = formattedPrice + " MXN";
        cartDrawerSubtotal.textContent = formattedPrice + " MXN";

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart-msg">
                    <i class="fas fa-shopping-basket"></i>
                    <p>Tu carrito está vacío.</p>
                    <a href="#productos" class="btn btn-primary btn-sm close-drawer-action">Explorar catálogo</a>
                </div>
            `;
            // Re-attach close event to the CTA inside empty cart
            const closeCta = cartItemsContainer.querySelector('.close-drawer-action');
            if (closeCta) {
                closeCta.addEventListener('click', () => toggleCart(false));
            }
            return;
        }

        // Generate cart items HTML
        let html = '';
        cart.forEach(item => {
            const itemTotal = item.price * item.qty;
            const formattedItemTotal = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(itemTotal);
            
            // Apply product filter styles if any
            let imageStyle = '';
            const matchingProduct = productsData.find(p => p.id === item.id);
            if (matchingProduct && matchingProduct.imgStyle) {
                imageStyle = matchingProduct.imgStyle;
            }

            html += `
                <div class="cart-item" data-id="${item.id}" data-color="${item.color}">
                    <img src="${item.img}" alt="${item.name}" class="cart-item-img" style="${imageStyle}">
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <div class="cart-item-color">Color: ${item.color}</div>
                        <div class="cart-item-qty-selector">
                            <button class="qty-btn minus-qty" aria-label="Disminuir cantidad"><i class="fas fa-minus"></i></button>
                            <span class="qty-val">${item.qty}</span>
                            <button class="qty-btn plus-qty" aria-label="Aumentar cantidad"><i class="fas fa-plus"></i></button>
                        </div>
                    </div>
                    <div class="cart-item-price-col">
                        <span class="cart-item-price">${formattedItemTotal}</span>
                        <button class="remove-item-btn" aria-label="Eliminar artículo"><i class="far fa-trash-alt"></i></button>
                    </div>
                </div>
            `;
        });

        cartItemsContainer.innerHTML = html;

        // Attach event listeners to newly generated items
        const items = cartItemsContainer.querySelectorAll('.cart-item');
        items.forEach(itemEl => {
            const id = parseInt(itemEl.dataset.id);
            const color = itemEl.dataset.color;

            // Plus
            itemEl.querySelector('.plus-qty').addEventListener('click', () => {
                updateQty(id, color, 1);
            });

            // Minus
            itemEl.querySelector('.minus-qty').addEventListener('click', () => {
                updateQty(id, color, -1);
            });

            // Remove
            itemEl.querySelector('.remove-item-btn').addEventListener('click', () => {
                removeFromCart(id, color);
            });
        });
    }

    function toggleCart(forceState = null) {
        if (forceState !== null) {
            if (forceState) cartDrawer.classList.add('active');
            else cartDrawer.classList.remove('active');
        } else {
            cartDrawer.classList.toggle('active');
        }
    }

    function addToCart(id, name, price, img, color, qty = 1) {
        const existingItem = cart.find(item => item.id === id && item.color === color);
        if (existingItem) {
            existingItem.qty += qty;
        } else {
            cart.push({ id, name, price, img, color, qty });
        }
        saveCart();
        toggleCart(true); // Open drawer on addition
    }

    function removeFromCart(id, color) {
        cart = cart.filter(item => !(item.id === id && item.color === color));
        saveCart();
    }

    function updateQty(id, color, delta) {
        const item = cart.find(item => item.id === id && item.color === color);
        if (item) {
            item.qty += delta;
            if (item.qty <= 0) {
                removeFromCart(id, color);
            } else {
                saveCart();
            }
        }
    }

    function clearCart() {
        cart = [];
        saveCart();
    }

    // Toggle Listeners
    if (cartTrigger) cartTrigger.addEventListener('click', () => toggleCart(true));
    if (cartClose) cartClose.addEventListener('click', () => toggleCart(false));
    if (cartOverlay) cartOverlay.addEventListener('click', () => toggleCart(false));

    // Clear cart listener
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', () => {
            if (confirm('¿Estás seguro de que deseas vaciar tu carrito?')) {
                clearCart();
            }
        });
    }

    // Checkout Simulated Listener
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            alert('¡Gracias por tu compra! Tu pedido simulado ha sido recibido. Nos comunicaremos contigo a la brevedad para coordinar la entrega y el pago.');
            clearCart();
            toggleCart(false);
        });
    }

    // Add to cart from product list cards
    document.querySelectorAll('.product-card').forEach(card => {
        const id = parseInt(card.dataset.id);
        const name = card.dataset.name;
        const price = parseFloat(card.dataset.price);
        const img = card.dataset.img;

        // Color swatches functionality
        const swatches = card.querySelectorAll('.swatch');
        let activeColor = 'Negro'; // Default
        const activeSwatch = card.querySelector('.swatch.active');
        if (activeSwatch) {
            activeColor = activeSwatch.dataset.color;
        }

        swatches.forEach(swatch => {
            swatch.addEventListener('click', () => {
                swatches.forEach(s => s.classList.remove('active'));
                swatch.classList.add('active');
                activeColor = swatch.dataset.color;
            });
        });

        // Add to Cart Button (Hover overlay actions)
        const addToCartBtn = card.querySelector('.add-to-cart-btn');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(id, name, price, img, activeColor);
            });
        }

        // Buy now button (Card footer)
        const buyNowBtn = card.querySelector('.buy-now');
        if (buyNowBtn) {
            buyNowBtn.addEventListener('click', () => {
                addToCart(id, name, price, img, activeColor);
            });
        }

        // Quick View button
        const quickViewBtn = card.querySelector('.quick-view-btn');
        if (quickViewBtn) {
            quickViewBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                openQuickView(id);
            });
        }
    });

    // Initialize Cart View on Load
    renderCart();

    /* ==========================================================================
       PRODUCT CATEGORY FILTERS
       ========================================================================== */
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const filterValue = tab.dataset.filter;

            productCards.forEach(card => {
                const categories = card.dataset.category.split(' ');
                
                if (filterValue === 'all' || categories.includes(filterValue)) {
                    card.style.display = 'flex';
                    // Trigger reflow for fade in
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transition = 'opacity 0.4s ease-out';
                    }, 50);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Handle Quick filters from other parts of the site (footer, categories cards)
    function applyGlobalCategoryFilter(catName) {
        const tab = Array.from(filterTabs).find(t => t.dataset.filter === catName);
        if (tab) {
            tab.click();
            // Scroll to products
            const productsSec = document.getElementById('productos');
            if (productsSec) {
                productsSec.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    // Footers / Categories card click listeners
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const cat = card.dataset.category;
            applyGlobalCategoryFilter(cat);
        });
    });

    filterPremiumTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            const cat = trigger.dataset.cat || 'premium';
            // If the element has no dataset cat, default to premium
            applyGlobalCategoryFilter(cat);
        });
    });

    /* ==========================================================================
       SEARCH MODAL & SEARCH FUNCTIONALITY
       ========================================================================== */
    function toggleSearch(open) {
        if (open) {
            searchModal.classList.add('active');
            setTimeout(() => searchInput.focus(), 300);
        } else {
            searchModal.classList.remove('active');
            searchInput.value = '';
            searchResultsContainer.innerHTML = '';
        }
    }

    if (searchTrigger) searchTrigger.addEventListener('click', () => toggleSearch(true));
    if (searchClose) searchClose.addEventListener('click', () => toggleSearch(false));

    // Close on Escape Key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            toggleSearch(false);
            toggleCart(false);
            closeQuickViewModal();
        }
    });

    // Handle Live Typing in Search
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase().trim();
            if (query.length === 0) {
                searchResultsContainer.innerHTML = '';
                return;
            }

            const results = productsData.filter(product => 
                product.name.toLowerCase().includes(query) || 
                product.desc.toLowerCase().includes(query)
            );

            if (results.length === 0) {
                searchResultsContainer.innerHTML = `<p style="color: rgba(255,255,255,0.6); text-align: center;">No se encontraron resultados para "${query}".</p>`;
                return;
            }

            let html = '';
            results.forEach(product => {
                const priceFormatted = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(product.price);
                html += `
                    <div class="search-result-item" data-id="${product.id}">
                        <img src="${product.img}" alt="${product.name}" class="search-result-img" style="${product.imgStyle || ''}">
                        <div class="search-result-info">
                            <h4>${product.name}</h4>
                            <p>${priceFormatted} MXN</p>
                        </div>
                    </div>
                `;
            });

            searchResultsContainer.innerHTML = html;

            // Click results to open Quick View
            searchResultsContainer.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', () => {
                    const id = parseInt(item.dataset.id);
                    toggleSearch(false);
                    openQuickView(id);
                });
            });
        });
    }

    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
        });
    }

    /* ==========================================================================
       QUICK VIEW MODAL LOGIC
       ========================================================================== */
    function openQuickView(id) {
        const product = productsData.find(p => p.id === id);
        if (!product) return;

        const formattedPrice = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(product.price);

        // Generate swatches HTML
        let swatchesHtml = '';
        product.options.forEach((color, idx) => {
            // Map color name to CSS swatch class name
            let swatchColorClass = 'color-black';
            const colorLower = color.toLowerCase();
            if (colorLower.includes('gris')) swatchColorClass = 'color-gray';
            else if (colorLower.includes('rojo')) swatchColorClass = 'color-red';
            else if (colorLower.includes('azul')) swatchColorClass = 'color-blue';
            else if (colorLower.includes('blanco')) swatchColorClass = 'color-white';
            else if (colorLower.includes('madera')) swatchColorClass = 'color-wood';

            swatchesHtml += `
                <span class="swatch ${swatchColorClass} ${idx === 0 ? 'active' : ''}" data-color="${color}" title="${color}"></span>
            `;
        });

        quickViewBody.innerHTML = `
            <div class="qv-image-side">
                <img src="${product.img}" alt="${product.name}" id="qv-img-element" style="${product.imgStyle || ''}">
            </div>
            <div class="qv-info-side">
                <h3 class="qv-title">${product.name}</h3>
                <div class="qv-price">${formattedPrice} <span class="currency" style="font-size:0.9rem; color:var(--text-muted);">MXN</span></div>
                <p class="qv-desc">${product.desc}</p>
                
                <div class="qv-meta">
                    <div class="qv-meta-row">
                        <span class="qv-meta-label">SKU:</span>
                        <span class="qv-meta-value">${product.sku}</span>
                    </div>
                    <div class="qv-meta-row">
                        <span class="qv-meta-label">Categoría:</span>
                        <span class="qv-meta-value" style="text-transform: capitalize;">${product.categories.join(', ')}</span>
                    </div>
                    <div class="qv-meta-row">
                        <span class="qv-meta-label">Color:</span>
                        <div class="swatches" id="qv-swatches-container">
                            ${swatchesHtml}
                        </div>
                    </div>
                </div>

                <div class="qv-qty-add-row">
                    <div class="qv-qty-selector">
                        <button class="qv-qty-btn" id="qv-minus-btn" aria-label="Reducir cantidad"><i class="fas fa-minus"></i></button>
                        <span class="qv-qty-val" id="qv-qty-val-el">1</span>
                        <button class="qv-qty-btn" id="qv-plus-btn" aria-label="Aumentar cantidad"><i class="fas fa-plus"></i></button>
                    </div>
                    <button class="btn btn-primary" id="qv-add-to-cart-action">Añadir al Carrito</button>
                </div>
            </div>
        `;

        // Handle swatches inside Quick View
        const qvSwatches = quickViewBody.querySelectorAll('.swatch');
        let selectedColor = product.options[0];
        
        qvSwatches.forEach(swatch => {
            swatch.addEventListener('click', () => {
                qvSwatches.forEach(s => s.classList.remove('active'));
                swatch.classList.add('active');
                selectedColor = swatch.dataset.color;
            });
        });

        // Handle Qty Inside Quick View
        let qvQty = 1;
        const qtyValEl = document.getElementById('qv-qty-val-el');
        
        document.getElementById('qv-plus-btn').addEventListener('click', () => {
            qvQty++;
            qtyValEl.textContent = qvQty;
        });

        document.getElementById('qv-minus-btn').addEventListener('click', () => {
            if (qvQty > 1) {
                qvQty--;
                qtyValEl.textContent = qvQty;
            }
        });

        // Handle Add to Cart action inside Quick View
        document.getElementById('qv-add-to-cart-action').addEventListener('click', () => {
            addToCart(product.id, product.name, product.price, product.img, selectedColor, qvQty);
            closeQuickViewModal();
        });

        quickViewModal.classList.add('active');
    }

    function closeQuickViewModal() {
        quickViewModal.classList.remove('active');
    }

    if (quickViewClose) quickViewClose.addEventListener('click', closeQuickViewModal);
    if (quickViewCloseOverlay) quickViewCloseOverlay.addEventListener('click', closeQuickViewModal);

    /* ==========================================================================
       CONTACT FORM VALIDATION
       ========================================================================== */
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Clear previous feedback
            formFeedback.className = 'form-feedback';
            formFeedback.textContent = '';

            const name = document.getElementById('contact-name').value.trim();
            const whatsapp = document.getElementById('contact-whatsapp').value.trim();
            const email = document.getElementById('contact-email').value.trim();
            const message = document.getElementById('contact-message').value.trim();

            if (name.length < 3) {
                formFeedback.classList.add('error');
                formFeedback.textContent = 'Por favor ingresa un nombre válido (mínimo 3 caracteres).';
                return;
            }

            if (whatsapp && !/^[0-9]{10}$/.test(whatsapp)) {
                formFeedback.classList.add('error');
                formFeedback.textContent = 'Por favor ingresa un número de WhatsApp válido de 10 dígitos.';
                return;
            }

            // Simulated form submission loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = 'Enviando mensaje...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
                
                // Show success
                formFeedback.classList.add('success');
                formFeedback.textContent = '¡Mensaje enviado con éxito! Un asesor de MAAS Muebles se pondrá en contacto contigo a la brevedad por WhatsApp o Correo.';
                
                // Reset form
                contactForm.reset();
            }, 1500);
    }

    /* ==========================================================================
       CATALOG FILTERING & SORTING LOGIC (productos.html)
       ========================================================================== */
    const isCatalogPage = document.body.id === 'catalog-page';

    if (isCatalogPage) {
        // Elements
        const catalogGrid = document.getElementById('catalog-grid');
        const sidebarSearchInput = document.getElementById('sidebar-search-input');
        const categoryRadios = document.querySelectorAll('input[name="category-filter"]');
        const priceRangeSlider = document.getElementById('price-range-slider');
        const priceRangeVal = document.getElementById('price-range-val');
        const colorFilterContainer = document.getElementById('color-filter-container');
        const btnClearFilters = document.getElementById('btn-clear-filters');
        const resultsCountEl = document.getElementById('results-count');
        const sortSelect = document.getElementById('sort-select');

        // State
        let catFilter = 'all';
        let priceFilter = 10000;
        let colorFilter = 'all';
        let searchFilter = '';
        let sortOrder = 'relevance';

        // Read URL query parameters on load
        const urlParams = new URLSearchParams(window.location.search);
        const urlCat = urlParams.get('cat');
        if (urlCat) {
            catFilter = urlCat.toLowerCase();
            const matchingRadio = Array.from(categoryRadios).find(r => r.value === catFilter);
            if (matchingRadio) {
                matchingRadio.checked = true;
            }
        }

        // Initialize Catalog
        filterCatalog();

        // Event Listeners
        // 1. Sidebar search
        if (sidebarSearchInput) {
            sidebarSearchInput.addEventListener('input', () => {
                searchFilter = sidebarSearchInput.value.toLowerCase().trim();
                filterCatalog();
            });
        }

        // 2. Category selection
        categoryRadios.forEach(radio => {
            radio.addEventListener('change', () => {
                if (radio.checked) {
                    catFilter = radio.value;
                    filterCatalog();
                }
            });
        });

        // 3. Price slider
        if (priceRangeSlider) {
            priceRangeSlider.addEventListener('input', () => {
                priceFilter = parseInt(priceRangeSlider.value);
                const formattedPrice = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(priceFilter);
                priceRangeVal.textContent = formattedPrice;
                filterCatalog();
            });
        }

        // 4. Color buttons
        if (colorFilterContainer) {
            const colorButtons = colorFilterContainer.querySelectorAll('.color-filter-btn');
            colorButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    colorButtons.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    colorFilter = btn.dataset.color;
                    filterCatalog();
                });
            });
        }

        // 5. Sort selector
        if (sortSelect) {
            sortSelect.addEventListener('change', () => {
                sortOrder = sortSelect.value;
                filterCatalog();
            });
        }

        // 6. Clear filters
        if (btnClearFilters) {
            btnClearFilters.addEventListener('click', () => {
                // Reset State
                catFilter = 'all';
                priceFilter = 10000;
                colorFilter = 'all';
                searchFilter = '';
                sortOrder = 'relevance';

                // Reset Inputs
                if (sidebarSearchInput) sidebarSearchInput.value = '';
                categoryRadios.forEach(r => r.checked = r.value === 'all');
                if (priceRangeSlider) {
                    priceRangeSlider.value = 10000;
                    priceRangeVal.textContent = '$10,000.00';
                }
                if (colorFilterContainer) {
                    colorFilterContainer.querySelectorAll('.color-filter-btn').forEach(b => b.classList.remove('active'));
                    colorFilterContainer.querySelector('.color-all').classList.add('active');
                }
                if (sortSelect) sortSelect.value = 'relevance';

                // Filter
                filterCatalog();
            });
        }

        // Core filter and sort function
        function filterCatalog() {
            // A. Filter products list
            let filtered = productsData.filter(product => {
                // Category matching
                let catMatch = false;
                if (catFilter === 'all') {
                    catMatch = true;
                } else if (catFilter === 'premium') {
                    catMatch = product.categories.includes('premium');
                } else {
                    catMatch = product.categories.includes(catFilter);
                }

                // Price matching
                const priceMatch = product.price <= priceFilter;

                // Color matching
                let colorMatch = false;
                if (colorFilter === 'all') {
                    colorMatch = true;
                } else {
                    colorMatch = product.options.some(c => c.toLowerCase().includes(colorFilter.toLowerCase()));
                }

                // Search query matching
                let searchMatch = true;
                if (searchFilter !== '') {
                    searchMatch = product.name.toLowerCase().includes(searchFilter) || 
                                  product.desc.toLowerCase().includes(searchFilter);
                }

                return catMatch && priceMatch && colorMatch && searchMatch;
            });

            // B. Sort products list
            if (sortOrder === 'price-low') {
                filtered.sort((a, b) => a.price - b.price);
            } else if (sortOrder === 'price-high') {
                filtered.sort((a, b) => b.price - a.price);
            } else if (sortOrder === 'name-asc') {
                filtered.sort((a, b) => a.name.localeCompare(b.name));
            }

            // C. Update results count label
            if (resultsCountEl) {
                resultsCountEl.textContent = `Mostrando ${filtered.length} productos`;
            }

            // D. Render Grid
            if (filtered.length === 0) {
                catalogGrid.innerHTML = `
                    <div class="empty-catalog-msg" style="grid-column: 1/-1; text-align: center; padding: 60px 0; color: var(--text-muted);">
                        <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 20px; color: var(--border-color);"></i>
                        <h3>No encontramos productos</h3>
                        <p style="margin-top: 10px;">Intenta ajustando los criterios de los filtros o buscando otro término.</p>
                    </div>
                `;
                return;
            }

            let gridHtml = '';
            filtered.forEach(product => {
                const formattedPrice = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(product.price);
                const isPremium = product.categories.includes('premium');
                const isSale = product.id === 6; // Gamer chair or similar is on sale
                
                let badgeHtml = '';
                if (isPremium) {
                    badgeHtml = `<span class="badge badge-premium">Premium</span>`;
                } else if (isSale) {
                    badgeHtml = `<span class="badge badge-sale">Oferta</span>`;
                }

                let swatchesHtml = '';
                product.options.forEach((color, idx) => {
                    let swatchColorClass = 'color-black';
                    const colorLower = color.toLowerCase();
                    if (colorLower.includes('gris')) swatchColorClass = 'color-gray';
                    else if (colorLower.includes('rojo')) swatchColorClass = 'color-red';
                    else if (colorLower.includes('azul')) swatchColorClass = 'color-blue';
                    else if (colorLower.includes('blanco')) swatchColorClass = 'color-white';
                    else if (colorLower.includes('madera')) swatchColorClass = 'color-wood';

                    swatchesHtml += `
                        <span class="swatch ${swatchColorClass} ${idx === 0 ? 'active' : ''}" data-color="${color}" title="${color}"></span>
                    `;
                });

                gridHtml += `
                    <div class="product-card" data-id="${product.id}">
                        ${badgeHtml}
                        <div class="product-image-wrapper">
                            <img src="${product.img}" alt="${product.name}" class="product-img" style="${product.imgStyle || ''}">
                            <div class="product-actions">
                                <button class="action-btn quick-view-btn" aria-label="Vista rápida"><i class="fas fa-eye"></i></button>
                                <button class="action-btn add-to-cart-btn" aria-label="Añadir al carrito"><i class="fas fa-shopping-basket"></i></button>
                            </div>
                        </div>
                        <div class="product-info">
                            <h3 class="product-name">${product.name}</h3>
                            <div class="swatches">
                                ${swatchesHtml}
                            </div>
                            <div class="product-price-wrapper">
                                <span class="product-price">${formattedPrice} <span class="currency">MXN</span></span>
                            </div>
                            <button class="btn btn-outline btn-sm buy-now">Agregar al Carrito</button>
                        </div>
                    </div>
                `;
            });

            catalogGrid.innerHTML = gridHtml;

            // E. Re-attach action listeners to dynamically generated items
            const cardElements = catalogGrid.querySelectorAll('.product-card');
            cardElements.forEach(card => {
                const id = parseInt(card.dataset.id);
                const product = productsData.find(p => p.id === id);

                // Swatches selector
                const swatches = card.querySelectorAll('.swatch');
                let activeColor = product.options[0];

                swatches.forEach(swatch => {
                    swatch.addEventListener('click', (e) => {
                        e.stopPropagation();
                        swatches.forEach(s => s.classList.remove('active'));
                        swatch.classList.add('active');
                        activeColor = swatch.dataset.color;
                    });
                });

                // Add to cart buttons (Hover overlay action)
                const addToCartBtn = card.querySelector('.add-to-cart-btn');
                if (addToCartBtn) {
                    addToCartBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        addToCart(product.id, product.name, product.price, product.img, activeColor);
                    });
                }

                // Buy now (Footer button)
                const buyNowBtn = card.querySelector('.buy-now');
                if (buyNowBtn) {
                    buyNowBtn.addEventListener('click', () => {
                        addToCart(product.id, product.name, product.price, product.img, activeColor);
                    });
                }

                // Quick View
                const quickViewBtn = card.querySelector('.quick-view-btn');
                if (quickViewBtn) {
                    quickViewBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        openQuickView(id);
                    });
                }
            });
        }
    }
});
