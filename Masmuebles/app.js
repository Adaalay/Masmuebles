/* ============================================
   MAAS MUEBLES — App Logic
============================================ */

/* === PRODUCT DATA === */
const PRODUCTS = [
  {
    id: 1,
    name: 'Paoli Ejecutivo',
    category: 'oficina',
    material: 'piel',
    color: 'negro',
    price: 6999,
    badge: 'new',
    image: 'images/silla-ejecutiva.png',
    desc: 'Silla ejecutiva con respaldo alto, tapizado en piel sintética negra, base de aluminio y mecanismo reclinable. Ideal para largas jornadas de trabajo.',
    specs: { 'Altura del asiento': '44–56 cm', 'Capacidad': '120 kg', 'Material': 'Piel Sintética', 'Garantía': '1 año' },
  },
  {
    id: 2,
    name: 'Paoli Visitante',
    category: 'oficina',
    material: 'piel',
    color: 'negro',
    price: 4999,
    badge: null,
    image: 'images/silla-visitante.png',
    desc: 'Silla de visita tapizada en piel sintética, base fija de acero cromado. Perfecta para salas de espera y reuniones.',
    specs: { 'Tipo': 'Sin ruedas', 'Capacidad': '110 kg', 'Material': 'Piel Sintética', 'Garantía': '1 año' },
  },
  {
    id: 3,
    name: 'Alufsen Ejecutivo',
    category: 'oficina',
    material: 'malla',
    color: 'negro',
    price: 7999,
    badge: 'premium',
    image: 'images/silla-ejecutiva.png',
    desc: 'Silla ejecutiva premium con respaldo de malla ergonómica transpirable, apoyabrazos ajustables 4D y mecanismo basculante.',
    specs: { 'Altura del asiento': '45–57 cm', 'Capacidad': '130 kg', 'Material': 'Malla Ergonómica', 'Garantía': '2 años' },
  },
  {
    id: 4,
    name: 'Alufsen Visitante',
    category: 'oficina',
    material: 'tela',
    color: 'gris',
    price: 5399,
    badge: null,
    image: 'images/silla-visitante.png',
    desc: 'Silla de visita tapizada en tela premium gris, estructura de acero niquelado. Comodidad y elegancia para espacios profesionales.',
    specs: { 'Tipo': 'Sin ruedas', 'Capacidad': '110 kg', 'Material': 'Tela', 'Garantía': '1 año' },
  },
  {
    id: 5,
    name: 'Quantum Gamer Pro',
    category: 'gamer',
    material: 'piel',
    color: 'azul',
    price: 8499,
    badge: 'new',
    image: 'images/silla-gamer.png',
    desc: 'Silla gamer de alto rendimiento con diseño de competición, respaldo regulable 180°, apoyacabezas y cojín lumbar incluidos.',
    specs: { 'Altura del asiento': '42–52 cm', 'Capacidad': '150 kg', 'Material': 'Piel Sintética', 'Garantía': '1 año' },
  },
  {
    id: 6,
    name: 'Nexus Gamer Lite',
    category: 'gamer',
    material: 'tela',
    color: 'negro',
    price: 5999,
    badge: null,
    image: 'images/silla-gamer.png',
    desc: 'Silla gamer de entrada con tapizado en tela resistente, buena ventilación y soporte lumbar integrado.',
    specs: { 'Altura del asiento': '43–53 cm', 'Capacidad': '120 kg', 'Material': 'Tela', 'Garantía': '1 año' },
  },
  {
    id: 7,
    name: 'Soleil Exterior',
    category: 'exterior',
    material: 'plastico',
    color: 'naranja',
    price: 2199,
    badge: null,
    image: 'images/silla-exterior.png',
    desc: 'Silla de exterior apilable fabricada en polipropileno UV resistente, ideal para terrazas, jardines y espacios comerciales.',
    specs: { 'Material': 'Polipropileno UV', 'Capacidad': '100 kg', 'Apilable': 'Sí', 'Garantía': '1 año' },
  },
  {
    id: 8,
    name: 'Breeze Outdoor',
    category: 'exterior',
    material: 'metal',
    color: 'blanco',
    price: 3499,
    badge: null,
    image: 'images/silla-exterior.png',
    desc: 'Silla de acero galvanizado con acabado en polvo epóxico blanco. Resistente a la intemperie y de fácil limpieza.',
    specs: { 'Material': 'Acero Galvanizado', 'Capacidad': '120 kg', 'Apilable': 'No', 'Garantía': '2 años' },
  },
  {
    id: 9,
    name: 'Estudio Interior',
    category: 'interior',
    material: 'tela',
    color: 'gris',
    price: 4299,
    badge: null,
    image: 'images/silla-interior.png',
    desc: 'Sillón tapizado en tela de alta resistencia, espuma HR de alta densidad, estructura de madera maciza. Elegante y duradero.',
    specs: { 'Material': 'Tela / Madera', 'Capacidad': '100 kg', 'Tapizado': 'Tela HR', 'Garantía': '1 año' },
  },
  {
    id: 10,
    name: 'Nórdica Interior',
    category: 'interior',
    material: 'madera',
    color: 'cafe',
    price: 5199,
    badge: 'new',
    image: 'images/silla-interior.png',
    desc: 'Silla de diseño escandinavo fabricada en madera de haya natural, asiento y respaldo tapizados en tela de lana.',
    specs: { 'Material': 'Haya / Lana', 'Capacidad': '100 kg', 'Tapizado': 'Lana', 'Garantía': '2 años' },
  },
  {
    id: 11,
    name: 'Heavy Duty Industrial',
    category: 'industrial',
    material: 'metal',
    color: 'negro',
    price: 3999,
    badge: null,
    image: 'images/silla-industrial.png',
    desc: 'Taburete industrial de acero estructural con recubrimiento epoxi negro. Diseñado para talleres, laboratorios y ambientes exigentes.',
    specs: { 'Material': 'Acero Estructural', 'Capacidad': '180 kg', 'Tipo': 'Taburete alto', 'Garantía': '2 años' },
  },
  {
    id: 12,
    name: 'Factory Bar Stool',
    category: 'industrial',
    material: 'metal',
    color: 'negro',
    price: 2799,
    badge: null,
    image: 'images/silla-industrial.png',
    desc: 'Banco de barra estilo industrial con reposapiés y asiento giratorio 360°. Ideal para cocinas de diseño y barras.',
    specs: { 'Material': 'Acero + Madera', 'Capacidad': '130 kg', 'Giro': '360°', 'Garantía': '1 año' },
  },
  {
    id: 13,
    name: 'Banca Espera 3p',
    category: 'bancas',
    material: 'metal',
    color: 'negro',
    price: 6499,
    badge: null,
    image: 'images/banca.png',
    desc: 'Banca para sala de espera de 3 plazas, estructura de acero inoxidable y asientos tapizados en piel sintética negra.',
    specs: { 'Plazas': '3', 'Material': 'Acero / Piel Sintética', 'Largo': '160 cm', 'Garantía': '1 año' },
  },
  {
    id: 14,
    name: 'Banca Madera Premium',
    category: 'bancas',
    material: 'madera',
    color: 'cafe',
    price: 8999,
    badge: 'premium',
    image: 'images/banca.png',
    desc: 'Banca de madera de cedro con patas de acero negro. Diseño moderno y elegante para recepciones y lobbies de alta gama.',
    specs: { 'Plazas': '2–3', 'Material': 'Cedro / Acero', 'Largo': '140 cm', 'Garantía': '2 años' },
  },
  {
    id: 15,
    name: 'Silla Premium Cuero',
    category: 'oficina',
    material: 'piel',
    color: 'cafe',
    price: 14999,
    badge: 'premium',
    image: 'images/silla-premium.png',
    desc: 'Silla ejecutiva de lujo con cuero genuino cosido a mano, madera de nogal pulida y mecanismo de reclinación alemán. La cúspide de la ergonomía.',
    specs: { 'Material': 'Cuero Genuino', 'Altura asiento': '46–58 cm', 'Capacidad': '140 kg', 'Garantía': '3 años' },
  },
  {
    id: 16,
    name: 'Premium Director',
    category: 'oficina',
    material: 'piel',
    color: 'negro',
    price: 19999,
    badge: 'premium',
    oldPrice: 24999,
    image: 'images/silla-premium.png',
    desc: 'La mejor silla ejecutiva de nuestra línea. Cuero italiano, apoyabrazos de madera maciza, sistema neumático de precisión.',
    specs: { 'Material': 'Cuero Italiano', 'Altura asiento': '47–60 cm', 'Capacidad': '150 kg', 'Garantía': '5 años' },
  },
];

/* === STATE === */
const state = {
  search: '',
  categories: new Set(),
  materials: new Set(),
  color: 'todos',
  priceMin: 0,
  priceMax: 25000,
  sort: 'default',
  view: 'grid',
  cart: [],
  wishlist: new Set(),
  currentSlide: 0,
};

/* === HERO SLIDER === */
const slides = document.querySelectorAll('.hero__slide');
const dots = document.querySelectorAll('.hero__dot');
let sliderTimer = null;

function goToSlide(idx) {
  slides[state.currentSlide].classList.remove('active');
  dots[state.currentSlide].classList.remove('active');
  state.currentSlide = (idx + slides.length) % slides.length;
  slides[state.currentSlide].classList.add('active');
  dots[state.currentSlide].classList.add('active');
}

function startSlider() {
  sliderTimer = setInterval(() => goToSlide(state.currentSlide + 1), 5000);
}

document.getElementById('heroPrev').addEventListener('click', () => {
  clearInterval(sliderTimer);
  goToSlide(state.currentSlide - 1);
  startSlider();
});
document.getElementById('heroNext').addEventListener('click', () => {
  clearInterval(sliderTimer);
  goToSlide(state.currentSlide + 1);
  startSlider();
});
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    clearInterval(sliderTimer);
    goToSlide(i);
    startSlider();
  });
});
startSlider();

/* === NAVBAR SCROLL === */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* === MOBILE MENU === */
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');
hamburger.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
});

/* === SEARCH BAR === */
const searchToggle = document.getElementById('searchToggle');
const searchBar = document.getElementById('searchBar');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');

searchToggle.addEventListener('click', () => {
  searchBar.classList.toggle('open');
  if (searchBar.classList.contains('open')) searchInput.focus();
});
searchClose.addEventListener('click', () => searchBar.classList.remove('open'));
searchInput.addEventListener('input', (e) => {
  document.getElementById('filterSearch').value = e.target.value;
  state.search = e.target.value.toLowerCase().trim();
  renderProducts();
});

/* === CATEGORY CARDS === */
document.querySelectorAll('.cat-card').forEach(card => {
  card.addEventListener('click', () => {
    const cat = card.dataset.cat;
    document.querySelectorAll('.cat-card').forEach(c => {
      c.classList.remove('active');
      c.setAttribute('aria-pressed', 'false');
    });
    card.classList.add('active');
    card.setAttribute('aria-pressed', 'true');

    // Scroll to catalog
    document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });

    if (cat === 'todos') {
      state.categories.clear();
      document.querySelectorAll('[name="cat"]').forEach(cb => cb.checked = (cb.value === 'todos'));
    } else {
      state.categories.clear();
      state.categories.add(cat);
      document.querySelectorAll('[name="cat"]').forEach(cb => {
        cb.checked = (cb.value === cat);
      });
    }
    renderProducts();
    updateActiveTags();
  });
});

/* === SIDEBAR FILTERS === */

// Filter search
document.getElementById('filterSearch').addEventListener('input', (e) => {
  state.search = e.target.value.toLowerCase().trim();
  renderProducts();
  updateActiveTags();
});

// Category checkboxes
document.querySelectorAll('[name="cat"]').forEach(cb => {
  cb.addEventListener('change', () => {
    if (cb.value === 'todos' && cb.checked) {
      state.categories.clear();
      document.querySelectorAll('[name="cat"]').forEach(c => { if (c.value !== 'todos') c.checked = false; });
    } else if (cb.value !== 'todos') {
      document.querySelector('[name="cat"][value="todos"]').checked = false;
      if (cb.checked) {
        state.categories.add(cb.value);
      } else {
        state.categories.delete(cb.value);
      }
    }
    renderProducts();
    updateActiveTags();
  });
});

// Material checkboxes
document.querySelectorAll('[name="mat"]').forEach(cb => {
  cb.addEventListener('change', () => {
    if (cb.checked) state.materials.add(cb.value);
    else state.materials.delete(cb.value);
    renderProducts();
    updateActiveTags();
  });
});

// Price range (dual)
const rangeMin = document.getElementById('rangeMin');
const rangeMax = document.getElementById('rangeMax');
const priceMinEl = document.getElementById('priceMin');
const priceMaxEl = document.getElementById('priceMax');

function updateRange() {
  let min = parseInt(rangeMin.value);
  let max = parseInt(rangeMax.value);
  if (min > max) { [min, max] = [max, min]; }
  state.priceMin = min;
  state.priceMax = max;
  priceMinEl.textContent = '$' + min.toLocaleString('es-MX');
  priceMaxEl.textContent = '$' + max.toLocaleString('es-MX');
  renderProducts();
  updateActiveTags();
}

rangeMin.addEventListener('input', updateRange);
rangeMax.addEventListener('input', updateRange);

// Color swatches
document.querySelectorAll('.color-swatch').forEach(sw => {
  sw.addEventListener('click', () => {
    document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
    sw.classList.add('active');
    state.color = sw.dataset.color;
    renderProducts();
    updateActiveTags();
  });
});

// Sort
document.getElementById('sortSelect').addEventListener('change', (e) => {
  state.sort = e.target.value;
  renderProducts();
});

// View toggle
document.getElementById('gridView').addEventListener('click', () => {
  state.view = 'grid';
  document.getElementById('productsGrid').classList.remove('list-view');
  document.getElementById('gridView').classList.add('active');
  document.getElementById('gridView').setAttribute('aria-pressed', 'true');
  document.getElementById('listView').classList.remove('active');
  document.getElementById('listView').setAttribute('aria-pressed', 'false');
});
document.getElementById('listView').addEventListener('click', () => {
  state.view = 'list';
  document.getElementById('productsGrid').classList.add('list-view');
  document.getElementById('listView').classList.add('active');
  document.getElementById('listView').setAttribute('aria-pressed', 'true');
  document.getElementById('gridView').classList.remove('active');
  document.getElementById('gridView').setAttribute('aria-pressed', 'false');
});

// Clear filters
document.getElementById('clearFilters').addEventListener('click', resetAllFilters);

function resetAllFilters() {
  state.search = '';
  state.categories.clear();
  state.materials.clear();
  state.color = 'todos';
  state.priceMin = 0;
  state.priceMax = 25000;
  state.sort = 'default';

  document.getElementById('filterSearch').value = '';
  document.querySelectorAll('[name="cat"]').forEach(cb => cb.checked = cb.value === 'todos');
  document.querySelectorAll('[name="mat"]').forEach(cb => cb.checked = false);
  document.querySelectorAll('.color-swatch').forEach(sw => sw.classList.toggle('active', sw.dataset.color === 'todos'));
  rangeMin.value = 0;
  rangeMax.value = 25000;
  priceMinEl.textContent = '$0';
  priceMaxEl.textContent = '$25,000';
  document.getElementById('sortSelect').value = 'default';

  document.querySelectorAll('.cat-card').forEach(c => {
    const isAll = c.dataset.cat === 'todos';
    c.classList.toggle('active', isAll);
    c.setAttribute('aria-pressed', isAll);
  });

  renderProducts();
  updateActiveTags();
}

/* === MOBILE SIDEBAR === */
const filterToggle = document.getElementById('filterToggle');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');

filterToggle.addEventListener('click', openSidebar);
closeSidebar.addEventListener('click', closeSidebarFn);
sidebarOverlay.addEventListener('click', closeSidebarFn);

function openSidebar() {
  sidebar.classList.add('open');
  sidebarOverlay.removeAttribute('hidden');
  sidebarOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeSidebarFn() {
  sidebar.classList.remove('open');
  sidebarOverlay.setAttribute('hidden', '');
  sidebarOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

/* === ACTIVE FILTER TAGS === */
function updateActiveTags() {
  const container = document.getElementById('activeFilters');
  const tags = [];

  if (state.search) {
    tags.push({ label: `Búsqueda: "${state.search}"`, key: 'search' });
  }
  state.categories.forEach(cat => {
    const names = { oficina: 'Oficina', interior: 'Interior', exterior: 'Exterior', gamer: 'Gamer', industrial: 'Industriales', bancas: 'Bancas' };
    tags.push({ label: names[cat] || cat, key: 'cat:' + cat });
  });
  state.materials.forEach(mat => {
    const names = { tela: 'Tela', piel: 'Piel Sintética', malla: 'Malla', plastico: 'Plástico', madera: 'Madera', metal: 'Metal' };
    tags.push({ label: names[mat] || mat, key: 'mat:' + mat });
  });
  if (state.color !== 'todos') {
    const names = { negro: 'Negro', cafe: 'Café', gris: 'Gris', azul: 'Azul', naranja: 'Naranja', blanco: 'Blanco' };
    tags.push({ label: 'Color: ' + names[state.color], key: 'color' });
  }
  if (state.priceMin > 0 || state.priceMax < 25000) {
    tags.push({ label: `$${state.priceMin.toLocaleString('es-MX')} – $${state.priceMax.toLocaleString('es-MX')}`, key: 'price' });
  }

  container.innerHTML = tags.map(t => `
    <span class="filter-tag">
      ${t.label}
      <button class="filter-tag__remove" data-key="${t.key}" aria-label="Quitar filtro ${t.label}">✕</button>
    </span>
  `).join('');

  container.querySelectorAll('.filter-tag__remove').forEach(btn => {
    btn.addEventListener('click', () => removeTag(btn.dataset.key));
  });
}

function removeTag(key) {
  if (key === 'search') {
    state.search = '';
    document.getElementById('filterSearch').value = '';
  } else if (key.startsWith('cat:')) {
    state.categories.delete(key.replace('cat:', ''));
    const val = key.replace('cat:', '');
    const cb = document.querySelector(`[name="cat"][value="${val}"]`);
    if (cb) cb.checked = false;
    if (state.categories.size === 0) {
      document.querySelector('[name="cat"][value="todos"]').checked = true;
    }
  } else if (key.startsWith('mat:')) {
    state.materials.delete(key.replace('mat:', ''));
    const val = key.replace('mat:', '');
    const cb = document.querySelector(`[name="mat"][value="${val}"]`);
    if (cb) cb.checked = false;
  } else if (key === 'color') {
    state.color = 'todos';
    document.querySelectorAll('.color-swatch').forEach(sw => sw.classList.toggle('active', sw.dataset.color === 'todos'));
  } else if (key === 'price') {
    state.priceMin = 0;
    state.priceMax = 25000;
    rangeMin.value = 0;
    rangeMax.value = 25000;
    priceMinEl.textContent = '$0';
    priceMaxEl.textContent = '$25,000';
  }
  renderProducts();
  updateActiveTags();
}

/* === RENDER PRODUCTS === */
function getFilteredProducts() {
  let list = [...PRODUCTS];

  if (state.search) {
    list = list.filter(p =>
      p.name.toLowerCase().includes(state.search) ||
      p.desc.toLowerCase().includes(state.search) ||
      p.category.includes(state.search)
    );
  }
  if (state.categories.size > 0) {
    list = list.filter(p => state.categories.has(p.category));
  }
  if (state.materials.size > 0) {
    list = list.filter(p => state.materials.has(p.material));
  }
  if (state.color !== 'todos') {
    list = list.filter(p => p.color === state.color);
  }
  list = list.filter(p => p.price >= state.priceMin && p.price <= state.priceMax);

  switch (state.sort) {
    case 'price-asc': list.sort((a, b) => a.price - b.price); break;
    case 'price-desc': list.sort((a, b) => b.price - a.price); break;
    case 'name-asc': list.sort((a, b) => a.name.localeCompare(b.name)); break;
    case 'name-desc': list.sort((a, b) => b.name.localeCompare(a.name)); break;
  }

  return list;
}

function formatPrice(n) {
  return '$' + n.toLocaleString('es-MX') + ' MXN';
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const noResults = document.getElementById('noResults');
  const countEl = document.getElementById('catalogCount');
  const list = getFilteredProducts();

  countEl.textContent = `${list.length} producto${list.length !== 1 ? 's' : ''}`;

  if (list.length === 0) {
    grid.innerHTML = '';
    noResults.removeAttribute('hidden');
    return;
  }
  noResults.setAttribute('hidden', '');

  const catNames = { oficina: 'Oficina', interior: 'Interior', exterior: 'Exterior', gamer: 'Gamer', industrial: 'Industriales', bancas: 'Bancas' };
  const badgeLabels = { new: 'Nuevo', premium: 'Premium', sale: 'Oferta' };

  grid.innerHTML = list.map((p, i) => `
    <article class="product-card" style="animation-delay:${i * 40}ms" data-id="${p.id}">
      ${p.badge ? `<span class="product-card__badge badge-${p.badge}">${badgeLabels[p.badge]}</span>` : ''}
      <button class="product-card__wishlist ${state.wishlist.has(p.id) ? 'active' : ''}" 
              data-wishlist="${p.id}" aria-label="${state.wishlist.has(p.id) ? 'Quitar de favoritos' : 'Agregar a favoritos'}">
        ${state.wishlist.has(p.id) ? '♥' : '♡'}
      </button>
      <div class="product-card__img-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <button class="product-card__quick" data-quickview="${p.id}" aria-label="Vista rápida de ${p.name}">
          👁 Vista rápida
        </button>
      </div>
      <div class="product-card__body">
        <span class="product-card__cat">${catNames[p.category] || p.category}</span>
        <h3 class="product-card__name">${p.name}</h3>
        <p class="product-card__material">${getMaterialName(p.material)}</p>
        <div class="product-card__price">
          ${formatPrice(p.price)}
          ${p.oldPrice ? `<span class="old-price">${formatPrice(p.oldPrice)}</span>` : ''}
        </div>
      </div>
      <div class="product-card__footer">
        <button class="product-card__add" data-add="${p.id}" aria-label="Agregar ${p.name} al carrito">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          Agregar al Carrito
        </button>
      </div>
    </article>
  `).join('');

  // Attach events
  grid.querySelectorAll('[data-add]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(parseInt(btn.dataset.add));
    });
  });
  grid.querySelectorAll('[data-quickview]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openQuickView(parseInt(btn.dataset.quickview));
    });
  });
  grid.querySelectorAll('[data-wishlist]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleWishlist(parseInt(btn.dataset.wishlist));
    });
  });
}

function getMaterialName(mat) {
  const names = { tela: 'Tapizado Tela', piel: 'Piel Sintética', malla: 'Malla Ergonómica', plastico: 'Polipropileno', madera: 'Madera Natural', metal: 'Estructura Metálica' };
  return names[mat] || mat;
}

/* === CART === */
function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  state.cart.push(product);
  document.getElementById('cartCount').textContent = state.cart.length;
  showToast(`✓ ${product.name} agregado al carrito`);
}

function showToast(msg) {
  const toast = document.getElementById('cartToast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

/* === WISHLIST === */
function toggleWishlist(id) {
  if (state.wishlist.has(id)) {
    state.wishlist.delete(id);
    showToast('Producto eliminado de favoritos');
  } else {
    state.wishlist.add(id);
    showToast('♥ Guardado en favoritos');
  }
  renderProducts();
}

/* === QUICK VIEW MODAL === */
function openQuickView(id) {
  const p = PRODUCTS.find(pr => pr.id === id);
  if (!p) return;
  const catNames = { oficina: 'Oficina', interior: 'Interior', exterior: 'Exterior', gamer: 'Gamer', industrial: 'Industriales', bancas: 'Bancas' };
  const specsHtml = Object.entries(p.specs).map(([k, v]) =>
    `<div class="modal__spec"><span>${k}</span><span>${v}</span></div>`
  ).join('');

  document.getElementById('modalContent').innerHTML = `
    <div class="modal__img">
      <img src="${p.image}" alt="${p.name}" />
    </div>
    <div class="modal__info">
      <span class="modal__cat">${catNames[p.category] || p.category}</span>
      <h2 class="modal__name" id="modalTitle">${p.name}</h2>
      <div class="modal__price">${formatPrice(p.price)}${p.oldPrice ? `<span class="old-price" style="font-size:16px;margin-left:10px">${formatPrice(p.oldPrice)}</span>` : ''}</div>
      <p class="modal__desc">${p.desc}</p>
      <div class="modal__specs">${specsHtml}</div>
      <button class="btn-primary btn-full" onclick="addToCart(${p.id});closeModal()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
        Agregar al Carrito
      </button>
    </div>
  `;
  document.getElementById('modalOverlay').removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').setAttribute('hidden', '');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', (e) => {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    closeSidebarFn();
    searchBar.classList.remove('open');
  }
});

/* === CONTACT FORM === */
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const success = document.getElementById('formSuccess');
  // Simulate sending
  const btn = form.querySelector('[type="submit"]');
  btn.textContent = 'Enviando...';
  btn.disabled = true;
  setTimeout(() => {
    form.reset();
    success.removeAttribute('hidden');
    btn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
      </svg> Enviar Mensaje`;
    btn.disabled = false;
    setTimeout(() => success.setAttribute('hidden', ''), 5000);
  }, 1200);
});

/* === FOOTER CATEGORY LINKS === */
function filterByCategory(cat) {
  state.categories.clear();
  state.categories.add(cat);
  document.querySelectorAll('[name="cat"]').forEach(cb => { cb.checked = (cb.value === cat); });
  document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
  renderProducts();
  updateActiveTags();
}

/* === INIT === */
renderProducts();
updateActiveTags();
