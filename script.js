  // Scroll indicator
  window.addEventListener('scroll', () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      document.getElementById('scrollIndicator').style.width = scrolled + '%';
  });

  // Navbar background on scroll
  window.addEventListener('scroll', () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 100) {
          navbar.style.background = 'rgba(0, 0, 0, 0.4)';
      } else {
          navbar.style.background = 'rgba(255, 255, 255, 0.1)';
      }
  });

  // Create floating particles
  function createParticles() {
      const particles = document.getElementById('particles');
      for (let i = 0; i < 60; i++) {
          const particle = document.createElement('div');
          particle.className = 'particle';
          particle.style.left = Math.random() * 100 + '%';
          particle.style.animationDelay = Math.random() * 12 + 's';
          particle.style.animationDuration = (Math.random() * 4 + 8) + 's';
          particles.appendChild(particle);
      }
  }

  // Intersection Observer for scroll animations
  const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animated');
          }
      });
  }, observerOptions);

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              target.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
          }
      });
  });

  // Enhanced hover effects for cards
  document.querySelectorAll('.feature-card, .pricing-card, .testimonial-card').forEach(card => {
      card.addEventListener('mouseenter', function() {
          this.style.transform = this.style.transform.replace('translateY(80px)', 'translateY(-15px)').replace('translateY(100px)', 'translateY(-20px)').replace('translateY(120px)', 'translateY(-15px)').replace('translateY(160px)', 'translateY(-15px)').replace('translateY(200px)', 'translateY(-15px)') + ' scale(1.02)';
      });
      
      card.addEventListener('mouseleave', function() {
          if (this.classList.contains('featured')) {
              this.style.transform = 'translateY(-20px) scale(1.05)';
          } else {
              this.style.transform = this.style.transform.replace('scale(1.02)', '').replace('translateY(-15px)', 'translateY(0)').replace('translateY(-20px)', 'translateY(0)');
          }
      });
  });

  // Initialize animations on page load
  window.addEventListener('load', () => {
      createParticles();
      
      // Observe elements for scroll animations
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
          observer.observe(el);
      });
  });

  // Enhanced CTA button effects
  document.querySelectorAll('.cta-button').forEach(button => {
      button.addEventListener('mouseenter', function() {
          this.style.boxShadow = '0 25px 50px rgba(255, 107, 107, 0.4), 0 0 40px rgba(78, 205, 196, 0.3)';
          this.style.transform = 'translateY(-8px) scale(1.05)';
      });
      
      button.addEventListener('mouseleave', function() {
          this.style.boxShadow = '0 15px 35px rgba(255, 107, 107, 0.3)';
          this.style.transform = 'translateY(0) scale(1)';
      });
  });

  // Parallax effect for hero section
  window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero');
      const productShowcase = document.querySelector('.product-showcase');
      
      if (hero && productShowcase) {
          productShowcase.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
  });
