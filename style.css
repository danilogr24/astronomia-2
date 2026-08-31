/* ==========================================================================
   PALETA DE CORES:
   - Preto Brilhante: #04060A, #080C14
   - Azul Escuro Cósmico: #0A192F, #0E2A47
   - Cores da Bandeira do Brasil: Verde (#10B981, #059669) e Amarelo (#F59E0B, #FBBF24)
   - Vermelho Corporal Indígena (Urucum): #DC2626, #991B1B
   ========================================================================== */

:root {
  --bg-black-gloss: #04060A;
  --bg-navy-dark: #0A192F;
  --bg-card: rgba(8, 12, 20, 0.85);
  
  --silver-light: #E2E8F0;
  --silver-main: #CBD5E1;
  --silver-muted: #94A3B8;

  /* Cores Temáticas */
  --brazil-green: #10B981;
  --brazil-yellow: #FBBF24;
  --indigenous-red: #DC2626;
  --indigenous-red-dark: #991B1B;
  
  --font-heading: 'Cinzel', serif;
  --font-body: 'Montserrat', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  background-color: var(--bg-black-gloss);
  color: var(--silver-main);
  font-family: var(--font-body);
  line-height: 1.8;
  overflow-x: hidden;
}

/* Fundo estelar dinâmico */
#stars-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  pointer-events: none;
}

.star {
  position: absolute;
  background-color: #ffffff;
  border-radius: 50%;
  animation: twinkle var(--duration) infinite ease-in-out;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.2; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.3); }
}

/* ==========================================================================
   NAVEGAÇÃO
   ========================================================================== */
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(4, 6, 10, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 2px solid linear-gradient(90deg, var(--brazil-green), var(--brazil-yellow), var(--indigenous-red));
}

.navbar {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2rem;
}

.nav-logo {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.logo-accent-green { color: var(--brazil-green); }
.logo-accent-yellow { color: var(--brazil-yellow); }
.logo-accent-red { color: var(--indigenous-red); }

.nav-links {
  display: flex;
  list-style: none;
  gap: 1.2rem;
}

.nav-links a {
  color: var(--silver-muted);
  text-decoration: none;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  font-weight: 500;
}

.nav-links a:hover {
  color: var(--brazil-yellow);
  text-shadow: 0 0 8px rgba(251, 191, 36, 0.5);
}

/* ==========================================================================
   HERO / ENTRADA COM ANIMAÇÃO
   ========================================================================== */
.hero-section {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
}

.hero-bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(10, 25, 47, 0.5) 0%, rgba(4, 6, 10, 0.95) 95%);
  z-index: 1;
}

.hero-image-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.45;
  filter: brightness(0.85) contrast(1.1);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
  padding: 0 1.5rem;
}

h1.fade-in-title {
  font-family: var(--font-heading);
  font-size: 3rem;
  color: #ffffff;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.3), 0 0 30px rgba(220, 38, 38, 0.4);
}

.hero-subtitle {
  font-size: 1.2rem;
  color: var(--silver-main);
  font-weight: 300;
  margin-bottom: 2.5rem;
}

.btn-scroll {
  display: inline-block;
  padding: 0.8rem 2.2rem;
  border: 2px solid var(--indigenous-red);
  color: #ffffff;
  text-decoration: none;
  font-family: var(--font-heading);
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 0.85rem;
  transition: all 0.4s ease;
  background: rgba(4, 6, 10, 0.7);
  border-radius: 4px;
}

.btn-scroll:hover {
  background: var(--indigenous-red);
  box-shadow: 0 0 20px rgba(220, 38, 38, 0.7);
}

.animate-pulse {
  animation: subtleZoom 14s infinite alternate ease-in-out;
}

@keyframes subtleZoom {
  0% { transform: scale(1); }
  100% { transform: scale(1.06); }
}

/* ==========================================================================
   ESTRUTURA DE SEÇÕES E CARDS
   ========================================================================== */
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 5rem 1.5rem;
}

.section-title {
  font-family: var(--font-heading);
  font-size: 2.2rem;
  color: #ffffff;
  text-align: center;
  margin-bottom: 2.5rem;
  letter-spacing: 2px;
}

.section-title::after {
  content: '';
  display: block;
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, var(--brazil-green), var(--brazil-yellow), var(--indigenous-red));
  margin: 0.8rem auto 0;
}

.glass-card {
  background: var(--bg-card);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
  margin-bottom: 1.5rem;
}

.border-red-accent { border-left: 4px solid var(--indigenous-red); }
.border-green-accent { border-left: 4px solid var(--brazil-green); }

.glass-card p {
  margin-bottom: 1.2rem;
  text-align: justify;
}

.glass-card p:last-child {
  margin-bottom: 0;
}

.grid-2col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
}

.margin-top-large {
  margin-top: 3.5rem;
}

.subsection-title {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  color: var(--brazil-yellow);
  margin-bottom: 1.5rem;
}

/* Imagens das Seções */
.image-box {
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.border-yellow { border-color: var(--brazil-yellow); }

.content-img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.image-box:hover .content-img {
  transform: scale(1.04);
}

/* ==========================================================================
   CONSTELAÇÕES E ANIMAÇÕES SOLICITADAS
   ========================================================================== */
.constelacoes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.constelacao-card {
  padding: 0;
  overflow: hidden;
  border-top: 3px solid var(--brazil-yellow);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

/* Animação das imagens das constelações */
.constelacao-img-wrapper {
  width: 100%;
  height: 230px;
  overflow: hidden;
}

.constelacao-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease, filter 0.6s ease;
  animation: constelacaoGlow 8s infinite alternate ease-in-out;
}

.constelacao-card:hover .constelacao-img {
  transform: scale(1.12);
  filter: brightness(1.15);
}

@keyframes constelacaoGlow {
  0% { filter: brightness(0.9) contrast(1); }
  100% { filter: brightness(1.1) contrast(1.1); }
}

.constelacao-info {
  padding: 1.5rem;
}

.constelacao-info h3 {
  font-family: var(--font-heading);
  color: var(--brazil-yellow);
  margin-bottom: 0.8rem;
  font-size: 1.2rem;
}

.lenda-text {
  color: var(--silver-muted);
  border-left: 2px solid var(--indigenous-red);
  padding-left: 0.8rem;
  margin-top: 0.8rem;
  font-size: 0.9rem;
}

/* ==========================================================================
   ALÉM DA CIÊNCIA OCIDENTAL (FUNDOS DUPLOS)
   ========================================================================== */
.section-with-bg {
  position: relative;
  overflow: hidden;
  padding: 6rem 0;
}

.bg-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0.2;
}

.bg-layer-1 {
  z-index: 0;
  animation: fadeInOut 12s infinite alternate ease-in-out;
}

.bg-layer-2 {
  z-index: 0;
  animation: fadeInOut 12s infinite alternate-reverse ease-in-out;
}

@keyframes fadeInOut {
  0% { opacity: 0.1; }
  100% { opacity: 0.35; }
}

.relative-z {
  position: relative;
  z-index: 2;
}

.dark-glass {
  background: rgba(4, 6, 10, 0.92);
  border: 1px solid var(--indigenous-red);
}

/* ==========================================================================
   RODAPÉ / CRÉDITOS
   ========================================================================== */
.footer-section {
  background: #020305;
  border-top: 2px solid var(--indigenous-red-dark);
  padding-top: 3rem;
}

.footer-title {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
}

.title-red { color: var(--indigenous-red); }
.title-yellow { color: var(--brazil-yellow); }

.team-list, .ref-list {
  list-style: none;
}

.team-list li, .ref-list li {
  margin-bottom: 0.8rem;
  font-size: 0.9rem;
  color: var(--silver-muted);
}

.team-list strong {
  color: #ffffff;
}

.ref-list a {
  color: var(--brazil-green);
  text-decoration: underline;
  word-break: break-all;
}

.copyright {
  text-align: center;
  padding: 2rem 0;
  margin-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 0.8rem;
  color: var(--silver-muted);
}

/* ==========================================================================
   RESPONSIVIDADE
   ========================================================================== */
@media (max-width: 768px) {
  .nav-links { display: none; }
  h1.fade-in-title { font-size: 2rem; }
  .grid-2col { grid-template-columns: 1fr; }
}
