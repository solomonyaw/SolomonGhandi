import './index.css';

const ARTIST_IMAGES = [
  { url: 'https://picsum.photos/seed/ghandi1/1200/800', caption: 'African development through systems thinking' },
  { url: 'https://picsum.photos/seed/ghandi2/1200/800', caption: 'Innovation inspired by Buckminster Fuller' },
  { url: 'https://picsum.photos/seed/ghandi3/1200/800', caption: 'AI, sustainability, and technological advancement' },
  { url: 'https://picsum.photos/seed/video-thumb/1200/800', caption: 'Reimagining Africa through intelligence, design, and consciousness' }
];

document.addEventListener('DOMContentLoaded', () => {
  // Set Year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('glass', 'py-3');
      navbar.classList.remove('py-4');
    } else {
      navbar.classList.remove('glass', 'py-3');
      navbar.classList.add('py-4');
    }

    // Progress Bar
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('progress-bar').style.width = scrolled + "%";
  });

  // Mobile Menu
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('translate-y-0');
  });

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('translate-y-0'));
  });

  // Slider Logic
  const slidesContainer = document.getElementById('slides-container');
  const dotsContainer = document.getElementById('slider-dots');
  let currentSlide = 0;

  ARTIST_IMAGES.forEach((slideData, i) => {
    const slide = document.createElement('div');
    slide.className = "min-w-full h-full relative";
    slide.innerHTML = `
      <img src="${slideData.url}" class="w-full h-full object-cover" referrerPolicy="no-referrer">
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
      <div class="absolute bottom-20 left-12 right-12 text-left reveal">
        <p class="text-gold font-mono text-sm tracking-widest mb-2 uppercase">Vision 2025</p>
        <h2 class="text-3xl md:text-5xl font-display font-bold max-w-3xl">${slideData.caption}</h2>
      </div>
      ${i === 3 ? '<div class="absolute inset-0 flex items-center justify-center"><div class="w-24 h-24 bg-gold text-black rounded-full flex items-center justify-center shadow-2xl"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></div></div>' : ''}
    `;
    slidesContainer.appendChild(slide);

    const dot = document.createElement('button');
    dot.className = `h-1.5 rounded-full transition-all duration-300 ${i === 0 ? 'w-12 bg-gold' : 'w-3 bg-white/30'}`;
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  // Initialize first slide
  goToSlide(0);

  function goToSlide(n) {
    currentSlide = n;
    slidesContainer.style.transform = `translateX(-${n * 100}%)`;
    
    // Update dots
    Array.from(dotsContainer.children).forEach((dot, i) => {
      dot.className = `h-1.5 rounded-full transition-all duration-300 ${i === n ? 'w-12 bg-gold' : 'w-3 bg-white/30'}`;
    });

    // Handle caption animations
    Array.from(slidesContainer.children).forEach((slide, i) => {
      const caption = slide.querySelector('.reveal');
      if (i === n) {
        setTimeout(() => caption.classList.add('active'), 100);
      } else {
        caption.classList.remove('active');
      }
    });
  }

  document.getElementById('slider-next').addEventListener('click', () => goToSlide((currentSlide + 1) % ARTIST_IMAGES.length));
  document.getElementById('slider-prev').addEventListener('click', () => goToSlide((currentSlide - 1 + ARTIST_IMAGES.length) % ARTIST_IMAGES.length));

  setInterval(() => goToSlide((currentSlide + 1) % ARTIST_IMAGES.length), 5000);

  // Audio Player Logic
  const playToggle = document.getElementById('play-toggle');
  const playIcon = document.getElementById('play-icon');
  const pauseIcon = document.getElementById('pause-icon');
  const audioShimmer = document.getElementById('audio-shimmer');
  let isPlaying = false;

  playToggle.addEventListener('click', () => {
    isPlaying = !isPlaying;
    playIcon.classList.toggle('hidden');
    pauseIcon.classList.toggle('hidden');
    audioShimmer.classList.toggle('hidden');
  });

  setTimeout(() => {
    document.getElementById('audio-player').classList.remove('translate-y-[200%]', 'opacity-0');
  }, 3000);

  // Intersection Observer for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));

  // Mark as ready for reveal animations
  document.body.classList.add('reveal-ready');
});
