/* ==========================
   Dominic Castaneda Portfolio v2
   main.js
   ========================== */

// ===== Smooth Scroll (if you add nav anchors later) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  
  // ===== Animated Counters =====
  const counters = document.querySelectorAll(".stat h3");
  
  const startCounters = () => {
    counters.forEach(counter => {
      const target = +counter.textContent.replace(/\D/g, "");
      let current = 0;
      const increment = target / 100;
  
      const updateCount = () => {
        current += increment;
        if (current < target) {
          counter.textContent = `${Math.ceil(current)}+`;
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = `${target}+`;
        }
      };
      updateCount();
    });
  };
  
  // Trigger when visible
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounters();
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });
  
  observer.observe(document.querySelector(".stats"));
  
  // ===== Fade In Animation on Scroll =====
  const faders = document.querySelectorAll("section");
  
  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("fade-in");
      appearOnScroll.unobserve(entry.target);
    });
  }, appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
  