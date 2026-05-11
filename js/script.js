//カルーセル
if (document.querySelector('.splide')) {
  new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    gap: '2rem',
    padding: '1rem',
    pagination: false,
    breakpoints: {
      900: {
        perPage: 2,
        padding: '2vw',
      },
      480: {
        perPage: 1,
        padding: '4vw',
      },
    },
  }).mount();
}

//ページトップ
(function () {
  window.addEventListener('scroll', () => {
    const winH = window.innerHeight;
    const header = document.querySelector('.header');
    const headerH = header.clientHeight;
    const pageTop = document.querySelector('.pageTop');
    const scrollY = window.scrollY;
    if (scrollY > winH - headerH) {
      pageTop.classList.add('is-show');
    } else {
      pageTop.classList.remove('is-show');
    }
  });
})();
