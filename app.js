
  const paragraphs = document.querySelectorAll('.about p');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, { threshold: 0.6 }); // 60% visible

  paragraphs.forEach(p => observer.observe(p));



