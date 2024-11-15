$(function () {

    $('#content').fullpage({
        anchors: ['intro', 'pf01', 'pf02', 'pf03'],
        responsiveWidth: 768,
        afterLoad: function (name, idx) {
            if (idx > 1) {
                $('.header').addClass('on')
                $('.to_top').addClass('on')
            } else {
                $('.header').removeClass('on')
                $('.to_top').removeClass('on')
            }
            if (idx > 4) {
                $('.header').addClass('active')
            } else {
                $('.header').removeClass('active')
            }
        }
    });

});

$(function () {
    const mainVisualSlide = new Swiper('.main_visual_slide', {
        spaceBetween: 30,
        effect: "fade",
        autoplay: { delay: 3000 },
        touchRatio: 0.5,
        slideActiveClass: 'on',
    });

    const mainContentSlide = new Swiper('.main_content_slide', {
        spaceBetween: 30,
        effect: "fade",
        autoplay: { delay: 3000 },
        touchRatio: 0.5,
    });

})

$(function () {
    $('.mopen').on('click', function () {
        $('.gnb').toggleClass('on');
        $(this).toggleClass('on');
    });
})


$(function () {
    $('.to_top').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 1000)
    })
});
