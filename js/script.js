if (document.querySelector('.splide')) {
  new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    breakpoints: {
      900: {
        perPage: 2,
      },
      480: {
        perPage: 1,
      },
    },
  }).mount();
}
