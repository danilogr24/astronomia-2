document.addEventListener('DOMContentLoaded', () => {
  // 1. Criação Dinâmica do Fundo Estelar
  createStarrySky();

  // 2. Revelação Elementar ao Rolar (Scroll Reveal Animation)
  setupScrollAnimations();
});

/**
 * Gera estrelas aleatórias no container fixo de fundo
 */
function createStarrySky() {
  const container = document.getElementById('stars-container');
  const starCount = 120; // Quantidade de estrelas no fundo

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    // Posições aleatórias
    const x = Math.random() * 100;
    const y = Math.random() * 100;

    // Tamanhos variáveis
    const size = Math.random() * 2.5 + 0.5;

    // Duração da animação de piscar aleatória
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
 * Adiciona animação de surgimento suave conforme o usuário rola a página
 */
function setupScrollAnimations() {
  const observerOptions = {
    root: null,
    threshold: 0.15
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

  // Seleciona cards e títulos para animar na rolagem
  const elementsToAnimate = document.querySelectorAll('.glass-card, .constelacao-card, .section-title');
  
  elementsToAnimate.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(el);
  });
}
