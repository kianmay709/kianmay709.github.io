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


const auditForm = document.getElementById('audit-form');
const formStatus = document.getElementById('form-status');

auditForm?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const submitButton = auditForm.querySelector('button[type="submit"]');
  const originalText = submitButton?.textContent || 'Send audit enquiry';

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = 'Sending…';
  }
  if (formStatus) formStatus.textContent = 'Sending your enquiry…';

  try {
    const response = await fetch(auditForm.action, {
      method: 'POST',
      body: new FormData(auditForm),
      headers: { Accept: 'application/json' }
    });

    if (!response.ok) throw new Error('Form submission failed');

    window.location.href = '/thank-you.html';
  } catch (error) {
    if (formStatus) {
      formStatus.textContent = 'Something went wrong. Please try again, or email kian@stonevalecommerce.com directly.';
    }
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }
  }
});
