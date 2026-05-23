const form = document.getElementById('contactForm');
const msg = document.getElementById('formMessage');

form.addEventListener('submit', e => {
  e.preventDefault();
  msg.textContent = "Sending...";
  setTimeout(() => {
    msg.textContent = "Message sent successfully! I'll get back to you soon.";
    form.reset();
  }, 1000);
});