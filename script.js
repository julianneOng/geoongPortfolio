document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for your message! I will get back to you soon.');
    this.reset();
  });
  