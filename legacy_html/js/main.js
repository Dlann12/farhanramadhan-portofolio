// Portfolio Farhan Ramadhan - Main Interactive Script

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initExpModal();
  initGalleryFilter();
  initLightbox();
  initScrollReveal();
});

// Mobile Navigation Toggle
function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !isOpen);
    nav.classList.toggle('is-open', !isOpen);
  });

  // Close nav on click of link
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    });
  });

  // Close nav on click outside
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target) && nav.classList.contains('is-open')) {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    }
  });
}

// Experience Detail Modal
function initExpModal() {
  const dialog = document.getElementById('exp-dialog');
  const container = document.getElementById('exp-dialog-content');
  if (!dialog || !container) return;

  const buttons = document.querySelectorAll('[data-exp]');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const templateId = btn.getAttribute('data-exp');
      const tmpl = document.getElementById(templateId);
      if (!tmpl) return;

      container.innerHTML = '';
      container.appendChild(tmpl.content.cloneNode(true));
      dialog.showModal();
    });
  });

  // Close modal via close button
  dialog.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => dialog.close());
  });

  // Close when clicking backdrop
  dialog.addEventListener('click', (e) => {
    const rect = dialog.getBoundingClientRect();
    const isInDialog = (
      rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX && e.clientX <= rect.left + rect.width
    );
    if (!isInDialog) {
      dialog.close();
    }
  });
}

// Gallery Filtering
function initGalleryFilter() {
  const filters = document.querySelectorAll('.filter');
  const gallery = document.getElementById('gallery');
  const emptyMsg = document.querySelector('.gallery__empty');
  if (!filters.length || !gallery) return;

  const items = gallery.querySelectorAll('li');

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(f => {
        f.classList.remove('is-active');
        f.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-pressed', 'true');

      const cat = btn.getAttribute('data-filter');
      let visibleCount = 0;

      items.forEach(item => {
        const itemCat = item.getAttribute('data-cat');
        if (cat === 'all' || itemCat === cat) {
          item.classList.remove('is-hidden');
          visibleCount++;
        } else {
          item.classList.add('is-hidden');
        }
      });

      if (emptyMsg) {
        emptyMsg.hidden = visibleCount > 0;
      }
    });
  });
}

// Lightbox for Gallery Photos
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const imgEl = document.getElementById('lightbox-img');
  const capEl = document.getElementById('lightbox-cap');
  if (!lightbox || !imgEl || !capEl) return;

  let currentIndex = 0;

  function getVisibleShots() {
    return Array.from(document.querySelectorAll('#gallery li:not(.is-hidden) .shot'));
  }

  function showPhoto(index) {
    const visibleShots = getVisibleShots();
    if (!visibleShots.length) return;

    if (index < 0) index = visibleShots.length - 1;
    if (index >= visibleShots.length) index = 0;

    currentIndex = index;
    const shot = visibleShots[currentIndex];
    const img = shot.querySelector('img');
    if (!img) return;

    imgEl.src = img.src;
    imgEl.alt = img.alt || '';
    capEl.textContent = img.alt || '';
  }

  // Attach click to all shots
  document.querySelectorAll('#gallery .shot').forEach(shot => {
    shot.addEventListener('click', () => {
      const visibleShots = getVisibleShots();
      const index = visibleShots.indexOf(shot);
      if (index !== -1) {
        showPhoto(index);
        lightbox.showModal();
      }
    });
  });

  // Prev / Next buttons
  lightbox.querySelectorAll('[data-step]').forEach(btn => {
    btn.addEventListener('click', () => {
      const step = parseInt(btn.getAttribute('data-step'), 10) || 0;
      showPhoto(currentIndex + step);
    });
  });

  // Close buttons
  lightbox.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => lightbox.close());
  });

  // Backdrop click to close
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.close();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.open) return;
    if (e.key === 'ArrowLeft') {
      showPhoto(currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
      showPhoto(currentIndex + 1);
    }
  });
}

// Scroll Reveal Observer
function initScrollReveal() {
  const targets = document.querySelectorAll('[data-reveal]');
  if (!targets.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    targets.forEach(t => t.classList.add('is-revealed'));
    return;
  }

  document.documentElement.classList.add('js-reveal');

  if (!('IntersectionObserver' in window)) {
    targets.forEach(t => t.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -20px 0px'
  });

  targets.forEach(t => {
    const rect = t.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      t.classList.add('is-revealed');
    } else {
      observer.observe(t);
    }
  });
}
