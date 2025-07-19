function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('preferred-theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('preferred-theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for contacting! We'll get back to you soon.");
  this.reset();
});


