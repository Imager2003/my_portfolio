const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');


/* =========================
   MOBILE NAVIGATION
========================= */

toggle?.addEventListener('click', () => {

  const isOpen = nav.classList.toggle('open');

  toggle.setAttribute(
    'aria-expanded',
    String(isOpen)
  );

});


/* Close menu after selecting a navigation item */

document.querySelectorAll('.nav a').forEach((link) => {

  link.addEventListener('click', () => {

    nav.classList.remove('open');

    toggle?.setAttribute(
      'aria-expanded',
      'false'
    );

  });

});


/* =========================
   SCROLL REVEAL
========================= */

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add('visible');

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);


document
  .querySelectorAll('.reveal')
  .forEach((element) => {

    observer.observe(element);

  });
