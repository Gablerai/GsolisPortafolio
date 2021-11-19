"use strict";

var _ui = require("@fancyapps/ui");

require("@fancyapps/ui/dist/fancybox.css");

_ui.Fancybox.bind('[data-fancybox="gallery"]', {
  dragToClose: false,
  Toolbar: false,
  closeButton: "top",
  Image: {
    zoom: false
  },
  on: {
    initCarousel: function initCarousel(fancybox) {
      var slide = fancybox.Carousel.slides[fancybox.Carousel.page];
      fancybox.$container.style.setProperty("--bg-image", "url(\"".concat(slide.$thumb.src, "\")"));
    },
    "Carousel.change": function CarouselChange(fancybox, carousel, to, from) {
      var slide = carousel.slides[to];
      fancybox.$container.style.setProperty("--bg-image", "url(\"".concat(slide.$thumb.src, "\")"));
    }
  }
});