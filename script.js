document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato com você. 🎉');
    this.reset();
});
