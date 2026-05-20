(function () {
  'use strict';

  document.querySelectorAll('[data-tp-carousel]').forEach(function (root) {
    var track     = root.querySelector('[data-tp-track]');
    var cards     = root.querySelectorAll('[data-tp-card]');
    var btnPrev   = root.querySelector('[data-tp-prev]');
    var btnNext   = root.querySelector('[data-tp-next]');
    var dotsWrap  = root.querySelector('[data-tp-dots]');
    var total     = cards.length;
    var current   = 0;
    var autoTimer = null;
    var cardW     = 0;
    var gap       = 16;
    var perView   = 1;

    if (!track || total === 0) return;

    /* ── Build dots ── */
    function buildDots() {
      if (!dotsWrap) return;
      dotsWrap.innerHTML = '';
      var pages = Math.ceil(total / perView);
      for (var i = 0; i < pages; i++) {
        var d = document.createElement('button');
        d.className  = 'tp-dot' + (i === 0 ? ' is-active' : '');
        d.type       = 'button';
        d.setAttribute('aria-label', 'Gå till sida ' + (i + 1));
        d.dataset.page = i;
        d.addEventListener('click', function () { goTo(+this.dataset.page); resetAuto(); });
        dotsWrap.appendChild(d);
      }
    }

    /* ── Measure ── */
    function measure() {
      var w = root.offsetWidth;
      if (w >= 1024)      perView = 4;
      else if (w >= 768)  perView = 2;
      else                perView = 1;

      cardW = (root.offsetWidth - (perView - 1) * gap) / perView;
      cards.forEach(function (c) { c.style.minWidth = cardW + 'px'; });
      buildDots();
      goTo(0, true);
    }

    /* ── Navigate ── */
    function goTo(idx, instant) {
      var pages = Math.ceil(total / perView);
      current   = Math.max(0, Math.min(idx, pages - 1));

      var offset = current * (cardW + gap) * perView;
      track.style.transition = instant ? 'none' : 'transform 380ms cubic-bezier(0.4,0,0.2,1)';
      track.style.transform  = 'translateX(-' + offset + 'px)';

      if (btnPrev) btnPrev.disabled = current === 0;
      if (btnNext) btnNext.disabled = current >= pages - 1;

      if (dotsWrap) {
        dotsWrap.querySelectorAll('.tp-dot').forEach(function (d, i) {
          d.classList.toggle('is-active', i === current);
        });
      }
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    /* ── Auto-scroll ── */
    function startAuto() {
      var interval = parseInt(root.dataset.tpInterval, 10) || 4000;
      autoTimer = setInterval(function () {
        var pages = Math.ceil(total / perView);
        goTo(current >= pages - 1 ? 0 : current + 1);
      }, interval);
    }
    function resetAuto() {
      clearInterval(autoTimer);
      startAuto();
    }

    root.addEventListener('mouseenter', function () { clearInterval(autoTimer); });
    root.addEventListener('mouseleave', startAuto);

    /* ── Arrow buttons ── */
    if (btnPrev) btnPrev.addEventListener('click', function () { prev(); resetAuto(); });
    if (btnNext) btnNext.addEventListener('click', function () { next(); resetAuto(); });

    /* ── Touch / swipe ── */
    var touchX = 0;
    track.addEventListener('touchstart', function (e) {
      touchX = e.touches[0].clientX;
    }, { passive: true });
    track.addEventListener('touchend', function (e) {
      var diff = touchX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) { diff > 0 ? next() : prev(); resetAuto(); }
    }, { passive: true });

    /* ── Mouse drag ── */
    var dragX = 0; var dragging = false;
    track.addEventListener('mousedown', function (e) { dragging = true; dragX = e.clientX; });
    window.addEventListener('mouseup', function (e) {
      if (!dragging) return; dragging = false;
      var diff = dragX - e.clientX;
      if (Math.abs(diff) > 40) { diff > 0 ? next() : prev(); resetAuto(); }
    });

    /* ── Init ── */
    measure();
    startAuto();
    window.addEventListener('resize', function () { measure(); });
  });
})();
