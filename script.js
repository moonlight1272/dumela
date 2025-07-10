document.addEventListener('DOMContentLoaded', function () {
  const observerOptions = { root: null, threshold: 0.1 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  document.querySelectorAll('.fade-in, .slide-up').forEach((el) => {
    observer.observe(el);
  });

   const toggle = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const storedTheme = localStorage.getItem('theme');

  // Apply stored theme if available, otherwise use system preference
  if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme);
  } else if (prefersDark.matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  // Toggle and remember user choice
  toggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });


  // Scroll to top
  const scrollBtn = document.getElementById('scrollTopBtn');
  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
    
    // Animated Stats Counter
const counters = document.querySelectorAll(".counter");
const animateCounters = () => {
  counters.forEach(counter => {
    const update = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;
      const increment = target / 100;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(update, 150);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });
};

const statsSection = document.querySelector("#stats");
const statsObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

statsObserver.observe(statsSection);


  };
  scrollBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

 // ScrollSpy - highlight active section link
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Typed JS
  var options = { strings:
       ['Hi, My name is Dumela Daka', 
        'I am a Web developer',
        'Junior Software Engineer',
        'Graphic Designer',
        'Junior Sound Engineer',
        'Social Media Manager',
        'Church Producer',
        'Photographer',
        'Junior Computer Scientist'
      ],
      typeSpeed: 55,   
      loop: false,
      loopCount: Infinity,
    };

var typed = new Typed('#hero-titles', options);


