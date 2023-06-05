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
            $gradient.css('background', `linear-gradient(193.35deg, rgba(0, 3, 8, 0) 3.18%, rgba(0, 3, 8, 0.6) 56.87%), ${url}`);
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


inputOnFocus();
addGradient(borderUrl);
centerTable();
swiperCard();
window.addEventListener("resize load", swiperCard);