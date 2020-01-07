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
      next = $('.swiper-button-next');
      prev = $('.swiper-button-prev');
      bullets = $('.swiper-pagination');
      
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  next.css('left', prev.width() + 30 + bullets.width() + 30 );
  bullets.css('left', prev.width() + 30  );

  new WOW().init();

  // Валидация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    errorPlacement: function(error, element) {
      if (element.attr("name") == "modalCheckbox") {
//Здесь пиши любые операции если чекбокс не отмечен
          error.insertAfter(element.parent());
      } else {
          error.insertAfter(element);
      }
      return true;
  },
  ignore: ":disabled",
    rules: {
      // simple rule, converted to {required:true}
      modalCheckbox: {
        required: true
      },
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // compound rule
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      modalCheckbox: {
        required: "Необходимо пользовательское соглашение"
      },
      userName: {
        required: "Заполните поле",
        minlength: "Не менее 2 символов",
        maxlength: "Не более 15 символов"
      },
      userPhone: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера: ' + response);
          alert('Форма отправлена, мы свяжемся с вами через 10 минут');
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        }
      });
    }
  });

  $('.control__form').validate({
    errorClass: "invalid",
    errorPlacement: function(error, element) {
      if (element.attr("name") == "controlCheckbox") {
  //Здесь пиши любые операции если чекбокс не отмечен
          error.insertAfter(element.parent());
      } else {
          error.insertAfter(element);
      }
      return true;
  },
    ignore: ":disabled",
    rules: {
      controlCheckbox: {
        required: true
      },
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      controlCheckbox: {
        required: "Необходимо пользовательское соглашение"
      },
      userName: {
        required: "Заполните поле",
        minlength: "Не менее 2 символов",
        maxlength: "Не более 15 символов"
      },
      userPhone: "Заполните поле"
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера: ' + response);
          alert('Форма отправлена, мы свяжемся с вами через 10 минут');
          $(form)[0].reset();
        }
      });
    }
  });
  $('.footer__form').validate({
    errorClass: "invalid",
    errorPlacement: function(error, element) {
      if (element.attr("name") == "footerCheckbox") {
  //Здесь пиши любые операции если чекбокс не отмечен
          error.insertAfter(element.parent());
      } else {
          error.insertAfter(element);
      }
      return true;
  },
    rules: {
      footerCheckbox: {
        required: true
      },
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      userMsg: {
        required: true,
        maxlength: 50
      }
    },
    messages: {
      footerCheckbox: {
        required: "Необходимо пользовательское соглашение"
      },
      userName: {
        required: "Заполните поле",
        minlength: "Не менее 2 символов",
        maxlength: "Не более 15 символов"
      },
      userPhone: "Заполните поле",
      userMsg: {
        required: "Заполните поле",
        maxlength: "Не более 15 символов"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера: ' + response);
          alert('Форма отправлена, мы свяжемся с вами через 10 минут');
          $(form)[0].reset();
        }
      });
    }
  });
  // маска для телефона
  $('[type=tel]').mask('+7(999) 999-99-99', {placeholder: "+7 (999) 999-99-99"});
  // yandex maps
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [47.244734, 39.723227],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './img/pin.svg',
            // Размеры метки.
            iconImageSize: [32, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });
    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.disable('drag');     
    myMap.geoObjects
        .add(myPlacemark);
});
});




