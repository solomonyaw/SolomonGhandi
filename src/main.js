import './index.css';

const ALBUMS = [
  {
    id: 'synergetics',
    title: 'Synergetics vs The Grunch of Giants',
    cover: 'https://picsum.photos/seed/synergetics/800/800',
    year: '2024',
    description: 'A confrontation between metaphysical intelligence and global control systems.',
    concept: 'Synergetics represents intelligence and systems thinking, while Grunch of Giants represents supranational corporate control. Inspired by R. Buckminster Fuller, this album narrates the awakening and collapse of control systems.'
  },
  {
    id: 'better-africa',
    title: 'A Better Africa with Fuller Ideas',
    cover: 'https://picsum.photos/seed/africa-fuller/800/800',
    year: '2025',
    isUpcoming: true,
    description: 'Exploring African development through systems thinking and innovation.',
    concept: 'This album reimagines Africa through the lens of sustainability, AI, and Buckminster Fuller’s design science revolution.'
  }
];

const VIDEOS = [
  { id: 'v1', title: 'Solomon Ghandi - Systems Thinking', thumbnail: 'https://picsum.photos/seed/vid1/640/360' },
  { id: 'v2', title: 'AI Hip-Hop Revolution', thumbnail: 'https://picsum.photos/seed/vid2/640/360' },
  { id: 'v3', title: 'The Grunch of Giants', thumbnail: 'https://picsum.photos/seed/vid3/640/360' }
];

const ARTIST_IMAGES = [
  'https://picsum.photos/seed/ghandi1/1200/800',
  'https://picsum.photos/seed/ghandi2/1200/800',
  'https://picsum.photos/seed/ghandi3/1200/800',
  'https://picsum.photos/seed/video-thumb/1200/800'
];

const PHILOSOPHY = [
  { title: "Systems Thinking", desc: "Understanding the interconnectedness of global control systems.", color: "text-gold" },
  { title: "AI Integration", desc: "Leveraging artificial intelligence for conscious expression.", color: "text-neon-blue" },
  { title: "African Identity", desc: "Reimagining African development through design science.", color: "text-ghana-green" },
  { title: "Conscious Hip-Hop", desc: "Music as a tool for education and challenging power.", color: "text-ghana-red" }
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

  // Inject Albums
  const albumsContainer = document.getElementById('albums-container');
  ALBUMS.forEach((album, index) => {
    const div = document.createElement('div');
    div.className = `flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center reveal`;
    div.innerHTML = `
      <div class="w-full md:w-1/2 relative group">
        <div class="absolute inset-0 bg-gold/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <img src="${album.cover}" alt="${album.title}" class="w-full aspect-square object-cover rounded-2xl shadow-2xl relative z-10 border border-white/10" referrerPolicy="no-referrer">
        ${album.isUpcoming ? '<div class="absolute top-6 left-6 z-20 bg-neon-blue text-black px-4 py-1 rounded-full text-xs font-black tracking-tighter">UPCOMING</div>' : ''}
      </div>
      <div class="w-full md:w-1/2 space-y-6">
        <div class="flex items-center gap-4 text-gold">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="animate-spin-slow"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>
          <span class="font-mono text-sm tracking-widest">${album.year}</span>
        </div>
        <h3 class="text-4xl md:text-5xl font-display font-bold leading-tight">${album.title}</h3>
        <p class="text-xl text-white/80 font-medium italic border-l-4 border-gold pl-6">${album.description}</p>
        <div class="space-y-4 text-white/60 leading-relaxed"><p>${album.concept}</p></div>
        <button class="flex items-center gap-3 text-gold font-bold tracking-widest uppercase text-sm group">
          Explore Concept <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-2 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </div>
    `;
    albumsContainer.appendChild(div);
  });

  // Inject Videos
  const videosGrid = document.getElementById('videos-grid');
  VIDEOS.forEach(video => {
    const div = document.createElement('div');
    div.className = "group cursor-pointer reveal";
    div.innerHTML = `
      <div class="relative aspect-video rounded-2xl overflow-hidden mb-4 border border-white/10">
        <img src="${video.thumbnail}" alt="${video.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer">
        <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <div class="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-gold group-hover:text-black transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
          </div>
        </div>
      </div>
      <h3 class="text-xl font-bold group-hover:text-gold transition-colors">${video.title}</h3>
    `;
    videosGrid.appendChild(div);
  });

  // Inject Philosophy
  const philGrid = document.getElementById('philosophy-grid');
  PHILOSOPHY.forEach(p => {
    const div = document.createElement('div');
    div.className = "glass p-10 rounded-[2.5rem] hover:border-gold/50 transition-colors group reveal";
    div.innerHTML = `
      <div class="mb-6 p-4 rounded-2xl bg-white/5 inline-block ${p.color} group-hover:scale-110 transition-transform">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.54-2.44V4.5A2.5 2.5 0 0 1 7 2z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.54-2.44V4.5A2.5 2.5 0 0 0 17 2z"></path></svg>
      </div>
      <h3 class="text-2xl font-display font-bold mb-4">${p.title}</h3>
      <p class="text-white/50 leading-relaxed">${p.desc}</p>
    `;
    philGrid.appendChild(div);
  });

  // Slider Logic
  const slidesContainer = document.getElementById('slides-container');
  const dotsContainer = document.getElementById('slider-dots');
  let currentSlide = 0;

  ARTIST_IMAGES.forEach((img, i) => {
    const slide = document.createElement('div');
    slide.className = "min-w-full h-full relative";
    slide.innerHTML = `
      <img src="${img}" class="w-full h-full object-cover" referrerPolicy="no-referrer">
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
      ${i === 3 ? '<div class="absolute inset-0 flex items-center justify-center"><div class="w-24 h-24 bg-gold text-black rounded-full flex items-center justify-center shadow-2xl"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></div></div>' : ''}
    `;
    slidesContainer.appendChild(slide);

    const dot = document.createElement('button');
    dot.className = `h-1.5 rounded-full transition-all duration-300 ${i === 0 ? 'w-12 bg-gold' : 'w-3 bg-white/30'}`;
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  function goToSlide(n) {
    currentSlide = n;
    slidesContainer.style.transform = `translateX(-${n * 100}%)`;
    Array.from(dotsContainer.children).forEach((dot, i) => {
      dot.className = `h-1.5 rounded-full transition-all duration-300 ${i === n ? 'w-12 bg-gold' : 'w-3 bg-white/30'}`;
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
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
});
