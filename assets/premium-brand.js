/* Premium Brand JS — Scroll animations, FAQ, Gallery, Counters */

(function () {
  'use strict';

  // Intersection Observer for fade-in animations
  function initScrollAnimations() {
    const els = document.querySelectorAll('.pb-fade-in');
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => io.observe(el));
  }

  // FAQ accordion
  function initFAQ() {
    document.querySelectorAll('.pb-faq__question').forEach((btn) => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.pb-faq__item');
        const isOpen = item.classList.contains('is-open');
        // Close all
        document.querySelectorAll('.pb-faq__item.is-open').forEach((o) => o.classList.remove('is-open'));
        if (!isOpen) item.classList.add('is-open');
      });
    });
  }

  // Product gallery thumbnails
  function initGallery() {
    const gallery = document.querySelector('.pb-product-gallery');
    if (!gallery) return;
    const mainImg = gallery.querySelector('.pb-product-gallery__main img');
    gallery.querySelectorAll('.pb-product-gallery__thumb').forEach((thumb) => {
      thumb.addEventListener('click', () => {
        gallery.querySelectorAll('.pb-product-gallery__thumb').forEach((t) => t.classList.remove('is-active'));
        thumb.classList.add('is-active');
        if (mainImg && thumb.dataset.src) mainImg.src = thumb.dataset.src;
      });
    });
  }

  // Animated counters
  function animateCounter(el) {
    const target = parseFloat(el.dataset.target || el.textContent.replace(/[^0-9.]/g, ''));
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 1800;
    const start = performance.now();
    const isFloat = String(target).includes('.');
    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = target * eased;
      el.textContent = prefix + (isFloat ? val.toFixed(1) : Math.round(val).toLocaleString('sv-SE')) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function initCounters() {
    const counters = document.querySelectorAll('.pb-counter');
    if (!counters.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { animateCounter(e.target); io.unobserve(e.target); } }),
      { threshold: 0.5 }
    );
    counters.forEach((c) => io.observe(c));
  }

  // Sticky ATC visibility on product page
  function initStickyATC() {
    const atc = document.querySelector('.pb-sticky-atc');
    const buybox = document.querySelector('.pb-add-to-cart');
    if (!atc || !buybox) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { atc.style.display = e.isIntersecting ? 'none' : 'block'; }),
      { threshold: 0 }
    );
    io.observe(buybox);
  }

  // Quantity selector
  function initQuantity() {
    document.querySelectorAll('.pb-product-quantity').forEach((wrap) => {
      const input = wrap.querySelector('.pb-product-quantity__value');
      wrap.querySelector('[data-action="decrease"]')?.addEventListener('click', () => {
        const v = parseInt(input.value || 1); if (v > 1) input.value = v - 1;
      });
      wrap.querySelector('[data-action="increase"]')?.addEventListener('click', () => {
        const v = parseInt(input.value || 1); input.value = v + 1;
      });
    });
  }

  // Variant selector
  function initVariants() {
    document.querySelectorAll('.pb-product-variants').forEach((wrap) => {
      wrap.querySelectorAll('.pb-product-variant').forEach((btn) => {
        btn.addEventListener('click', () => {
          wrap.querySelectorAll('.pb-product-variant').forEach((b) => b.classList.remove('is-active'));
          btn.classList.add('is-active');
        });
      });
    });
  }

  // Mobile menu helper: close on outside click
  function initMobileHelpers() {
    const html = document.documentElement;
    document.querySelectorAll('[data-pb-menu-toggle]').forEach((btn) => {
      btn.addEventListener('click', () => html.classList.toggle('pb-menu-open'));
    });
  }

  // Smooth scroll for anchor links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      });
    });
  }

  // Init on DOMContentLoaded
  function init() {
    initScrollAnimations();
    initFAQ();
    initGallery();
    initCounters();
    initStickyATC();
    initQuantity();
    initVariants();
    initMobileHelpers();
    initSmoothScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
