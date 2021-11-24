var index = 0;



function addContentItemBySlick(item) {
  $('.weather-content-list').slick("slickAdd", item);
  index++;
}

$('.weather-content-list').slick({
  dots: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<i class="fas fa-chevron-left prev-arrow d-flex justify-content-center align-items-center"></i>',
  nextArrow: '<i class="fas fa-chevron-right next-arrow d-flex justify-content-center align-items-center"></i>',
});
		