// Shopistik — main script
// Vanilla JavaScript only — no frameworks, no build tools.
// Fetch calls to the API (e.g. fetch("/api/products")) and page logic go here.

/* --------------------------------------------------------------------------
   Currency formatting
   Catalogue prices are always stored/compared in USD. Armenian (hy) shoppers
   see a converted AMD display at a fixed rate ($1 = 400 ֏); EN/RU stay in $.
   `data-price-usd` on product cards keeps the base amount intact even after
   the visible label is rewritten to dram.
   -------------------------------------------------------------------------- */
(function () {
  const USD_TO_AMD = 400;

  function getLang() {
    if (window.ShopistikI18n && typeof window.ShopistikI18n.getLang === 'function') {
      return window.ShopistikI18n.getLang();
    }
    return document.documentElement.getAttribute('lang') || 'en';
  }

  function usesAmd(lang) {
    return (lang || getLang()) === 'hy';
  }

  function toAmd(usdAmount) {
    return Math.round(Number(usdAmount) * USD_TO_AMD);
  }

  // `usdAmount` is always the base USD figure stored in data / localStorage.
  function formatUsd(usdAmount, lang) {
    const amount = Number(usdAmount);
    const safe = Number.isFinite(amount) ? amount : 0;

    if (usesAmd(lang)) {
      return `${toAmd(safe).toLocaleString('en-US')} ֏`;
    }

    const fixed = safe.toFixed(2);
    return `$${fixed.endsWith('.00') ? fixed.slice(0, -3) : fixed}`;
  }

  function readUsdFromElement(el) {
    if (!el) return 0;
    const attr = el.getAttribute('data-price-usd');
    if (attr != null && attr !== '') {
      const fromAttr = parseFloat(attr);
      return Number.isFinite(fromAttr) ? fromAttr : 0;
    }
    // Fallback for any price not yet annotated (USD text only).
    const text = String(el.textContent || '');
    if (text.includes('֏') || /դր/i.test(text)) return 0;
    return parseFloat(text.replace(/[^0-9.]/g, '')) || 0;
  }

  function syncDomPrices() {
    document.querySelectorAll('[data-price-usd]').forEach((el) => {
      el.textContent = formatUsd(el.getAttribute('data-price-usd'));
    });
  }

  window.ShopistikCurrency = {
    USD_TO_AMD,
    getLang,
    usesAmd,
    toAmd,
    formatUsd,
    readUsdFromElement,
    syncDomPrices,
  };

  document.addEventListener('shopistik:langchange', syncDomPrices);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', syncDomPrices);
  } else {
    syncDomPrices();
  }
})();

/* --------------------------------------------------------------------------
   Mobile/tablet nav toggle
   Below 900px the horizontal nav has nowhere to sit, so `.site-header__nav`
   is instead shown/hidden as a dropdown panel via one class — `nav-open` —
   on the header itself (see the max-width: 899px rules in main.css). This
   also closes itself after a link is clicked, and resets if the window is
   resized past the breakpoint while it's open (e.g. a tablet rotated to
   landscape), so it never gets stuck open on the desktop layout.
   -------------------------------------------------------------------------- */
(function () {
  const header = document.querySelector('.site-header');
  const toggle = header && header.querySelector('.site-header__toggle');
  const nav = header && header.querySelector('.site-header__nav');
  if (!header || !toggle || !nav) return;

  function closeNav() {
    header.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNav);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 900) closeNav();
  });
})();

/* --------------------------------------------------------------------------
   Scroll-triggered reveal animations
   Any element marked `data-reveal` starts hidden (opacity: 0, shifted down
   30px — defined in CSS) and fades/slides into place the first time it
   scrolls roughly 15% into the viewport. The actual animation is a plain
   CSS transition on the `.is-visible` class; this script's only job is to
   flip that class at the right moment, and to stagger siblings that reveal
   together (e.g. cards in the same grid row).
   -------------------------------------------------------------------------- */
(function () {
  const items = document.querySelectorAll('[data-reveal]');
  if (!items.length) return;

  // Stagger: elements that share a parent (e.g. a row of feature or product
  // cards) get an increasing `--reveal-delay` of 0.1s per sibling, so the
  // group cascades in one after another instead of popping in all at once.
  const siblingGroups = new Map();
  items.forEach((el) => {
    const parent = el.parentElement;
    if (!siblingGroups.has(parent)) siblingGroups.set(parent, []);
    siblingGroups.get(parent).push(el);
  });
  siblingGroups.forEach((siblings) => {
    siblings.forEach((el, index) => {
      el.style.setProperty('--reveal-delay', `${index * 0.1}s`);
    });
  });

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Unobserve immediately so the reveal only ever plays once, even
          // if the user scrolls back up and down past it again.
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((el) => observer.observe(el));
})();

/* --------------------------------------------------------------------------
   "How it works" step cards
   Each card marked `data-step` starts dim/muted and permanently lights up
   (`is-active`) the moment it scrolls into view — it does not dim back down
   if you scroll back up, matching a one-time "reveal" rather than a
   continuously scrubbed effect.
   -------------------------------------------------------------------------- */
(function () {
  const steps = document.querySelectorAll('[data-step]');
  if (!steps.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced || !('IntersectionObserver' in window)) {
    steps.forEach((el) => el.classList.add('is-active'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-active');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3, rootMargin: '0px 0px -15% 0px' }
  );

  steps.forEach((el) => observer.observe(el));
})();

/* --------------------------------------------------------------------------
   FAQ accordion
   `height: auto` can't be transitioned directly — browsers can only animate
   between two concrete values, and "auto" isn't one (it's resolved as a
   keyword, not a length, so there's nothing to interpolate from/to). The
   standard workaround: measure the answer's real rendered height in JS with
   `scrollHeight` (the full content height, including anything currently
   clipped by overflow), then set that exact pixel value as `max-height` to
   open, and back to `0` to close. Both ends of that transition are real
   numbers, so the browser can animate smoothly between them.
   Each item toggles independently — several answers can stay open at once.
   -------------------------------------------------------------------------- */
(function () {
  const items = document.querySelectorAll('.faq-item');
  if (!items.length) return;

  function setOpen(item, open) {
    const question = item.querySelector('.faq-item__question');
    const answer = item.querySelector('.faq-item__answer');
    item.classList.toggle('is-open', open);
    question.setAttribute('aria-expanded', String(open));
    // scrollHeight is measured live, so this stays correct even if the
    // answer's text wraps differently after a resize (see the resize
    // listener below).
    answer.style.maxHeight = open ? `${answer.scrollHeight}px` : '0px';
  }

  items.forEach((item) => {
    const question = item.querySelector('.faq-item__question');
    question.addEventListener('click', () => {
      const willOpen = !item.classList.contains('is-open');
      setOpen(item, willOpen);
    });
  });

  // If the viewport is resized while answers are open, their scrollHeight
  // may change (text reflows to a different number of lines). Re-measure
  // every open panel so nothing ends up clipped or leaving a gap.
  window.addEventListener('resize', () => {
    items.forEach((item) => {
      if (item.classList.contains('is-open')) setOpen(item, true);
    });
  });
})();

/* --------------------------------------------------------------------------
   Product card → detail page links
   Home + category grids (and any other pages that list products) get the same
   `product.html?id=…` navigation on media/title by resolving each card against
   window.ShopistikProducts (via data-product-id or product name). Add-to-bag
   buttons stay outside the links so they keep working.
   -------------------------------------------------------------------------- */
(function () {
  const products = window.ShopistikProducts;
  const cards = document.querySelectorAll('.product-card');
  if (!products || !products.length || !cards.length) return;

  const byName = new Map(
    products.map((product) => [String(product.name).trim().toLowerCase(), product])
  );

  function resolveId(card) {
    const existing = card.getAttribute('data-product-id');
    if (existing) return existing;

    const nameEl = card.querySelector('.product-card__name');
    if (!nameEl) return null;

    const match = byName.get(nameEl.textContent.trim().toLowerCase());
    return match ? match.id : null;
  }

  function ensureMediaLink(card, href) {
    const existing = card.querySelector('.product-card__media-link');
    if (existing) {
      existing.setAttribute('href', href);
      return;
    }

    const media = card.querySelector('.product-card__media');
    if (!media || !media.parentNode) return;

    const link = document.createElement('a');
    link.className = 'product-card__media-link';
    link.href = href;
    media.parentNode.insertBefore(link, media);
    link.appendChild(media);
  }

  function ensureNameLink(card, href) {
    const heading = card.querySelector('.product-card__name');
    if (!heading) return;

    const existing = heading.querySelector('.product-card__name-link');
    if (existing) {
      existing.setAttribute('href', href);
      return;
    }

    const label = heading.textContent.trim();
    heading.textContent = '';
    const link = document.createElement('a');
    link.className = 'product-card__name-link';
    link.href = href;
    link.textContent = label;
    heading.appendChild(link);
  }

  cards.forEach((card) => {
    const id = resolveId(card);
    if (!id) return;

    card.setAttribute('data-product-id', id);
    const href = `product.html?id=${encodeURIComponent(id)}`;
    ensureMediaLink(card, href);
    ensureNameLink(card, href);
  });
})();

/* --------------------------------------------------------------------------
   Shopping bag (cart)
   There's no backend yet, so the bag is just an array of { name, category,
   price, qty } saved to localStorage under one key. That's enough for it to
   survive page navigation and reloads, and to be readable from any page:
   every page's header shows a live item count, and "Add to Bag" buttons on
   the product grids push into the same store that bag.html reads from.
   -------------------------------------------------------------------------- */
(function () {
  const STORAGE_KEY = 'shopistik_bag';

  function getBag() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (err) {
      return [];
    }
  }

  function saveBag(bag) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bag));
    updateBagCount(bag);
    document.dispatchEvent(new CustomEvent('shopistik:bagchange', { detail: { bag } }));
  }

  function updateBagCount(bag) {
    const count = bag.reduce((sum, item) => sum + (Number(item.qty) || 0), 0);
    document.querySelectorAll('[data-bag-count]').forEach((el) => {
      el.textContent = String(count);
      el.hidden = count === 0;
    });
  }

  function parsePrice(text) {
    return parseFloat(String(text).replace(/[^0-9.]/g, '')) || 0;
  }

  function readProductCardPrice(card) {
    const priceEl = card.querySelector('.product-card__price');
    if (window.ShopistikCurrency) {
      return window.ShopistikCurrency.readUsdFromElement(priceEl);
    }
    return priceEl ? parsePrice(priceEl.textContent) : 0;
  }

  function addToBag(product, quantity) {
    const qtyToAdd = Math.max(1, Number(quantity) || 1);
    const bag = getBag();
    const existing = bag.find((item) => item.name === product.name);
    if (existing) {
      existing.qty += qtyToAdd;
    } else {
      bag.push(Object.assign({}, product, { qty: qtyToAdd }));
    }
    saveBag(bag);
  }

  // Brief bounce on the floating bag FAB so the add feels acknowledged
  // beyond the button label change alone.
  function pulseBagFab() {
    document.querySelectorAll('.site-fab-bag, .site-header__cart').forEach((fab) => {
      fab.classList.remove('is-popping');
      void fab.offsetWidth;
      fab.classList.add('is-popping');
      fab.addEventListener(
        'animationend',
        () => {
          fab.classList.remove('is-popping');
        },
        { once: true }
      );
    });
  }

  // Every product card on listing pages has an "Add to Bag" button; read the
  // card's own text content instead of hard-coding data twice. Category is
  // stored by its translation *key* so the bag stays correct across languages.
  document.querySelectorAll('.product-card__add').forEach((button) => {
    button.addEventListener('click', () => {
      if (button.disabled || button.classList.contains('is-added')) return;

      const card = button.closest('.product-card');
      if (!card) return;

      const categoryEl = card.querySelector('.product-card__category');

      addToBag({
        name: card.querySelector('.product-card__name').textContent.trim(),
        category: categoryEl.getAttribute('data-i18n') || categoryEl.textContent.trim().toLowerCase(),
        price: readProductCardPrice(card),
        id: card.getAttribute('data-product-id') || undefined,
      });

      pulseBagFab();

      const originalText = button.textContent;
      button.classList.add('is-added');
      button.textContent = window.ShopistikI18n ? window.ShopistikI18n.t('addedConfirm') : 'Added ✓';
      button.disabled = true;
      setTimeout(() => {
        button.classList.remove('is-added');
        button.textContent = originalText;
        button.disabled = false;
      }, 1100);
    });
  });

  updateBagCount(getBag());

  window.ShopistikBag = {
    getBag,
    saveBag,
    updateBagCount,
    addToBag,
    pulseBagFab,
    openCartDrawer: null,
    closeCartDrawer: null,
  };
})();

/* --------------------------------------------------------------------------
   Cart drawer (slide-out sidebar)
   Injects a right-hand drawer + dim overlay on every page, mirrors the same
   localStorage bag used by bag.html / product cards, and opens from the
   header cart button or floating FAB. Checkout lives on checkout.html.
   -------------------------------------------------------------------------- */
(function () {
  if (!window.ShopistikBag) return;

  const { getBag, saveBag } = window.ShopistikBag;

  const ICONS = {
    skincare:
      '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M12 4h8v4l2 2v18H10V10l2-2z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" /><path d="M12 14h8" stroke="currentColor" stroke-width="1.6" /></svg>',
    makeup:
      '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M14 4h4l1 6-1 3v15h-4V13l-1-3z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" /></svg>',
  };

  function t(key, fallback) {
    return window.ShopistikI18n ? window.ShopistikI18n.t(key) : fallback || key;
  }

  function formatPrice(amount) {
    if (window.ShopistikCurrency) return window.ShopistikCurrency.formatUsd(amount);
    const fixed = Number(amount).toFixed(2);
    return `$${fixed.endsWith('.00') ? fixed.slice(0, -3) : fixed}`;
  }

  function ensureHeaderCart() {
    const actions = document.querySelector('.site-header__actions');
    if (!actions || actions.querySelector('[data-cart-open]')) return;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'site-header__cart';
    button.setAttribute('data-cart-open', '');
    button.setAttribute('aria-haspopup', 'dialog');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', 'cartDrawer');
    button.setAttribute('data-i18n-aria', 'bag');
    button.setAttribute('aria-label', t('bag', 'Shopping bag'));
    button.innerHTML =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 8h12l-1 12a2 2 0 01-2 2H9a2 2 0 01-2-2L6 8z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" /><path d="M9 8V6a3 3 0 016 0v2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" /></svg>' +
      '<span class="site-header__bag-count" data-bag-count hidden>0</span>';

    const toggle = actions.querySelector('.site-header__toggle');
    if (toggle) actions.insertBefore(button, toggle);
    else actions.appendChild(button);
  }

  function ensureDrawerMarkup() {
    if (document.getElementById('cartDrawer')) return;

    const overlay = document.createElement('div');
    overlay.className = 'cart-drawer-overlay';
    overlay.id = 'cartDrawerOverlay';
    overlay.hidden = true;

    const drawer = document.createElement('aside');
    drawer.className = 'cart-drawer';
    drawer.id = 'cartDrawer';
    drawer.setAttribute('role', 'dialog');
    drawer.setAttribute('aria-modal', 'true');
    drawer.setAttribute('aria-labelledby', 'cartDrawerTitle');
    drawer.hidden = true;
    drawer.innerHTML = `
      <div class="cart-drawer__header">
        <h2 class="cart-drawer__title" id="cartDrawerTitle" data-i18n="bagTitle">Shopping Bag</h2>
        <button type="button" class="cart-drawer__close" data-cart-close data-i18n-aria="cartClose" aria-label="Close cart">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" /></svg>
        </button>
      </div>
      <div class="cart-drawer__empty" id="cartDrawerEmpty" hidden>
        <p data-i18n="bagEmptyText">Your bag is empty — nothing added just yet.</p>
        <button type="button" class="btn cart-drawer__continue" data-cart-close data-i18n="continueShopping">Continue Shopping</button>
      </div>
      <div class="cart-drawer__body" id="cartDrawerBody" hidden>
        <ul class="cart-drawer__list" id="cartDrawerList"></ul>
        <div class="cart-drawer__footer">
          <div class="cart-drawer__total-row">
            <span data-i18n="total">Total</span>
            <strong id="cartDrawerTotal">$0</strong>
          </div>
          <a class="btn cart-drawer__checkout" href="checkout.html" data-i18n="proceedCheckout">Proceed to Checkout</a>
        </div>
      </div>`;

    document.body.appendChild(overlay);
    document.body.appendChild(drawer);
  }

  ensureHeaderCart();
  ensureDrawerMarkup();
  window.ShopistikBag.updateBagCount(getBag());

  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartDrawerOverlay');
  const list = document.getElementById('cartDrawerList');
  const empty = document.getElementById('cartDrawerEmpty');
  const body = document.getElementById('cartDrawerBody');
  const totalEl = document.getElementById('cartDrawerTotal');

  function syncStaticLabels() {
    drawer.querySelectorAll('[data-i18n]').forEach((el) => {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    drawer.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });
  }

  function openCartDrawer() {
    render();
    syncStaticLabels();
    drawer.hidden = false;
    overlay.hidden = false;
    // Next frame so CSS can transition from off-screen.
    requestAnimationFrame(() => {
      document.body.classList.add('cart-drawer-open');
      drawer.classList.add('is-open');
      overlay.classList.add('is-open');
    });
    document.querySelectorAll('[data-cart-open]').forEach((el) => {
      el.setAttribute('aria-expanded', 'true');
    });
  }

  function closeCartDrawer() {
    if (!drawer.classList.contains('is-open') && drawer.hidden) return;

    document.body.classList.remove('cart-drawer-open');
    drawer.classList.remove('is-open');
    overlay.classList.remove('is-open');
    document.querySelectorAll('[data-cart-open]').forEach((el) => {
      el.setAttribute('aria-expanded', 'false');
    });

    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      drawer.hidden = true;
      overlay.hidden = true;
    };
    drawer.addEventListener('transitionend', finish, { once: true });
    window.setTimeout(finish, 400);
  }

  function render() {
    const raw = getBag();
    const bag = raw.filter((item) => item && Number(item.qty) > 0);
    if (bag.length !== raw.length) saveBag(bag);

    if (!bag.length) {
      list.innerHTML = '';
      empty.hidden = false;
      body.hidden = true;
      if (totalEl) totalEl.textContent = formatPrice(0);
      return;
    }

    empty.hidden = true;
    body.hidden = false;

    list.innerHTML = bag
      .map(
        (item, index) => `
        <li class="cart-drawer__item" data-index="${index}">
          <span class="cart-drawer__item-icon">${ICONS[item.category] || ICONS.skincare}</span>
          <div class="cart-drawer__item-info">
            <h3 class="cart-drawer__item-name">${item.name}</h3>
            <p class="cart-drawer__item-price">${formatPrice(item.price)}</p>
            <div class="cart-drawer__qty">
              <button type="button" class="cart-drawer__qty-btn" data-action="decrease" aria-label="${t('decreaseQty', 'Decrease quantity')}">&minus;</button>
              <span class="cart-drawer__qty-value">${item.qty}</span>
              <button type="button" class="cart-drawer__qty-btn" data-action="increase" aria-label="${t('increaseQty', 'Increase quantity')}">+</button>
            </div>
          </div>
          <div class="cart-drawer__item-side">
            <p class="cart-drawer__item-line">${formatPrice(item.price * item.qty)}</p>
            <button type="button" class="cart-drawer__remove" data-action="remove" aria-label="${t('removeFromBag', 'Remove {name} from bag').replace('{name}', item.name)}">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" /></svg>
            </button>
          </div>
        </li>`
      )
      .join('');

    const total = bag.reduce((sum, item) => sum + item.price * item.qty, 0);
    if (totalEl) totalEl.textContent = formatPrice(total);
  }

  list.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-action]');
    if (!button) return;

    const row = button.closest('.cart-drawer__item');
    if (!row) return;

    const index = Number(row.getAttribute('data-index'));
    const bag = getBag();
    if (!Number.isInteger(index) || !bag[index]) return;

    const action = button.getAttribute('data-action');
    if (action === 'increase') {
      bag[index].qty = Number(bag[index].qty) + 1;
    } else if (action === 'decrease') {
      bag[index].qty = Number(bag[index].qty) - 1;
      if (bag[index].qty <= 0) bag.splice(index, 1);
    } else if (action === 'remove') {
      bag.splice(index, 1);
    } else {
      return;
    }

    saveBag(bag);
    render();
  });

  document.addEventListener('click', (event) => {
    const openBtn = event.target.closest('[data-cart-open], .site-fab-bag');
    if (openBtn) {
      event.preventDefault();
      openCartDrawer();
      return;
    }
    if (event.target.closest('[data-cart-close]') || event.target === overlay) {
      closeCartDrawer();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeCartDrawer();
    }
  });

  document.addEventListener('shopistik:bagchange', render);
  document.addEventListener('shopistik:langchange', () => {
    syncStaticLabels();
    render();
  });

  window.ShopistikBag.openCartDrawer = openCartDrawer;
  window.ShopistikBag.closeCartDrawer = closeCartDrawer;

  render();
})();

/* --------------------------------------------------------------------------
   Bag page rendering
   Guarded on #bagBody so this only ever runs on bag.html. Renders every
   line item with a quantity stepper and remove button, wired straight back
   into the same localStorage store the product cards write to.
   -------------------------------------------------------------------------- */
(function () {
  const bagBody = document.getElementById('bagBody');
  const bagEmpty = document.getElementById('bagEmpty');
  const bagList = document.getElementById('bagList');
  if (!bagBody || !bagEmpty || !bagList || !window.ShopistikBag) return;

  const { getBag, saveBag } = window.ShopistikBag;

  // Two simple line-art icons stand in for product photography, matching
  // the style already used on the product cards, keyed by the category's
  // translation key (lowercase, language-independent — see main.js's
  // add-to-bag handler above and translations.js for the matching labels).
  const ICONS = {
    skincare:
      '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M12 4h8v4l2 2v18H10V10l2-2z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" /><path d="M12 14h8" stroke="currentColor" stroke-width="1.6" /></svg>',
    makeup:
      '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M14 4h4l1 6-1 3v15h-4V13l-1-3z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" /></svg>',
  };

  // Category is stored as a translation key ("skincare"/"makeup"); resolve
  // it to display text in whichever language is currently active.
  function categoryLabel(categoryKey) {
    return window.ShopistikI18n ? window.ShopistikI18n.t(categoryKey) : categoryKey;
  }

  function t(key, fallback) {
    return window.ShopistikI18n ? window.ShopistikI18n.t(key) : fallback;
  }

  function formatPrice(amount) {
    if (window.ShopistikCurrency) return window.ShopistikCurrency.formatUsd(amount);
    const fixed = Number(amount).toFixed(2);
    return `$${fixed.endsWith('.00') ? fixed.slice(0, -3) : fixed}`;
  }

  function showEmptyState() {
    bagList.innerHTML = '';
    bagEmpty.hidden = false;
    bagBody.hidden = true;

    const bagSubtotal = document.getElementById('bagSubtotal');
    const bagTotal = document.getElementById('bagTotal');
    if (bagSubtotal) bagSubtotal.textContent = formatPrice(0);
    if (bagTotal) bagTotal.textContent = formatPrice(0);
  }

  function render() {
    // Always re-read from storage so a single remaining item (or a fully
    // emptied bag) never operates on a stale in-memory snapshot.
    const raw = getBag();
    const bag = raw.filter((item) => item && Number(item.qty) > 0);

    // Keep storage in sync with what we render so data-index always maps
    // 1:1 to the live array (avoids a frozen last row after a bad qty).
    if (bag.length !== raw.length) {
      saveBag(bag);
    }

    if (!bag.length) {
      if (raw.length) saveBag([]);
      else if (window.ShopistikBag.updateBagCount) {
        window.ShopistikBag.updateBagCount([]);
      }
      showEmptyState();
      return;
    }

    bagEmpty.hidden = true;
    bagBody.hidden = false;

    bagList.innerHTML = bag
      .map(
        (item, index) => `
        <li class="bag__item" data-index="${index}">
          <span class="bag__item-icon">${ICONS[item.category] || ICONS.skincare}</span>
          <div class="bag__item-info">
            <p class="bag__item-category">${categoryLabel(item.category)}</p>
            <h3 class="bag__item-name">${item.name}</h3>
            <p class="bag__item-price">${formatPrice(item.price)} ${t('each', 'each')}</p>
          </div>
          <div class="bag__item-qty">
            <button type="button" class="bag__qty-btn" data-action="decrease" aria-label="${t('decreaseQty', 'Decrease quantity')}">&minus;</button>
            <span class="bag__qty-value">${item.qty}</span>
            <button type="button" class="bag__qty-btn" data-action="increase" aria-label="${t('increaseQty', 'Increase quantity')}">+</button>
          </div>
          <p class="bag__item-total">${formatPrice(item.price * item.qty)}</p>
          <button type="button" class="bag__remove" data-action="remove" aria-label="${t('removeFromBag', 'Remove {name} from bag').replace('{name}', item.name)}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" /></svg>
          </button>
        </li>`
      )
      .join('');

    const subtotal = bag.reduce((sum, item) => sum + item.price * item.qty, 0);
    const bagSubtotal = document.getElementById('bagSubtotal');
    const bagTotal = document.getElementById('bagTotal');
    if (bagSubtotal) bagSubtotal.textContent = formatPrice(subtotal);
    if (bagTotal) bagTotal.textContent = formatPrice(subtotal);
  }

  // One delegated listener on the wrap (not only the list) so controls stay
  // live even when the last row is removed and the list is briefly empty.
  // The floating FAB used to sit on top of the final row's +/- / remove
  // buttons on short carts — that overlap is cleared in CSS; this handler
  // stays defensive either way.
  const bagWrap = bagBody.closest('.bag__wrap') || bagBody;
  bagWrap.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-action]');
    if (!button || !bagList.contains(button)) return;

    event.preventDefault();
    event.stopPropagation();

    const row = button.closest('.bag__item');
    if (!row) return;

    const index = Number(row.getAttribute('data-index'));
    if (!Number.isInteger(index) || index < 0) return;

    const bag = getBag();
    if (index >= bag.length || !bag[index]) return;

    const action = button.getAttribute('data-action');

    if (action === 'increase') {
      bag[index].qty = Number(bag[index].qty) + 1;
    } else if (action === 'decrease') {
      bag[index].qty = Number(bag[index].qty) - 1;
      if (bag[index].qty <= 0) bag.splice(index, 1);
    } else if (action === 'remove') {
      bag.splice(index, 1);
    } else {
      return;
    }

    saveBag(bag);
    render();
  });

  // Category labels are translated at render time (see categoryLabel above),
  // so switching language needs to re-render the already-visible bag list.
  document.addEventListener('shopistik:langchange', render);
  document.addEventListener('shopistik:bagchange', render);

  render();
})();

/* --------------------------------------------------------------------------
   Checkout page — order summary + form validation
   Reads the same localStorage bag for the summary sidebar. On Place Order,
   validates name + phone (required), clears the bag, and sends the shopper
   to success.html. Address/payment are collected for the (future) backend.
   -------------------------------------------------------------------------- */
(function () {
  const empty = document.getElementById('checkoutEmpty');
  const panel = document.getElementById('checkoutPanel');
  const list = document.getElementById('checkoutList');
  const totalEl = document.getElementById('checkoutTotal');
  const form = document.getElementById('checkoutForm');
  if (!empty || !panel || !list || !totalEl || !window.ShopistikBag) return;

  const { getBag, saveBag } = window.ShopistikBag;
  const firstName = document.getElementById('checkoutFirstName');
  const lastName = document.getElementById('checkoutLastName');
  const phone = document.getElementById('checkoutPhone');
  const address = document.getElementById('checkoutAddress');
  const formError = document.getElementById('checkoutFormError');
  const transferDetails = document.getElementById('checkoutTransferDetails');

  function t(key, fallback) {
    return window.ShopistikI18n ? window.ShopistikI18n.t(key) : fallback || key;
  }

  function syncTransferDetails() {
    if (!transferDetails || !form) return;
    const selected = form.querySelector('input[name="payment"]:checked');
    const showTransfer = selected && selected.value === 'transfer';
    transferDetails.hidden = !showTransfer;
  }

  function formatPrice(amount) {
    if (window.ShopistikCurrency) return window.ShopistikCurrency.formatUsd(amount);
    const fixed = Number(amount).toFixed(2);
    return `$${fixed.endsWith('.00') ? fixed.slice(0, -3) : fixed}`;
  }

  function setFieldInvalid(field, invalid) {
    if (!field) return;
    field.classList.toggle('is-invalid', !!invalid);
    field.setAttribute('aria-invalid', invalid ? 'true' : 'false');
  }

  function clearValidation() {
    [firstName, lastName, phone, address].forEach((field) => setFieldInvalid(field, false));
    if (formError) {
      formError.hidden = true;
      formError.textContent = '';
    }
  }

  function render() {
    const bag = getBag().filter((item) => item && Number(item.qty) > 0);
    if (!bag.length) {
      empty.hidden = false;
      panel.hidden = true;
      list.innerHTML = '';
      totalEl.textContent = formatPrice(0);
      return;
    }

    empty.hidden = true;
    panel.hidden = false;
    list.innerHTML = bag
      .map(
        (item) => `
        <li class="checkout__item">
          <span class="checkout__item-name">${item.name} × ${item.qty}</span>
          <span class="checkout__item-price">${formatPrice(item.price * item.qty)}</span>
        </li>`
      )
      .join('');

    const total = bag.reduce((sum, item) => sum + item.price * item.qty, 0);
    totalEl.textContent = formatPrice(total);
  }

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      clearValidation();

      const bag = getBag().filter((item) => item && Number(item.qty) > 0);
      if (!bag.length) {
        render();
        return;
      }

      const first = (firstName && firstName.value.trim()) || '';
      const last = (lastName && lastName.value.trim()) || '';
      const phoneVal = (phone && phone.value.trim()) || '';
      const addressVal = (address && address.value.trim()) || '';

      const nameMissing = !first || !last;
      const phoneMissing = !phoneVal;
      let firstInvalid = null;

      if (nameMissing) {
        if (!first) {
          setFieldInvalid(firstName, true);
          firstInvalid = firstInvalid || firstName;
        }
        if (!last) {
          setFieldInvalid(lastName, true);
          firstInvalid = firstInvalid || lastName;
        }
      }
      if (phoneMissing) {
        setFieldInvalid(phone, true);
        firstInvalid = firstInvalid || phone;
      }
      if (!addressVal) {
        setFieldInvalid(address, true);
        firstInvalid = firstInvalid || address;
      }

      if (nameMissing || phoneMissing || !addressVal) {
        if (formError) {
          formError.textContent = t(
            'checkoutRequired',
            'Please fill in your name and phone number.'
          );
          formError.hidden = false;
        }
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Frontend-only order: clear the bag, then land on the confirmation page.
      saveBag([]);
      window.location.href = 'success.html';
    });

    [firstName, lastName, phone, address].forEach((field) => {
      if (!field) return;
      field.addEventListener('input', () => {
        setFieldInvalid(field, false);
        if (formError && !formError.hidden) {
          formError.hidden = true;
          formError.textContent = '';
        }
      });
    });

    form.querySelectorAll('input[name="payment"]').forEach((radio) => {
      radio.addEventListener('change', syncTransferDetails);
    });
    syncTransferDetails();
  }

  document.addEventListener('shopistik:langchange', () => {
    render();
    if (formError && !formError.hidden) {
      formError.textContent = t(
        'checkoutRequired',
        'Please fill in your name and phone number.'
      );
    }
  });
  document.addEventListener('shopistik:bagchange', render);
  render();
})();
