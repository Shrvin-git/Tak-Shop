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
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        998: {
            slidesPerView: 5,
            spaceBetween: 40,
        },
    },

    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },

    freeMode: true,


});


const productCategorie = new Swiper('.product_category', {
    loop: true,

    breakpoints: {
        300: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 30,
        },

        992: {
            slidesPerView: 5,
            spaceBetween: 10,
        },

        1200: {
            slidesPerView: 7,
            spaceBetween: 10,
        },
    },



});


const bestSellSlider = new Swiper('.best-sell-slider', {
    loop: true,



    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },

    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 100,
        },


        768: {
            slidesPerView: 4,
            spaceBetween: 90,
        },

        992: {
            slidesPerView: 4,
            spaceBetween: 40,
        },

        1024: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
    },

});


const newProductsSlider = new Swiper('.new-product-slider', {
    loop: true,



    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },

    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 100,
        },


        768: {
            slidesPerView: 4,
            spaceBetween: 90,
        },

        992: {
            slidesPerView: 4,
            spaceBetween: 40,
        },

        1024: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
    },


});


const blogSlider = new Swiper('.blog-slider', {
    loop: true,



    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },

    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 100,
        },


        768: {
            slidesPerView: 4,
            spaceBetween: 90,
        },

        992: {
            slidesPerView: 4,
            spaceBetween: 40,
        },

        1024: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },

    freeMode: true

});