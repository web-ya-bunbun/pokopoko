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

//フィルタリング
(function () {
  if (document.querySelector('.catfiltering')) {
    const item = document.querySelectorAll('.catsList__item');
    const select = document.getElementById('filtering');

    select.addEventListener('change', () => {
      const selectVal = select.value;
      item.forEach((elm) => {
        const sex = elm.dataset.sex;
        const age = elm.dataset.age;
        const color = elm.dataset.color;
        if (selectVal === 'all') {
          elm.classList.remove('is-hidden');
        } else {
          if (selectVal !== sex && selectVal !== age && selectVal !== color) {
            elm.classList.add('is-hidden');
          } else {
            elm.classList.remove('is-hidden');
          }
        }
      });
    });
  }
})();
