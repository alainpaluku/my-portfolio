// Premium effects and interactions
export function initPremiumEffects() {
  // Scroll reveal animation
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // Magnetic effect for buttons and links
  const magneticElements = document.querySelectorAll('.magnetic');
  
  magneticElements.forEach((element) => {
    const el = element as HTMLElement;
    
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const moveX = x * 0.3;
      const moveY = y * 0.3;
      
      el.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
    
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0, 0)';
    });
  });

  // Parallax effect for hero section
  const parallaxElements = document.querySelectorAll('.parallax');
  
  if (parallaxElements.length > 0) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach((element) => {
        const el = element as HTMLElement;
        const speed = parseFloat(el.dataset.speed || '0.5');
        const yPos = -(scrolled * speed);
        el.style.transform = `translateY(${yPos}px)`;
      });
    });
  }

  // Smooth number counter animation
  const statNumbers = document.querySelectorAll('.stat-number');
  
  const animateCounter = (element: HTMLElement) => {
    const target = element.textContent?.trim() || '';
    const isNumber = /^\d+/.test(target);
    
    if (isNumber) {
      const num = parseInt(target);
      const duration = 2000;
      const steps = 60;
      const increment = num / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= num) {
          element.textContent = target;
          clearInterval(timer);
        } else {
          element.textContent = Math.floor(current).toString();
        }
      }, duration / steps);
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

  statNumbers.forEach(el => {
    const numberEl = el.querySelector('h3') as HTMLElement;
    if (numberEl) {
      statsObserver.observe(el);
    }
  });

  // Premium card tilt effect (3D)
  const card3dElements = document.querySelectorAll('.card-3d');
  
  card3dElements.forEach((card) => {
    const el = card as HTMLElement;
    
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = (anchor as HTMLAnchorElement).getAttribute('href');
      if (href && href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// Initialize on DOM load
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPremiumEffects);
  } else {
    initPremiumEffects();
  }
}
