$(function () {
    $('.fairy-tail__slider, .our-trip__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg" alt=""></button>',
        autoplay: true,
        fade: true
    });
    const btn = document.querySelector('.btn');

const videoContainer = document.querySelector('.video-container');

const close = document.querySelector('.close');

btn.addEventListener('.click', ()=>{
   videoContainer.classList.add('show');
})

close.addEventListener('.click', ()=>{
   videoContainer.classList.remove('show');
})
});

$(function () {

    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1175,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active')
    });

});