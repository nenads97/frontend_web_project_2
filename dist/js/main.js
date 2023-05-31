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