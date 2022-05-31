const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3500,

  },


  // And if we need scrollbar
  scrollbar: {
    hide: true,
  },
  a11y: {
    paginationBulletMessage: 'Декоративное изображение {{index}}',
  },
});
