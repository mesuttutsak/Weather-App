var index = 0;



function addContentItemBySlick(item) {
  $('.weather-content').slick("slickAdd", item);
  index++;
}

$('.weather-content').slick({
  dots: false,
  speed: 300,
  slidesToShow: 8,
  slidesToScroll: 2,
  prevArrow: '<i class="fas fa-chevron-left prev-arrow d-flex justify-content-center align-items-center"></i>',
  nextArrow: '<i class="fas fa-chevron-right next-arrow d-flex justify-content-center align-items-center"></i>',
});
		