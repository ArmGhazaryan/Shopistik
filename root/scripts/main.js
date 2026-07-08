// Shopistik — main script
// Vanilla JavaScript only — no frameworks, no build tools.
// Fetch calls to the API (e.g. fetch("/api/products")) and page logic go here.

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
   Only one item stays open at a time: opening one closes whichever other
   item was open first.
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

      // Accordion behaviour: collapse every other item before (or instead
      // of) opening this one, so at most one answer is ever visible.
      items.forEach((other) => {
        if (other !== item) setOpen(other, false);
      });
      setOpen(item, willOpen);
    });
  });

  // If the viewport is resized while an answer is open, its scrollHeight
  // may change (text reflows to a different number of lines). Re-measure
  // so the open answer never ends up clipped or leaving a gap.
  window.addEventListener('resize', () => {
    const openItem = document.querySelector('.faq-item.is-open');
    if (openItem) setOpen(openItem, true);
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
  }

  function updateBagCount(bag) {
    const count = bag.reduce((sum, item) => sum + item.qty, 0);
    document.querySelectorAll('[data-bag-count]').forEach((el) => {
      el.textContent = String(count);
      el.hidden = count === 0;
    });
  }

  function parsePrice(text) {
    return parseFloat(String(text).replace(/[^0-9.]/g, '')) || 0;
  }

  function addToBag(product) {
    const bag = getBag();
    const existing = bag.find((item) => item.name === product.name);
    if (existing) {
      existing.qty += 1;
    } else {
      bag.push(Object.assign({ qty: 1 }, product));
    }
    saveBag(bag);
  }

  // Every product card on the catalog/category pages has an "Add to Bag"
  // button; read the card's own text content instead of hard-coding data
  // twice, so the bag always matches whatever the page displays. The
  // category is stored by its translation *key* (e.g. "skincare"), not its
  // display text, so the bag stays correct regardless of which language was
  // active when the item was added — see the bag-rendering module below.
  document.querySelectorAll('.product-card__add').forEach((button) => {
    button.addEventListener('click', () => {
      const card = button.closest('.product-card');
      if (!card) return;

      const categoryEl = card.querySelector('.product-card__category');

      addToBag({
        name: card.querySelector('.product-card__name').textContent.trim(),
        category: categoryEl.getAttribute('data-i18n') || categoryEl.textContent.trim().toLowerCase(),
        price: parsePrice(card.querySelector('.product-card__price').textContent),
      });

      // Brief, reversible confirmation so the click feels acknowledged
      // without needing a toast/notification system.
      const originalText = button.textContent;
      button.textContent = window.ShopistikI18n ? window.ShopistikI18n.t('addedConfirm') : 'Added ✓';
      button.disabled = true;
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 1000);
    });
  });

  updateBagCount(getBag());

  // Shared with the bag-page rendering script below (and available to any
  // future page that needs to read/write the same cart).
  window.ShopistikBag = { getBag, saveBag };
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
    const fixed = amount.toFixed(2);
    return `$${fixed.endsWith('.00') ? fixed.slice(0, -3) : fixed}`;
  }

  function render() {
    const bag = getBag();

    if (!bag.length) {
      bagEmpty.hidden = false;
      bagBody.hidden = true;
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
    document.getElementById('bagSubtotal').textContent = formatPrice(subtotal);
    document.getElementById('bagTotal').textContent = formatPrice(subtotal);
  }

  // One delegated listener handles every row's stepper/remove buttons,
  // since rows are re-created on every render() call.
  bagList.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-action]');
    if (!button) return;

    const row = button.closest('.bag__item');
    const index = Number(row.dataset.index);
    const bag = getBag();
    if (!bag[index]) return;

    if (button.dataset.action === 'increase') {
      bag[index].qty += 1;
    } else if (button.dataset.action === 'decrease') {
      bag[index].qty -= 1;
      if (bag[index].qty <= 0) bag.splice(index, 1);
    } else if (button.dataset.action === 'remove') {
      bag.splice(index, 1);
    }

    saveBag(bag);
    render();
  });

  // Category labels are translated at render time (see categoryLabel above),
  // so switching language needs to re-render the already-visible bag list.
  document.addEventListener('shopistik:langchange', render);

  render();
})();
