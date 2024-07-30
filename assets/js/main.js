$(document).ready(function () {
  $(".navbtn").click(function(){
    $("#sidebar").addClass("active")
  })
  $(".closeBTN ").click(function(){
    $("#sidebar").removeClass("active")
  })
  var swiper = new Swiper(".bannerSlider", {
    slidesPerView: 1,
    navigation: true,
    speed: 400,
    pagination: true,
    loop: true,
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
});
