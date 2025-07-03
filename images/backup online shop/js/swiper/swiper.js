const heroSectionSlider = new Swiper('.hero-section-slider', {
    loop: true,


    pagination: {
        el: '.swiper-pagination',
    },

    breakpoints: {
        1400: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },

    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },



});


const discountSlider = new Swiper('.discount_slider', {
    loop: true,

    breakpoints: {
        300: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },

    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },

    freeMode: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});


const bestSellSlider = new Swiper('.best-sell-slider', {
    loop: true,

autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },

    breakpoints: {

        1400: {
            slidesPerView: 5,
            spaceBetween: 40,
        },
    },

});


const newProductsSlider = new Swiper('.new-product-slider', {
    loop: true,

autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },

    breakpoints: {
        1400: {
            slidesPerView: 5,
            spaceBetween: 40,
        },
    },


});


const blogSlider = new Swiper('.blog-slider', {
    loop: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },

    breakpoints: {

        1400: {
            slidesPerView: 5,
            spaceBetween: 40,
        },
    },


});