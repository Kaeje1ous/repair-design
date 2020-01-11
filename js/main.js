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
  
  //Переменная для включения/отключения индикатора загрузки
var spinner = $('.ymap-container').children('.loader');
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
var check_if_load = false;
//Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
var myMapTemp, myPlacemarkTemp;
 
//Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
function init () {
  var myMapTemp = new ymaps.Map("map-yandex", {
    center: [47.244734, 39.723227], // координаты центра на карте
    zoom: 17, // коэффициент приближения карты
    controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
  });
  var myPlacemarkTemp = new ymaps.Placemark([47.244734, 39.723227], {
      balloonContent: "Здесь может быть ваш адрес",
  }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: './img/pin.svg',
      // Размеры метки.
      iconImageSize: [32, 32],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-25, -50],
  });
  myMapTemp.behaviors.disable('scrollZoom');
  myMapTemp.behaviors.disable('drag');
  myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту
 
  // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
  var layer = myMapTemp.layers.get(0).get(0);
 
  // Решение по callback-у для определения полной загрузки карты
  waitForTilesLoad(layer).then(function() {
    // Скрываем индикатор загрузки после полной загрузки карты
    spinner.removeClass('is-active');
  });
}
 
// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function() {
        resolve();
      });
    }
  });
}
 
function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
        | layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}
 
// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback){
  var script = document.createElement("script");
 
  if (script.readyState){  // IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  // Другие браузеры
    script.onload = function(){
      callback();
    };
  }
 
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
 
// Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
var ymap = function() {
  $('.ymap-container').mouseenter(function(){
      if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
 
	  	// Чтобы не было повторной загрузки карты, мы изменяем значение переменной
        check_if_load = true; 
 
		// Показываем индикатор загрузки до тех пор, пока карта не загрузится
        spinner.addClass('is-active');
 
		// Загружаем API Яндекс.Карт
        loadScript("https://api-maps.yandex.ru/2.1/?apikey=fb6ff9c2-4493-4bca-bfb9-f53626301af3&lang=ru_RU", function(){
           // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
           ymaps.load(init);
        });                
      }
    }
  );  
};
 
$(function() {
 
  //Запускаем основную функцию
  ymap();
 
});

$(function(){

  $('a[data-target="anchor"]').bind('click.smoothscroll', function(){
    var target = $(this).attr('href'),
        bl_top = $(target).offset().top - 80;
    $('body, html').animate({scrollTop: bl_top}, 700);
    return false;
  });
});


});




