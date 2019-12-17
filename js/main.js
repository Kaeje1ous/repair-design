$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close'),
      mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }),
      next = $('.swiper-button-next')
      prev = $('.swiper-button-prev')
      bullets = $('.swiper-pagination')
      
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  next.css('left', prev.width() + 30 + bullets.width() + 30 );
  bullets.css('left', prev.width() + 30  );
});



