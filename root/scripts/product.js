// Shopistik — product detail page
// Reads ?id= from the URL, looks up the matching entry in
// window.ShopistikProducts, and fills the PDP markup. Add-to-bag uses the
// shared ShopistikBag API from main.js (including quantity).

(function () {
  const section = document.getElementById('pdpSection');
  const missing = document.getElementById('pdpMissing');
  if (!section || !missing) return;

  const products = window.ShopistikProducts || [];
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  const product = products.find((item) => item.id === productId);

  if (!product) {
    section.hidden = true;
    missing.hidden = false;
    return;
  }

  missing.hidden = true;
  section.hidden = false;

  let qty = 1;

  function t(key, fallback) {
    return window.ShopistikI18n ? window.ShopistikI18n.t(key) : fallback || key;
  }

  function formatPrice(amount) {
    if (window.ShopistikCurrency) return window.ShopistikCurrency.formatUsd(amount);
    const fixed = Number(amount).toFixed(2);
    return `$${fixed.endsWith('.00') ? fixed.slice(0, -3) : fixed}`;
  }

  function setText(selector, value) {
    section.querySelectorAll(selector).forEach((el) => {
      el.textContent = value;
    });
  }

  function populate() {
    setText('[data-pdp="name"]', product.name);
    setText('[data-pdp="price"]', formatPrice(product.price));
    setText('[data-pdp="category"]', t(product.category, product.category));
    setText('[data-pdp="short"]', t(product.shortDesc, ''));
    setText('[data-pdp="description"]', t(product.description, ''));
    setText('[data-pdp="howToUse"]', t(product.howToUse, ''));
    setText('[data-pdp="ingredients"]', t(product.ingredients, ''));
    setText('[data-pdp="qty"]', String(qty));

    document.title = `${product.name} — Shopistik`;

    const media = section.querySelector('[data-pdp="media"]');
    if (media) {
      media.className = `pdp__media pdp__media--${product.media || 'one'}`;
    }

    const icon = section.querySelector('[data-pdp="icon"]');
    if (icon) {
      icon.innerHTML = product.icon || '';
    }

    const tag = section.querySelector('[data-pdp="tag"]');
    if (tag) {
      if (product.tag) {
        tag.hidden = false;
        tag.setAttribute('data-i18n', product.tag);
        tag.textContent = t(product.tag, product.tag);
      } else {
        tag.hidden = true;
        tag.removeAttribute('data-i18n');
        tag.textContent = '';
      }
    }

    // Re-measure open accordion panels after text (and language) changes.
    section.querySelectorAll('.pdp-acc.is-open').forEach((item) => {
      const panel = item.querySelector('.pdp-acc__panel');
      if (panel) panel.style.maxHeight = `${panel.scrollHeight}px`;
    });
  }

  // Quantity stepper
  section.querySelectorAll('[data-pdp-qty]').forEach((button) => {
    button.addEventListener('click', () => {
      const action = button.getAttribute('data-pdp-qty');
      if (action === 'increase') {
        qty += 1;
      } else if (action === 'decrease' && qty > 1) {
        qty -= 1;
      }
      setText('[data-pdp="qty"]', String(qty));
    });
  });

  // Add to bag — hooks into the shared cart from main.js
  const addBtn = section.querySelector('[data-pdp="add"]');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      if (addBtn.disabled || addBtn.classList.contains('is-added')) return;
      if (!window.ShopistikBag || !window.ShopistikBag.addToBag) return;

      window.ShopistikBag.addToBag(
        {
          name: product.name,
          category: product.category,
          price: product.price,
          id: product.id,
        },
        qty
      );

      if (window.ShopistikBag.pulseBagFab) {
        window.ShopistikBag.pulseBagFab();
      }

      const originalText = addBtn.textContent;
      addBtn.classList.add('is-added');
      addBtn.textContent = t('addedConfirm', 'Added ✓');
      addBtn.disabled = true;
      setTimeout(() => {
        addBtn.classList.remove('is-added');
        addBtn.textContent = t('addToBag', originalText);
        addBtn.disabled = false;
      }, 1100);
    });
  }

  // Accordion (same max-height pattern as the FAQ on the homepage)
  const accItems = section.querySelectorAll('.pdp-acc');

  function setAccOpen(item, open) {
    const trigger = item.querySelector('.pdp-acc__trigger');
    const panel = item.querySelector('.pdp-acc__panel');
    item.classList.toggle('is-open', open);
    trigger.setAttribute('aria-expanded', String(open));
    panel.style.maxHeight = open ? `${panel.scrollHeight}px` : '0px';
  }

  accItems.forEach((item) => {
    const trigger = item.querySelector('.pdp-acc__trigger');
    // Description starts open in the markup — set its measured height now.
    if (item.classList.contains('is-open')) {
      setAccOpen(item, true);
    }

    trigger.addEventListener('click', () => {
      const willOpen = !item.classList.contains('is-open');
      accItems.forEach((other) => {
        if (other !== item) setAccOpen(other, false);
      });
      setAccOpen(item, willOpen);
    });
  });

  window.addEventListener('resize', () => {
    const openItem = section.querySelector('.pdp-acc.is-open');
    if (openItem) setAccOpen(openItem, true);
  });

  document.addEventListener('shopistik:langchange', populate);

  populate();
})();
