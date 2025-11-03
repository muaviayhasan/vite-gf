export const introSlider = {
  nav: false,
  dots: false,
  margin: 20,
  loop: true,
  responsive: {
    1200: {
      nav: false,
    },
  },
};

export const trendingSlider = {
  nav: false,
  dots: true,
  margin: 20,
  loop: false,
  responsive: {
    320: {
      items: 2,
    },
    375: {
      items: 2,
    },
    480: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
    1200: {
      items: 4,
      nav: true,
    },
  },
};

export const blogSlider = {
  nav: false,
  dots: false,
  margin: 20,
  loop: false,
  responsive: {
    0: {
      items: 1,
    },
    520: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
  },
};

export const productSlider = {
  nav: false,
  dots: true,
  margin: 20,
  loop: false,
  responsive: {
    0: {
      items: 2,
    },
    480: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
    1200: {
      items: 4,
      nav: true,
      dots: false,
    },
  },
};

export const featuredSlider = {
  nav: true,
  dots: true,
  margin: 20,
  loop: false,
  autoPlay: false,
  responsive: {
    0: {
      items: 2,
    },
    320: {
      items: 2,
    },
    375: {
      items: 2,
    },
    600: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
};
