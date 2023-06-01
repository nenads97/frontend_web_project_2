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

inputOnFocus();