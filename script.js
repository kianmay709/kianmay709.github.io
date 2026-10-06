const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}

document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const form = document.getElementById('audit-form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const brand = data.get('brand') || 'Brand';
  const subject = `Profit Leak Audit enquiry — ${brand}`;
  const body = [
    `Name: ${data.get('name') || ''}`,
    `Work email: ${data.get('email') || ''}`,
    `Brand: ${brand}`,
    `TikTok Shop / website: ${data.get('url') || ''}`,
    `Approx. monthly TikTok Shop sales: ${data.get('sales') || ''}`,
    '',
    'What I would like Stonevale to investigate:',
    `${data.get('concern') || ''}`
  ].join('\n');
  window.location.href = `mailto:kian@stonevalecommerce.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});