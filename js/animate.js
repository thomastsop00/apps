(function () {
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('scroll-reveal--visible');
      revealObserver.unobserve(e.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  var staggerObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.querySelectorAll('.scroll-reveal').forEach(function (child) {
        child.classList.add('scroll-reveal--visible');
      });
      staggerObserver.unobserve(e.target);
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll(
    '.app-description, .screenshots-section, .cta-section, .contact-content, .privacy-content'
  ).forEach(function (el) {
    el.classList.add('scroll-reveal');
    revealObserver.observe(el);
  });

  var stagger = [
    ['.highlights-section', '.highlight-item', 60],
    ['.features-section', '.feature-item', 60],
    ['.use-cases-section', '.use-case', 80],
    ['.reviews-section', '.review-card', 80],
    ['.more-apps-section', '.more-app-card', 60],
    ['.apps-section', '.app-card', 80],
    ['.privacy-principles', '.privacy-principle', 80]
  ];

  stagger.forEach(function (cfg) {
    document.querySelectorAll(cfg[0]).forEach(function (section) {
      var h2 = section.querySelector('h2');
      if (h2) {
        h2.classList.add('scroll-reveal');
      }
      section.querySelectorAll(cfg[1]).forEach(function (item, i) {
        item.classList.add('scroll-reveal');
        item.style.transitionDelay = (i * cfg[2] + (h2 ? 120 : 0)) + 'ms';
      });
      staggerObserver.observe(section);
    });
  });
})();
