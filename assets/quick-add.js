(function () {
  'use strict';

  /* ── Toast notification ── */
  function showToast(msg, ok) {
    var existing = document.getElementById('rl-toast');
    if (existing) existing.remove();

    var t = document.createElement('div');
    t.id = 'rl-toast';
    t.textContent = msg;
    t.style.cssText = [
      'position:fixed', 'bottom:24px', 'right:24px', 'z-index:9999',
      'background:' + (ok ? '#2d5a3d' : '#cc3333'),
      'color:#fff', 'font-family:Inter,sans-serif', 'font-size:14px',
      'font-weight:600', 'padding:13px 22px', 'border-radius:6px',
      'box-shadow:0 4px 16px rgba(0,0,0,0.18)',
      'transform:translateY(12px)', 'opacity:0',
      'transition:opacity 250ms ease,transform 250ms ease',
      'pointer-events:none'
    ].join(';');

    document.body.appendChild(t);
    requestAnimationFrame(function () {
      t.style.opacity = '1';
      t.style.transform = 'translateY(0)';
    });
    setTimeout(function () {
      t.style.opacity = '0';
      t.style.transform = 'translateY(12px)';
      setTimeout(function () { t.remove(); }, 260);
    }, 3000);
  }

  /* ── Update cart count badge ── */
  function updateCartBadge(count) {
    document.querySelectorAll(
      '[class*="cart-count"], .cart__count, [class*="cart-icon__bubble"], .cart-count-bubble'
    ).forEach(function (el) {
      el.textContent = count;
      el.style.display = count > 0 ? '' : 'none';
    });
  }

  /* ── Fetch cart count ── */
  function refreshCart() {
    fetch('/cart.js')
      .then(function (r) { return r.json(); })
      .then(function (c) { updateCartBadge(c.item_count); })
      .catch(function () {});
  }

  /* ── Quick-add handler ── */
  function handleQuickAdd(btn) {
    var variantId = btn.dataset.variantId;
    if (!variantId) return;

    btn.disabled = true;
    btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>';

    fetch('/cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ id: parseInt(variantId, 10), quantity: 1 })
    })
    .then(function (r) {
      if (!r.ok) throw new Error('failed');
      return r.json();
    })
    .then(function () {
      showToast('✓ Lagd i varukorg', true);
      refreshCart();
      setTimeout(function () {
        btn.disabled = false;
        btn.innerHTML = plusIcon();
      }, 1800);
    })
    .catch(function () {
      showToast('Kunde inte lägga till – försök igen', false);
      btn.disabled = false;
      btn.innerHTML = plusIcon();
    });
  }

  function plusIcon() {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>';
  }

  /* ── Delegate click on all quick-add buttons ── */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.rl-qadd-btn');
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();
    handleQuickAdd(btn);
  });

})();
