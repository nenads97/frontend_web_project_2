let borderUrl = `url(\'images/banner.png\')`;
var init = false;
var swiper1;

//SWIPERS

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

// Check initial screen width on page load
window.addEventListener("load resize", function () {
    if (window.innerWidth <= 1209) {
        swiperCard();
    }
});

//NAVIGATION

function nav() {
    var $toggle = $('.js-toggle');
    var $nav = $('.js-nav');
    var open = 'toggle-open';

    $toggle.on('click', function () {
        if ($toggle.hasClass(open)) {
            $toggle.removeClass(open);
            $nav.stop().slideUp(function () {
                $nav.removeAttr('style');
            });
        } else {
            $toggle.addClass(open);
            $nav.stop().slideDown();
        }
    });
}

function addGradient(url) {
    var $gradient = $('.js-gradient');

    $(window).on('resize load', function () {
        if ($(window).width() <= 1024) {
            $gradient.css('background', `linear-gradient(193.35deg, rgba(0, 3, 8, 0) 3.18%, rgba(0, 3, 8, 1) 56.87%), ${url}`);
        } else {
            $gradient.css('background', url)
        }
    });
}

//PRODUCTS

function centerTable() {
    var $swiper = $('.js-swiper');
    var $swiper1 = $('.swiper1');
    var sw = 'swiper-wrapper';

    $(window).on('resize load', function () {
        if ($(window).width() <= 1209 && $(window).width() > 767) {
            $swiper.addClass(sw);
            $swiper1.css('width', '585px')
        }
        else if ($(window).width() <= 767) {
            $swiper1.css('width', '335px')
        } else {
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

function scrollToElement(selector) {
    var element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

//scrollToElement(selector);
moveElement();
changePicturesForPhone();
nav();
addGradient(borderUrl);
centerTable();
swiperCard();