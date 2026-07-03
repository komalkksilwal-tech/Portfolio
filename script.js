// ===== TYPED TEXT =====
var typed = new Typed('#element', {
  strings: ['the web.', 'real users.', 'clean UI.', 'the MERN stack.'],
  typeSpeed: 50,
  backSpeed: 35,
  backDelay: 1200,
  loop: true
});
// ===== MOBILE NAV TOGGLE =====
const burger = document.getElementById('burger');
const navList = document.getElementById('navList');
burger.addEventListener('click', () => {
  navList.classList.toggle('open');
  burger.classList.toggle('active');
});
navList.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navList.classList.remove('open'));
});
// ===== CURSOR GLOW =====
const glow = document.getElementById('cursorGlow');
window.addEventListener('mousemove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});
// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll('.reveal, .skill-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));
// ===== BACK TO TOP =====
const toTopBtn = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    toTopBtn.classList.add('show');
  } else {
    toTopBtn.classList.remove('show');
  }
});
toTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
