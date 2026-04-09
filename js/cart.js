// ═══════════════════════════════════════
// CART + MODAL — Shared between index.html & carta.html
// Requires: menu-data.js loaded first, i18n.js
// ═══════════════════════════════════════

// ── Sanitize helper ──
function sanitizeHTML(str) {
  const p = document.createElement('p');
  p.textContent = str;
  return p.innerHTML;
}

// ── Render helpers ──
function buildFeaturedCard(item) {
  const isPremium = item.id === 'la-secreta';
  const name = (typeof tIng === 'function') ? tIng(item.name) : item.name;
  return `
  <div class="featured-burger-card ${isPremium ? 'featured-burger-card--premium' : ''} menu-card fade-up-enter delay-1" onclick="openModal('${item.id}')" style="cursor:pointer">
    ${isPremium ? '<div class="featured-burger-crown">⭐ La Premium</div>' : ''}
    <div class="featured-burger-img-wrap">
      ${item.img
      ? `<img src="${item.img}" alt="${sanitizeHTML(name)}" class="featured-burger-img" />`
      : `<div class="featured-burger-emoji">${item.emoji || '🍔'}</div>`
    }
    </div>
    <div class="featured-burger-info">
      <span class="dish-name">${sanitizeHTML(name)}</span>
      <span class="dish-price">${item.price}</span>
    </div>
  </div>`;
}

function buildMenuRow(item) {
  const name = (typeof tIng === 'function') ? tIng(item.name) : item.name;
  const desc = (typeof tDesc === 'function') ? (tDesc(item.id) || item.desc) : item.desc;
  return `
  <div class="menu-item-card card fade-up-enter delay-4" onclick="openModal('${item.id}')" style="cursor:pointer;display:flex;justify-content:space-between;align-items:flex-start;gap:12px">
    <div style="flex:1">
      <h4 style="font-size:.85rem;font-weight:700;color:var(--accent);margin-bottom:4px">${sanitizeHTML(name)}</h4>
      <p style="font-size:.75rem;color:var(--text-muted);line-height:1.5">${sanitizeHTML(desc)}</p>
    </div>
    <span style="font-size:.85rem;font-weight:800;color:var(--accent);white-space:nowrap">${item.price}</span>
  </div>`;
}

function buildDrinkRow(item) {
  const name = (typeof tIng === 'function') ? tIng(item.name) : item.name;
  return `
  <div class="menu-item-card card fade-up-enter delay-4" style="display:flex;justify-content:space-between;align-items:center;gap:12px">
    <div style="flex:1">
      <h4 style="font-size:.85rem;font-weight:700;color:var(--accent);margin-bottom:2px">${sanitizeHTML(name)}</h4>
      <p style="font-size:.75rem;color:var(--text-muted)">${sanitizeHTML(item.desc)}</p>
    </div>
    <div style="display:flex;align-items:center;gap:10px">
      <span style="font-size:.85rem;font-weight:800;color:var(--accent);white-space:nowrap">${item.price}</span>
      <button onclick="addDrinkToCart('${item.id}')" style="background:var(--accent);border:none;border-radius:50%;width:2rem;height:2rem;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:transform .15s" onmouseenter="this.style.transform='scale(1.15)'" onmouseleave="this.style.transform='scale(1)'">
        <span class="material-symbols-outlined" style="font-size:1.1rem;color:#111">add</span>
      </button>
    </div>
  </div>`;
}

function buildSauceChip(item) {
  const name = (typeof tIng === 'function') ? tIng(item.name) : item.name;
  return `<div class="sauce-chip ${item.wide ? 'sauce-chip--wide' : ''}"
               onclick="addSauceToCart('${item.id}')"
               style="cursor:pointer; transition: transform 0.1s; transition: background 0.2s;"
               onmousedown="this.style.transform='scale(0.95)'"
               onmouseup="this.style.transform='scale(1)'">
      ${sanitizeHTML(name)}
  </div>`;
}

function renderMenu() {
  const allMenuItems = Object.values(MENU_DATA).flat();
  const featuredBurgers = [
    allMenuItems.find(i => i.id === 'la-explosiva'),
    allMenuItems.find(i => i.id === 'la-secreta'),
    allMenuItems.find(i => i.id === 'la-pistachera'),
    allMenuItems.find(i => i.id === 'el-furioso')
  ].filter(Boolean);

  const featuredDishesEl = document.getElementById('featuredDishes');
  if (featuredDishesEl) {
    featuredDishesEl.innerHTML = featuredBurgers.map(buildFeaturedCard).join('');
  }

  const listEntrantesEl = document.getElementById('list-entrantes');
  if (listEntrantesEl) {
    listEntrantesEl.innerHTML = MENU_DATA.entrantes.map(buildMenuRow).join('');
    document.getElementById('list-burgers').innerHTML = MENU_DATA.burgers.map(buildMenuRow).join('');
    document.getElementById('list-rolls').innerHTML = MENU_DATA.rolls.map(buildMenuRow).join('');
    document.getElementById('list-sandwiches').innerHTML = MENU_DATA.sandwiches.map(buildMenuRow).join('');
    document.getElementById('list-bebidas').innerHTML = MENU_DATA.bebidas.map(buildDrinkRow).join('');
    document.getElementById('saucesGrid').innerHTML = MENU_DATA.sauces.map(buildSauceChip).join('');
  }
}

// ═══════════════════════════════════════
// MODAL
// ═══════════════════════════════════════
function openModal(id) {
  const item = Object.values(MENU_DATA).flat().find(i => i.id === id);
  if (!item) return;

  const name = (typeof tIng === 'function') ? tIng(item.name) : item.name;
  const desc = (typeof tDesc === 'function') ? (tDesc(item.id) || item.desc) : item.desc;

  document.body.style.overflow = 'hidden';
  document.getElementById('modalTitle').textContent = name;
  document.getElementById('modalDesc').textContent = desc;
  document.getElementById('modalPrice').textContent = item.price;

  const imgEl = document.getElementById('modalImg');
  if (item.img && /^(https?:\/\/|images\/)/.test(item.img)) {
    imgEl.style.backgroundImage = `url('${item.img.replace(/['"]/g, '')}')`;
    imgEl.style.display = 'block';
    imgEl.innerHTML = '';
  } else {
    imgEl.style.backgroundImage = '';
    imgEl.style.display = 'flex';
    imgEl.innerHTML = '<span style="font-size:4rem">🍽️</span>';
  }

  document.getElementById('modalIngredientsList').innerHTML = item.ingredients.map(ing => {
    const ingName = (typeof tIng === 'function') ? tIng(ing) : ing;
    return `<label class="ingredient-label">
     <span class="ingredient-name">${sanitizeHTML(ingName)}</span>
     <input type="checkbox" class="custom-checkbox" checked>
   </label>`;
  }).join('');

  const allGrid = document.getElementById('modalAllergensGrid');
  const allDetails = document.getElementById('modalAllergensDetails');

  if (item.allergens) {
    allDetails.style.display = 'block';
    const nums = item.allergens.split(',').map(n => n.trim()).filter(Boolean);
    allGrid.innerHTML = nums.map(n => {
      const tName = (typeof I18N !== 'undefined') ? I18N.translations['allergen_' + n]?.es || 'Alérgeno ' + n : 'Alérgeno ' + n;
      const actualName = (typeof I18N !== 'undefined' && I18N.t) ? I18N.t('allergen_' + n) : tName;
      return `<span style="background:var(--surface-dark);padding:4px 8px;border-radius:4px;border:1px solid rgba(255,255,255,0.1)">⚠️ ${sanitizeHTML(actualName)}</span>`;
    }).join('');
  } else {
    allDetails.style.display = 'none';
    allGrid.innerHTML = '';
  }
  allDetails.removeAttribute('open');

  document.getElementById('modalOverlay').classList.add('active');
  document.getElementById('productModal').classList.add('active');
}

function closeModal() {
  document.body.style.overflow = '';
  document.getElementById('modalOverlay').classList.remove('active');
  document.getElementById('productModal').classList.remove('active');
}

// ═══════════════════════════════════════
// CART — localStorage
// ═══════════════════════════════════════
const CART_KEY = 'brasa_cart';
function getCart() { try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch { return []; } }
function saveCart(cart) { localStorage.setItem(CART_KEY, JSON.stringify(cart)); updateCartBadge(); }
function updateCartBadge() {
  const cart = getCart();
  const badge = document.getElementById('cartBadge');
  if (!badge) return;
  const total = cart.reduce((s, i) => s + (i.qty || 1), 0);
  badge.textContent = total;
  badge.style.display = total > 0 ? 'block' : 'none';
}

function addToCartAndClose() {
  const title = document.getElementById('modalTitle').textContent;
  const priceText = document.getElementById('modalPrice').textContent;

  const removed = [];
  document.querySelectorAll('#modalIngredientsList .custom-checkbox').forEach((cb, i) => {
    const label = document.querySelectorAll('#modalIngredientsList .ingredient-name')[i];
    if (!cb.checked && label) removed.push(label.textContent.trim());
  });

  const extraLabels = ['Doble Carne (+3,50€)', 'Bacon Extra (+1,50€)', 'Queso Extra (+1,00€)'];
  const extraPrices = [3.50, 1.50, 1.00];
  const extras = [];
  let extraCost = 0;
  document.querySelectorAll('.ingredient-group')[1]?.querySelectorAll('.custom-checkbox:not(.allergen-checkbox)').forEach((cb, i) => {
    if (cb.checked) { extras.push(extraLabels[i]); extraCost += extraPrices[i]; }
  });

  const selectedAllergens = [];

  const baseNum = parseFloat(priceText.replace(',', '.').replace('€', '')) || 0;
  const totalNum = baseNum + extraCost;
  const totalStr = totalNum.toFixed(2).replace('.', ',') + '€';

  const allItems = Object.values(MENU_DATA).flat();
  const found = allItems.find(i => i.name === title);
  const itemId = found ? found.id : 'custom-' + Date.now();
  const img = found ? (found.img || '') : '';
  const emoji = found ? (found.emoji || '🍔') : '🍔';

  const cart = getCart();
  const key = itemId + '|' + removed.join(',') + '|' + extras.join(',') + '|' + selectedAllergens.map(a => a.id).join(',');
  const existing = cart.find(i => i.key === key);
  if (existing) {
    existing.qty = (existing.qty || 1) + 1;
    existing.totalStr = (parseFloat(existing.baseNum || baseNum) * existing.qty + extraCost * existing.qty).toFixed(2).replace('.', ',') + '€';
  } else {
    cart.push({ key, id: itemId, name: title, baseNum, extraCost, totalStr, removed, extras, allergens: selectedAllergens, img, emoji, qty: 1 });
  }
  saveCart(cart);
  closeModal();
  showCartToast(title);
}

function addDrinkToCart(id) {
  const drink = MENU_DATA.bebidas.find(d => d.id === id);
  if (!drink) return;
  const cart = getCart();
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty = (existing.qty || 1) + 1;
  } else {
    const baseNum = parseFloat(drink.price.replace(',', '.').replace('€', '')) || 0;
    cart.push({ key: id, id, name: drink.name, baseNum, extraCost: 0, totalStr: drink.price, removed: [], extras: [], img: '', emoji: drink.emoji || '🥤', qty: 1 });
  }
  saveCart(cart);
  showCartToast(drink.name);
}

function addSauceToCart(id) {
  const sauce = MENU_DATA.sauces.find(s => s.id === id);
  if (!sauce) return;
  const cart = getCart();
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty = (existing.qty || 1) + 1;
  } else {
    const baseNum = parseFloat(sauce.price.replace(',', '.').replace('€', '')) || 0;
    cart.push({ key: id, id, name: sauce.name, baseNum, extraCost: 0, totalStr: sauce.price, removed: [], extras: [], img: '', qty: 1 });
  }
  saveCart(cart);
  showCartToast(sauce.name);
}

function showCartToast(name) {
  let toast = document.getElementById('cartToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'cartToast';
    toast.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%) translateY(20px);background:var(--accent);color:#111;font-weight:800;font-size:.85rem;padding:.6rem 1.2rem;border-radius:999px;z-index:9999;opacity:0;transition:all .3s;white-space:nowrap;pointer-events:none';
    document.body.appendChild(toast);
  }
  toast.textContent = '✓ ' + name + ' añadido';
  toast.style.opacity = '1'; toast.style.transform = 'translateX(-50%) translateY(0)';
  clearTimeout(toast._t);
  toast._t = setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(-50%) translateY(20px)'; }, 2200);
}

// Init
renderMenu();
updateCartBadge();

window.addEventListener('languageChanged', () => {
  renderMenu();
});
