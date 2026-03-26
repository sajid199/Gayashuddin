// Particles
(function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `left:${Math.random()*100}%;width:${Math.random()*4+2}px;height:${Math.random()*4+2}px;animation-duration:${Math.random()*12+8}s;animation-delay:${Math.random()*8}s;opacity:${Math.random()*0.4+0.1};`;
    container.appendChild(p);
  }
})();

// Popup
function closePopup() {
  const popup = document.getElementById('sitePopup');
  if (popup) { popup.style.opacity='0'; popup.style.transition='opacity 0.3s'; setTimeout(()=>{popup.style.display='none';},300); }
}
window.addEventListener('load', function() {
  const popup = document.getElementById('sitePopup');
  if (popup) {
    setTimeout(function() {
      popup.style.display='flex';
      popup.style.opacity='0';
      popup.style.transition='opacity 0.4s';
      requestAnimationFrame(()=>{ popup.style.opacity='1'; });
    }, 5000);
    // Close on overlay click
    popup.addEventListener('click', function(e){ if(e.target===popup) closePopup(); });
  }
});

// Animate on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card,.testi-card,.contact-card,.cert-info-box,.online-step-card,.online-option-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Contact form
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    const orig = btn.textContent;
    btn.textContent = '✅ संदेश भेजा गया!';
    btn.disabled = true;
    btn.style.background = '#25D366';
    setTimeout(() => { btn.textContent = orig; btn.disabled = false; btn.style.background = ''; form.reset(); }, 3000);
  });
}
