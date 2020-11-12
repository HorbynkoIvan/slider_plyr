export function secretsSlider() {
    let $slider = $('.secrets .slider');

    $slider.slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<img class="arrow_left" src="/assets/img/arrow_left.svg"/>',
        nextArrow: '<img class="arrow_right" src="/assets/img/arrow_right.svg"/>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    })
}