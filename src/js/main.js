let borderUrl = `url(\'images/banner.png\')`;

var swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: false,
    slidesPerView: 1,
    speed: 400,
    spaceBetween: 200,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.icon-right',
        prevEl: '.icon-left',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    breakpoints: {
        // When window width is <=767px
        767: {
            navigation: {
                nextEl: '.icon-right2',
            },
        },
    },
});

window.addEventListener('resize', function () {
    swiper.update();
});

var init = false;
var swiper1;
function swiperCard() {
    if (window.innerWidth <= 1209) {
        if (!init) {
            init = true;
            swiper1 = new Swiper(".swiper1", {
                direction: "horizontal",
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: 100,
            });
        }
    } else if (init) {
        swiper1.destroy();
        init = false;
    }
}


function nav() {
    var $toggle = $('.js-toggle');
    var open = 'toggle-open';
    var $nav = $('.js-nav');

    $toggle.on('click', function () {
        if ($toggle.hasClass(open)) {  //hasClass - metoda za proveru postojanja klase
            $toggle.removeClass(open);
            $nav.stop().slideUp(function () {   //ovako pozivamo callback funkciju koja se izvrsava nakon sto prva zavrsi (u ovom slucaju nakon sto se uvuce navigacija).
                $nav.removeAttr('style');
            });  //metoda stop() nam omogućava da se klikne samo jednom a ne vise puta (sprecava yoyo efekat ponovnog zatvaranja i otvaranja)
        } else {
            $toggle.addClass(open);
            $nav.stop().slideDown();
        }
    });
}

function inputOnFocus() {
    var $input = $('.js-input');
    var onFocus = 'on-focus';

    $input.focus(function () {
        $(this).addClass(onFocus);
    });

    $input.blur(function () {
        $(this).removeClass(onFocus)
    })
}

function addGradient(url) {
    var $gradient = $('.js-gradient');

    $(window).on('resize load', function () {    //osluškujemo širinu ekrana i svaki put kad smanjimo ili povećamo ekran trigeruje se ovaj događaj
        if ($(window).width() <= 1024) {
            $gradient.css('background', `linear-gradient(193.35deg, rgba(0, 3, 8, 0) 3.18%, rgba(0, 3, 8, 1) 56.87%), ${url}`);
        } else {
            $gradient.css('background', url)
        }
    });
}

function centerTable() {
    var $swiper = $('.js-swiper');
    var sw = 'swiper-wrapper'

    $(window).on('resize load', function () {
        if ($(window).width() <= 1209) {
            $swiper.addClass(sw);
            $('.swiper1').css('width', '585px')
        }
        else {
            $swiper.removeClass(sw);
        }
    });
}

function changePicturesForPhone() {
    var $logo = $('.js-header-img');
    var $blueWatch = $('.js-phone-img');

    $(window).on('resize load', function () {
        if ($(window).width() <= 767) {
            $logo.attr('src', 'images/phone/logo_phone.png');
            $blueWatch.attr('src', 'images/phone/blue-watch_phone.png');
        }
        else {
            $logo.attr('src', 'images/big-ben-logo.png');
            $blueWatch.attr('src', 'images/informations_img1.png');
        }
    });
}

function moveElement() {
    var container = $('.js-imgs');
    var element = $('.js-img2');
    var newContainer = $('.js-info-img');
    var paragraph = $('.hide-words');

    $(window).on('resize load', function () {
        if ($(window).width() <= 767) {
            element.detach().appendTo(newContainer);
            paragraph.hide();
        } else {
            element.detach().appendTo(container);
            paragraph.show();
        }
    });
}

$(document).ready(function () {
    var firstLi = $('.js-footer-first');
    var middleLi = $('.js-footer-middle');
    var lastLi = $('.js-footer-last');
    var footerEnd = $('.footer__end');

    function reorderLiElements() {
        if (window.innerWidth <= 767) {
            footerEnd.append(firstLi);
        } else {
            footerEnd.prepend(firstLi);
        }
    }

    // Call reorderLiElements on page load
    reorderLiElements();

    // Call reorderLiElements on window resize
    $(window).resize(reorderLiElements);
});

moveElement();
changePicturesForPhone();
nav();
inputOnFocus();
addGradient(borderUrl);
centerTable();
swiperCard();
window.addEventListener("resize load", swiperCard);