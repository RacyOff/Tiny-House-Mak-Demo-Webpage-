const TRANSLATIONS = {
  en: {
    gallery: [
      { src: 'images/image-01-enhanced.png', cap: 'Tiny House Glamping Mak by Šmartinsko Lake', cls: 't1' },
      { src: 'images/image-07-enhanced.png', cap: 'Lake view from the bed', cls: 't2' },
      { src: 'images/image-05-enhanced.png', cap: 'Cosy double bed and kitchenette', cls: 't3' },
      { src: 'images/image-03-enhanced.png', cap: 'Equipped kitchenette', cls: 't4' },
      { src: 'images/image-02-enhanced.png', cap: 'Private cinema projector', cls: 't5' },
      { src: 'images/image-04-enhanced.png', cap: 'Tiny house and lakeside grounds', cls: 't6' },
      { src: 'images/image-06-enhanced.png', cap: 'Towels and thoughtful details', cls: 't7' },
      { src: 'images/image-08-enhanced.png', cap: 'Šmartinsko Lake', cls: 't8' },
    ],
    reviews: [
      { name: 'Petra', loc: 'Slovenia', date: 'Booking.com review', text: 'Just like the photos: comfortable for a longer stay, with beautiful surroundings, a lake view and functional furnishings.' },
      { name: 'Ana', loc: 'Croatia', date: 'Booking.com review', text: 'A wonderful little house for escaping everyday life. Highly recommended, with quick and easy communication.' },
      { name: 'Bojan', loc: 'Serbia', date: 'Booking.com review', text: 'Excellent for a couple to relax and rest. The space is small, yet it has everything needed for the stay.' },
      { name: 'Optika Bistra', loc: 'Google', date: 'Google review · 5/5 · 2 months ago', verified: false, text: 'A wonderful little house in peaceful surroundings with a superb view. A truly excellent, idyllic location. Everything you need for company and a pleasant stay. I will gladly return.' },
    ],
    verifiedStay: 'Verified stay',
    inquirySubject: 'Tiny House Glamping Mak inquiry',
    inquiryIntro: 'Hello, I would like to inquire about a stay at Tiny House Glamping Mak.',
    arrivalLabel: 'Arrival',
    departureLabel: 'Departure',
    guestsLabel: 'Guests',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    messageLabel: 'Message',
    invalidEmail: 'Please enter a valid email address.',
  },
  sl: {
    gallery: [
      { src: 'images/image-01-enhanced.png', cap: 'Glamping Hiška Mak ob Šmartinskem jezeru', cls: 't1' },
      { src: 'images/image-07-enhanced.png', cap: 'Pogled na jezero iz postelje', cls: 't2' },
      { src: 'images/image-05-enhanced.png', cap: 'Udobna zakonska postelja in kuhinjska niša', cls: 't3' },
      { src: 'images/image-03-enhanced.png', cap: 'Opremljena kuhinjska niša', cls: 't4' },
      { src: 'images/image-02-enhanced.png', cap: 'Zasebni kino s projektorjem', cls: 't5' },
      { src: 'images/image-04-enhanced.png', cap: 'Hiška in okolica ob jezeru', cls: 't6' },
      { src: 'images/image-06-enhanced.png', cap: 'Brisače in premišljene podrobnosti', cls: 't7' },
      { src: 'images/image-08-enhanced.png', cap: 'Šmartinsko jezero', cls: 't8' },
    ],
    reviews: [
      { name: 'Petra', loc: 'Slovenija', date: 'Booking.com komentar', text: 'Nastanitev je taka kot na slikah, udobna tudi za več dni, z lepo okolico, pogledom na jezero in funkcionalno opremo.' },
      { name: 'Ana', loc: 'Hrvaška', date: 'Booking.com komentar', text: 'Čudovita hiška za pobeg od vsakdanjega življenja. Zelo priporočljivo, dogovor pa je bil hiter in preprost.' },
      { name: 'Bojan', loc: 'Srbija', date: 'Booking.com komentar', text: 'Odlična nastanitev za par, ki si želi sprostitve. Prostor je majhen, vendar ponuja vse potrebno za bivanje.' },
      { name: 'Optika Bistra', loc: 'Google', date: 'Google mnenje · 5/5 · pred 2 mesecema', verified: false, text: 'Super hiška, v mirnem okolju, razgled super. Res odlična idilična lokacija. Vse kar potrebuješ je dobra družba in lepo vreme. Z veseljem se vrnem.' },
    ],
    verifiedStay: 'Preverjeno bivanje',
    inquirySubject: 'Povpraševanje Glamping Hiška Mak',
    inquiryIntro: 'Pozdravljeni, zanima me bivanje v nastanitvi Glamping Hiška Mak.',
    arrivalLabel: 'Prihod',
    departureLabel: 'Odhod',
    guestsLabel: 'Gosti',
    phoneLabel: 'Telefon',
    emailLabel: 'E-pošta',
    messageLabel: 'Sporočilo',
    invalidEmail: 'Vnesite veljaven e-poštni naslov.',
  },
};

const lang = document.documentElement.lang.toLowerCase().startsWith('sl') ? 'sl' : 'en';
const messages = TRANSLATIONS[lang];

const grid = document.getElementById('grid');
messages.gallery.forEach((item, index) => {
  const tile = document.createElement('div');
  tile.className = `tile ${item.cls}`;
  tile.dataset.idx = index;
  tile.innerHTML = `<img src="${item.src}" alt="${item.cap}" loading="lazy" /><span class="plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg></span>`;
  tile.addEventListener('click', () => openLB(index));
  grid.appendChild(tile);
});

const reviewCards = document.getElementById('reviewCards');
messages.reviews.forEach((review, index) => {
  const card = document.createElement('div');
  card.className = 'rcard';
  card.style.transitionDelay = `${index * 120}ms`;
  const reviewMeta = review.verified === false ? review.date : `${review.date} · ${messages.verifiedStay}`;
  card.innerHTML = `<div class="top"><div class="who"><div class="avatar">${review.name[0]}</div><div><div class="name">${review.name}</div><div class="loc">${review.loc}</div></div></div></div><q>${review.text}</q><div class="date">${reviewMeta}</div>`;
  reviewCards.appendChild(card);
});

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal,.tile,.rcard').forEach((el) => io.observe(el));

const lb = document.getElementById('lb');
const lbImg = document.getElementById('lbImg');
const lbCounter = document.getElementById('lbCounter');
let lbIdx = 0;
function updateLightbox() {
  const item = messages.gallery[lbIdx];
  lbImg.src = item.src;
  lbImg.alt = item.cap;
  lbCounter.textContent = `${String(lbIdx + 1).padStart(2, '0')} / ${String(messages.gallery.length).padStart(2, '0')}`;
}
function openLB(index) {
  lbIdx = index;
  updateLightbox();
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLB() {
  lb.classList.remove('open');
  document.body.style.overflow = '';
}
function nav(direction) {
  lbIdx = (lbIdx + direction + messages.gallery.length) % messages.gallery.length;
  lbImg.style.opacity = 0;
  window.setTimeout(() => {
    updateLightbox();
    lbImg.style.opacity = 1;
  }, 150);
}
lbImg.style.transition = 'opacity .2s';
lb.querySelector('.lb-close').addEventListener('click', closeLB);
lb.querySelector('.lb-nav.prev').addEventListener('click', () => nav(-1));
lb.querySelector('.lb-nav.next').addEventListener('click', () => nav(1));
lb.addEventListener('click', (event) => {
  if (event.target === lb) closeLB();
});
document.addEventListener('keydown', (event) => {
  if (!lb.classList.contains('open')) return;
  if (event.key === 'Escape') closeLB();
  if (event.key === 'ArrowRight') nav(1);
  if (event.key === 'ArrowLeft') nav(-1);
});

document.querySelector('.res-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const email = String(data.get('email') || '').trim();

  if (!email.includes('@')) {
    window.alert(messages.invalidEmail);
    form.querySelector('[name="email"]')?.focus();
    return;
  }

  const body = [
    messages.inquiryIntro,
    '',
    `${messages.arrivalLabel}: ${data.get('arrival') || ''}`,
    `${messages.departureLabel}: ${data.get('departure') || ''}`,
    `${messages.guestsLabel}: ${data.get('guests') || ''}`,
    `${messages.phoneLabel}: ${data.get('phone') || ''}`,
    `${messages.emailLabel}: ${email}`,
    '',
    `${messages.messageLabel}: ${data.get('message') || ''}`,
  ].join('\n');

  window.location.href = `mailto:info@littledreamhouse.si?subject=${encodeURIComponent(messages.inquirySubject)}&body=${encodeURIComponent(body)}`;
});
