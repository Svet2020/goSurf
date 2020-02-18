//-------------------Функция IBG

function ibg() {
  document.querySelectorAll(".ibg").forEach(el => {
    if (el.querySelector("img")) {
      el.style.backgroundImage =
        "url(" + el.querySelector("img").getAttribute("src") + ")";
    }
  });
}

ibg();

//-------------------Меню бургер

$(document).ready(function() {
  $(".menu__icon").click(function() {
    $(".menu__icon, .menu__list").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

//-------------------Клик вне области

$(document).on("click touchstart", function(e) {
  if (!$(e.target).is(".select *")) {
    $(".select").removeClass("active");
  }
});

//-------------------Фильтр

//$(".tabs-news__link[data-link='3']").css("color", "#000000");
$(document).ready(function filtr() {
  //$(".all").css("color", "#007397");
  $(".all").addClass("active");
  $(".tabs-news__link").click(function(event) {
    var i = $(this).data("filter");
    if (i == 3) {
      $(".news__card").show();
    } else {
      $(".news__card").hide();
      $(".news__card.f_" + i).show();
    }
    $(".tabs-news__link").removeClass("active");
    $(this).addClass("active");
    return false;
  });
});

//-------------------Добавление и удаление класса у элемента при наведении

$(document).ready(function hover() {
  $(".elem").addClass("initial"); // задаем начальный вид элементу, добавляя класс initial (необязательно)
  $(".elem").hover(
    function() {
      $(this).addClass("hover1"); // добавляем элементу доп. класс при наведении
    },
    function() {
      $(this).removeClass("hover1"); // удаляем у элемента добавленный при наведении класс
    }
  );
});

//-------------------Добавление класса взависимости от ширины экрана

$(document).ready(function() {
  if ($(window).width() < 1000) {
    $(".link-text").addClass(".link-text_b");
  }
});

//----------------Проверка формы на валидацию

/*function validate(form_id, email) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var address = document.forms[form_id].elements[email].value;
  if (reg.test(address) == false) {
    alert("Введите корректный e-mail");
    return false;
  }
}
validate(form_id1, form_email);*/

//---------------Замена текста в DOM-элементе

/*var header = 'new title';
$("#title1").text(header);*/

/*//ZOOM
if($('.gallery').length>0){
	baguetteBox.run('.gallery', {
		// Custom options
	});
}*/

/*var h = document.getElementById(newFunction()).offsetHeight;
function newFunction(height) {
  return 'height';
}*/

/* $(".header__burger").click(function() {
    $(".header__burger, .header__menu").toggleClass("active");
    $('body').toggleClass('lock');
  });
});*/

$(".header-card").mouseenter(function(event) {
  $(".header-card__image", this)
    .removeClass("bluebg")
    .addClass("bluebg-hover");
});
$(".header-card").mouseleave(function(event) {
  $(".header-card__image", this)
    .removeClass("bluebg-hover")
    .addClass("bluebg");
});

//-------------------Слайдер Slick

$(document).ready(function() {
  $(".main-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    fade: true,
    asNavFor: ".dots-slider"
  });
});

$(document).ready(function() {
  $(".dots-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 1,
    arrows: false,
    dots: false,
    //infinite: true,
    //fade: true,
    //swipeToSlide: true,
    asNavFor: ".main-slider"
  });
});

//-------------------Инициализация WOW.js

new WOW().init();

//-------------------Удаление элемента из html
$(document).ready(function() {
  $(".elem").css("display", "none");
});

// Анимирование карты в хедере
/*
$(document).ready(function() {
  $(".dot-1")
    .css({ opacity: 0 })
    .delay(1000)
    .animate({ opacity: 1 }, 1000, "linear");
});
$(document).ready(function() {
  $(".dot-2")
    .css({ opacity: 0 })
    .delay(2000)
    .animate({ opacity: 1 }, 1000, "linear");
});
$(document).ready(function() {
  $(".dot-3")
    .css({ opacity: 0 })
    .delay(3000)
    .animate({ opacity: 1 }, 1000, "linear");
});

$(document).ready(function() {
  $(".dot-4, .dot-4-text")
    .css({ opacity: 0 })
    .delay(4000)
    .animate({ opacity: 1 }, 1000, "linear");
});
$(document).ready(function() {
  $(".dot-5, .dot-5-text")
    .css({ opacity: 0 })
    .delay(7000)
    .animate({ opacity: 1 }, 1000, "linear");
});

$(document).ready(function() {
  $(".line-animation")
    .css({ 'stroke-dasharray': 600, 'stroke-dashoffset': 600 })
    .delay(4000)
    .animate({'stroke-dasharray': 600, 'stroke-dashoffset': 0 }, 3000, "linear");
});  */

// $(document).ready(function() {
//   $(".slider-item__title, .slider-item__subtitle")
//     .css({opacity: 0} )
//     .delay(1000)
//     .animate({ opacity: 1, color: "#000000", fontSize: "20px" }, 200, "linear");
// });
