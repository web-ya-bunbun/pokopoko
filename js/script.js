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
