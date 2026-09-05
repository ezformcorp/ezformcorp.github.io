(() => {
  document.documentElement.classList.add('js');
  const config = window.SITE_CONFIG || {};
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const digits = value => String(value || '').replace(/\D/g, '');

  $$('[data-tagline]').forEach(el => el.textContent = config.tagline || 'Custom-made corporate wear for organisations and professional teams.');
  $$('[data-phone]').forEach(el => el.textContent = config.phoneDisplay || '+60 16-411 1007');
  $$('[data-landline]').forEach(el => el.textContent = config.landlineDisplay || '+60 5-841 1007');
  $$('[data-email]').forEach(el => el.textContent = config.email || 'ezform7@gmail.com');
  $$('[data-location]').forEach(el => el.textContent = config.location || 'Taiping, Perak');
  $$('[data-phone-link]').forEach(el => el.href = `tel:+${digits(config.phoneWhatsApp || '60164111007')}`);
  $$('[data-landline-link]').forEach(el => el.href = `tel:+${digits(config.landlineDisplay || '6058411007')}`);
  $$('[data-email-link]').forEach(el => el.href = `mailto:${config.email || 'ezform7@gmail.com'}`);
  $$('[data-whatsapp-link]').forEach(el => el.href = `https://wa.me/${digits(config.phoneWhatsApp || '60164111007')}`);
  $('#year').textContent = new Date().getFullYear();

  const toggle = $('.nav-toggle');
  const menu = $('#nav-menu');
  const closeMenu = () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.querySelector('.sr-only').textContent = 'Open menu';
    document.body.classList.remove('menu-open');
  };
  toggle.addEventListener('click', () => {
    const open = !menu.classList.contains('open');
    menu.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.querySelector('.sr-only').textContent = open ? 'Close menu' : 'Open menu';
    document.body.classList.toggle('menu-open', open);
    if (open) $('#nav-menu a')?.focus();
  });
  $$('#nav-menu a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.classList.contains('open')) {
      closeMenu();
      toggle.focus();
    }
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .1 });
    $$('.reveal').forEach(el => observer.observe(el));
  } else {
    $$('.reveal').forEach(el => el.classList.add('visible'));
  }

  // Touch devices do not have a true hover state. Let users tap image-swap cards instead.
  const touchSwapQuery = window.matchMedia('(hover: none), (pointer: coarse)');
  $$('.hover-swap').forEach(swap => {
    const label = swap.getAttribute('aria-label') || 'Alternate product photo';

    const configureTouchSwap = () => {
      if (touchSwapQuery.matches) {
        swap.setAttribute('role', 'button');
        swap.setAttribute('tabindex', '0');
        swap.setAttribute('aria-pressed', swap.classList.contains('is-alt') ? 'true' : 'false');
        swap.setAttribute('aria-label', `${label}. Tap to switch photo.`);
      } else {
        swap.removeAttribute('role');
        swap.removeAttribute('tabindex');
        swap.removeAttribute('aria-pressed');
        swap.setAttribute('aria-label', label);
        swap.classList.remove('is-alt');
      }
    };

    const toggleTouchPhoto = () => {
      if (!touchSwapQuery.matches) return;
      const showingAlt = swap.classList.toggle('is-alt');
      swap.setAttribute('aria-pressed', String(showingAlt));
    };

    swap.addEventListener('click', toggleTouchPhoto);
    swap.addEventListener('keydown', event => {
      if (!touchSwapQuery.matches) return;
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleTouchPhoto();
      }
    });

    configureTouchSwap();
    if (typeof touchSwapQuery.addEventListener === 'function') {
      touchSwapQuery.addEventListener('change', configureTouchSwap);
    } else if (typeof touchSwapQuery.addListener === 'function') {
      touchSwapQuery.addListener(configureTouchSwap);
    }
  });

  const uniformPreview = $('#uniform-preview');
  const uniformColourName = $('#uniform-colour-name');
  const uniformSwatches = $$('.uniform-swatch');
  if (uniformPreview && uniformColourName && uniformSwatches.length) {
    uniformSwatches.forEach(button => {
      const preload = new Image();
      preload.src = button.dataset.image;
      button.addEventListener('click', () => {
        const colour = button.dataset.colour;
        uniformPreview.classList.add('is-changing');
        uniformPreview.src = button.dataset.image;
        uniformPreview.alt = `Woman wearing a ${colour.toLowerCase()} EZFORM ready-made corporate uniform`;
        uniformColourName.textContent = colour;
        const quoteColour = $('[name="colour"]');
        if (quoteColour) quoteColour.value = colour;
        uniformSwatches.forEach(swatch => {
          const active = swatch === button;
          swatch.classList.toggle('active', active);
          swatch.setAttribute('aria-pressed', String(active));
        });
        if (uniformPreview.complete) uniformPreview.classList.remove('is-changing');
      });
    });
    uniformPreview.addEventListener('load', () => uniformPreview.classList.remove('is-changing'));
  }


  const form = $('#quote-form');
  form.elements.deadline.min = new Date().toISOString().split('T')[0];
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const productList = [];
    if (data.get('product') && !productList.includes(data.get('product'))) productList.push(data.get('product'));
    const lines = [
      'Hello EZFORM, I would like to request a quote for corporate wear.',
      '',
      `Name: ${data.get('name')}`,
      `Organisation: ${data.get('company') || '-'}`,
      `Phone: ${data.get('phone')}`,
      `Email: ${data.get('email') || '-'}`,
      `Design type: ${productList.length ? productList.join(', ') : 'Not sure'}`,
      `Quantity: ${data.get('quantity') || 'Not confirmed'}`,
      `Sleeves: ${data.get('sleeve') || 'Not sure'}`,
      `Team: ${data.get('gender') || 'Not sure'}`,
      `Primary colour: ${data.get('colour') || 'Not specified'}`,
      `Required date: ${data.get('deadline') || 'Not specified'}`,
      '',
      'Design / specifications:',
      data.get('message') || 'Not specified'
    ];
    const number = digits(config.phoneWhatsApp || '60164111007');
    window.location.href = `https://wa.me/${number}?text=${encodeURIComponent(lines.join('\n'))}`;
  });
})();
