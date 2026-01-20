/**
 * Premium effects and interactions - Optimized version
 * Refactored to use CSS animations where possible and respect user preferences
 */

// ============================================================================
// CONFIGURATION
// ============================================================================

const CONFIG = {
  REVEAL: {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  },
  MAGNETIC: {
    strength: 0.3,
    transition: 'transform 0.2s ease-out'
  },
  PARALLAX: {
    defaultSpeed: 0.5,
    mobileSpeedMultiplier: 0.5
  },
  COUNTER: {
    duration: 2000,
    steps: 60
  },
  CARD_3D: {
    perspective: 1000,
    maxRotation: 10,
    hoverLift: 8
  }
} as const;

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Détecte si l'utilisateur préfère les animations réduites
 */
function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Détecte si l'appareil est mobile
 */
function isMobileDevice(): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Détecte si l'appareil est low-end
 */
function isLowEndDevice(): boolean {
  return navigator.hardwareConcurrency ? navigator.hardwareConcurrency <= 2 : false;
}

// ============================================================================
// SCROLL REVEAL
// ============================================================================

function initScrollReveal() {
  if (prefersReducedMotion()) {
    // Si l'utilisateur préfère les animations réduites, révéler immédiatement
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
    return;
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, CONFIG.REVEAL);

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// ============================================================================
// MAGNETIC EFFECT
// ============================================================================

function initMagneticEffect() {
  if (prefersReducedMotion() || isMobileDevice()) return;

  const magneticElements = document.querySelectorAll('.magnetic');
  
  magneticElements.forEach((element) => {
    const el = element as HTMLElement;
    el.style.transition = CONFIG.MAGNETIC.transition;
    
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const moveX = x * CONFIG.MAGNETIC.strength;
      const moveY = y * CONFIG.MAGNETIC.strength;
      
      el.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
    
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0, 0)';
    });
  });
}

// ============================================================================
// PARALLAX EFFECT
// ============================================================================

function initParallax() {
  if (prefersReducedMotion() || isLowEndDevice()) return;

  const parallaxElements = document.querySelectorAll('.parallax');
  if (parallaxElements.length === 0) return;

  const isMobile = isMobileDevice();
  let ticking = false;
  let lastScrollY = 0;

  function updateParallax() {
    const scrolled = window.scrollY;
    
    // Optimisation mobile : skip si le scroll n'a pas beaucoup changé
    if (Math.abs(scrolled - lastScrollY) < 2 && isMobile) {
      ticking = false;
      return;
    }
    
    lastScrollY = scrolled;
    
    parallaxElements.forEach((element) => {
      const el = element as HTMLElement;
      const speed = parseFloat(el.dataset.speed || String(CONFIG.PARALLAX.defaultSpeed));
      const adjustedSpeed = isMobile ? speed * CONFIG.PARALLAX.mobileSpeedMultiplier : speed;
      const yPos = -(scrolled * adjustedSpeed);
      
      // Utiliser transform3d pour l'accélération matérielle
      el.style.transform = `translate3d(-50%, calc(-50% + ${yPos}px), 0)`;
    });
    
    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      if (isLowEndDevice()) {
        setTimeout(updateParallax, 16); // ~60fps
      } else {
        requestAnimationFrame(updateParallax);
      }
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick, { passive: true });
}

// ============================================================================
// NUMBER COUNTER
// ============================================================================

function initNumberCounter() {
  if (prefersReducedMotion()) return;

  const statNumbers = document.querySelectorAll('.stat-number');
  
  const animateCounter = (element: HTMLElement) => {
    const textElement = element.querySelector('p:last-child') as HTMLElement;
    if (!textElement) return;

    const target = textElement.textContent?.trim() || '';
    const match = target.match(/^\d+/);
    
    if (match) {
      const num = parseInt(match[0]);
      const suffix = target.replace(match[0], '');
      const increment = num / CONFIG.COUNTER.steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= num) {
          textElement.textContent = target;
          clearInterval(timer);
        } else {
          textElement.textContent = Math.floor(current) + suffix;
        }
      }, CONFIG.COUNTER.duration / CONFIG.COUNTER.steps);
    }
  };

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target as HTMLElement);
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(el => statsObserver.observe(el));
}

// ============================================================================
// 3D CARD TILT
// ============================================================================

function initCard3D() {
  if (prefersReducedMotion() || isMobileDevice()) return;

  const card3dElements = document.querySelectorAll('.card-3d');
  
  card3dElements.forEach((card) => {
    const el = card as HTMLElement;
    el.style.transition = 'transform 0.3s ease-out';
    
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * CONFIG.CARD_3D.maxRotation;
      const rotateY = ((centerX - x) / centerX) * CONFIG.CARD_3D.maxRotation;
      
      el.style.transform = `perspective(${CONFIG.CARD_3D.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-${CONFIG.CARD_3D.hoverLift}px)`;
    });
    
    el.addEventListener('mouseleave', () => {
      el.style.transform = `perspective(${CONFIG.CARD_3D.perspective}px) rotateX(0) rotateY(0) translateY(0)`;
    });
  });
}

// ============================================================================
// SMOOTH SCROLL
// ============================================================================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = (anchor as HTMLAnchorElement).getAttribute('href');
      if (href && href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: prefersReducedMotion() ? 'auto' : 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// ============================================================================
// VISIBILITY OPTIMIZATION
// ============================================================================

function initVisibilityOptimization() {
  document.addEventListener('visibilitychange', () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach((element) => {
      const el = element as HTMLElement;
      if (document.hidden) {
        el.style.animationPlayState = 'paused';
      } else {
        el.style.animationPlayState = 'running';
      }
    });
  });
}

// ============================================================================
// MAIN INITIALIZATION
// ============================================================================

export function initPremiumEffects() {
  initScrollReveal();
  initMagneticEffect();
  initParallax();
  initNumberCounter();
  initCard3D();
  initSmoothScroll();
  initVisibilityOptimization();
}

// Auto-initialize
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPremiumEffects);
  } else {
    initPremiumEffects();
  }
}
