// script.js - Navbar toggle + FAQ accordion + Footer toggles + smooth scroll

document.addEventListener('DOMContentLoaded', function () {
  // Navbar toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.length > 1 && document.querySelector(href)) {
        e.preventDefault();
        const topOffset = 76; // account for fixed navbar
        const element = document.querySelector(href);
        const top = element.getBoundingClientRect().top + window.scrollY - topOffset;
        window.scrollTo({ top, behavior: 'smooth' });
        // close mobile nav if open
        if (navMenu && navMenu.classList.contains('active')) navMenu.classList.remove('active');
      }
    });
  });

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-question');
    if (q) {
      q.addEventListener('click', () => {
        item.classList.toggle('active');
        // Optionally close others (accordion single open) - comment out if multiple open allowed
        // document.querySelectorAll('.faq-item').forEach(i => { if (i !== item) i.classList.remove('active'); });
      });
    }
  });

  // Footer toggles on mobile
  document.querySelectorAll('.footer-toggle').forEach(title => {
    title.addEventListener('click', () => {
      const container = title.closest('.footer-section');
      if (container) container.classList.toggle('active');
    });
  });

  // Sticky navbar active class on scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) navbar.classList.add('scrolled'); else navbar.classList.remove('scrolled');
  });
});
