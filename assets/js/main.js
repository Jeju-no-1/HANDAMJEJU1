/**
 * 한담길스테이 · Handamgil Stay
 * main.js
 *   · sticky nav shadow
 *   · smooth anchor scroll
 *   · fullbleed hero slideshow (auto + manual)
 *   · horizontal swipe sliders (oso / garden)
 *   · scroll reveal
 */
(function () {
  'use strict';

  /* ---------- Sticky nav subtle shadow ---------- */
  const nav = document.getElementById('siteNav');
  if (nav) {
    const onScroll = () => {
      nav.style.boxShadow = window.scrollY > 8
        ? '0 6px 20px -12px rgba(44,62,45,.18)'
        : 'none';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Smooth anchor scroll ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const headerOffset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ---------- Hero fullbleed slideshow ---------- */
  (function heroSlides() {
    const root = document.querySelector('.hero-slideshow');
    if (!root) return;
    const slides = Array.from(root.querySelectorAll('.slide'));
    const dots = Array.from(root.querySelectorAll('.hero-controls .dot'));
    if (!slides.length) return;

    let idx = 0;
    let timer = null;
    const INTERVAL = 6000;

    function go(n) {
      idx = (n + slides.length) % slides.length;
      slides.forEach((s, i) => s.classList.toggle('is-on', i === idx));
      dots.forEach((d, i) => d.classList.toggle('is-on', i === idx));
    }
    function next() { go(idx + 1); }
    function prev() { go(idx - 1); }
    function start() { clearInterval(timer); timer = setInterval(next, INTERVAL); }
    function stop() { clearInterval(timer); }

    root.querySelector('.hero-controls .prev')?.addEventListener('click', () => { prev(); start(); });
    root.querySelector('.hero-controls .next')?.addEventListener('click', () => { next(); start(); });
    dots.forEach((d) => d.addEventListener('click', () => { go(+d.dataset.idx); start(); }));
    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);

    start();
  })();

  /* ---------- Horizontal swipe sliders (oso, garden) ---------- */
  document.querySelectorAll('[data-slider]').forEach((wrap) => {
    const track = wrap.querySelector('.slider');
    const prevBtn = wrap.querySelector('.slider-nav .prev');
    const nextBtn = wrap.querySelector('.slider-nav .next');
    const bar = wrap.querySelector('.slider-progress span');

    if (!track) return;

    function scrollByDir(dir) {
      const first = track.querySelector('figure');
      const step = first ? first.getBoundingClientRect().width + 18 : track.clientWidth * 0.8;
      track.scrollBy({ left: dir * step, behavior: 'smooth' });
    }

    prevBtn?.addEventListener('click', () => scrollByDir(-1));
    nextBtn?.addEventListener('click', () => scrollByDir(+1));

    function updateProgress() {
      if (!bar) return;
      const max = track.scrollWidth - track.clientWidth;
      const pct = max > 0 ? Math.min(1, Math.max(0, track.scrollLeft / max)) : 0;
      const visiblePct = Math.min(1, track.clientWidth / Math.max(1, track.scrollWidth));
      bar.style.width = (visiblePct * 100).toFixed(1) + '%';
      bar.style.left = ((pct * (1 - visiblePct)) * 100).toFixed(1) + '%';

      if (prevBtn) prevBtn.disabled = track.scrollLeft <= 2;
      if (nextBtn) nextBtn.disabled = track.scrollLeft >= max - 2;
    }
    track.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    updateProgress();
  });

  /* ---------- Scroll reveal ---------- */
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('on');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll(
      '.section, .closing, .room-card, .policy, .booking-card'
    ).forEach((el) => { el.classList.add('reveal'); io.observe(el); });
  }
})();
