$(document).ready(function () {
  $(".navbtn").click(function (event) {
    $("#sidebar").addClass("active");
    event.stopPropagation();
  });
  $(".closeBTN ").click(function (event) {
    $("#sidebar").removeClass("active");
    event.stopPropagation();
  });
  $("#sidebar").click(function (event) {
    event.stopPropagation();
  });
  $(document).click(function () {
    $("#sidebar").removeClass("active");
  });
  $(".detsilBox__link").click(function () {
    $(".detsilBox__link").removeClass("active");
    $(this).addClass("active");
    var matchID = $(this).attr("link");
    $(".detsilBox.active").removeClass("active");
    $(matchID).addClass("active");
  });

  var swiper = new Swiper(".bannerSlider", {
    slidesPerView: 1,
    speed: 400,
    loop: true,
    navigation: true,
    pagination: true,
    watchSlidesProgress: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      clickable: true,
    },
    pagination: {
      el: ".heropagination",
      clickable: true,
    },
  });
  var swiper2 = new Swiper(".videoSlider", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".videoSlider-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".videoSlider-next",
      prevEl: ".videoSlider-prev",
    },
    breakpoints: {
      68: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1280: {
        slidesPerView: 3,
      },
    },
  });
  var swiper3 = new Swiper(".videoSlider2", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".videoSlider-pagination2",
      clickable: true,
    },
    navigation: {
      nextEl: ".videoSlider-next2",
      prevEl: ".videoSlider-prev2",
    },
    breakpoints: {
      68: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });
  var swiper4 = new Swiper(".videoSlider3", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".videoSlider-pagination3",
      clickable: true,
    },
    navigation: {
      nextEl: ".videoSlider-next3",
      prevEl: ".videoSlider-prev3",
    },
    breakpoints: {
      68: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      1280: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  });
  var swiper5 = new Swiper(".videoSlider4", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".videoSlider-pagination4",
      clickable: true,
    },
    navigation: {
      nextEl: ".videoSlider-next4",
      prevEl: ".videoSlider-prev4",
    },
    breakpoints: {
      68: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      1280: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  });
});
