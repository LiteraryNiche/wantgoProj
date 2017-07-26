$(function(){
	/*3D效果*/
	 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : false
        }
    });
	 /*盒子效果*/
      /*  var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'cube',
        grabCursor: true,
        cube: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94
        }
    });*/
    $(".swiper-slide img").height(window.innerHeight*0.7);
})