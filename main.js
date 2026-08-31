document.addEventListener('DOMContentLoaded', () => {
  // 1. Criação Dinâmica do Fundo Estelar
  createStarrySky();

  // 2. Animação Scroll Reveal nos elementos ao rolar a página
  setupScrollAnimations();
});

/**
 * Gera o fundo de estrelas brilhantes dinamicamente
 */
function createStarrySky() {
  const container = document.getElementById('stars-container');
  const starCount = 140;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const size = Math.random() * 2.5 + 0.5;
    const duration = Math.random() * 4 + 2;

    star.style.left = `${x}vw`;
    star.style.top = `${y}vh`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.setProperty('--duration', `${duration}s`);

    container.appendChild(star);
  }
}

/**
 * Anima os cards e títulos ao entrarem na tela
 */
function setupScrollAnimations() {
  const observerOptions = {
    root: null,
    threshold: 0.12
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elementsToAnimate = document.querySelectorAll('.glass-card, .constelacao-card, .section-title');
  
  elementsToAnimate.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(el);
  });
}
