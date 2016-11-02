var app = app || {};
app.main = {
    sliders: function () {
        var $casesSlider = $('.cases-slider');
        if ($casesSlider.length > 0) {
            $casesSlider.on('init', function () {
                var $navItems = $casesSlider.next('.slider-nav').find('.jsSliderNavItem');
                $navItems.on('click', function () {
                    var $this = $(this);
                    if (!$this.hasClass('active')) {
                        var slide = $this.data('slide');
                        $navItems.removeClass('active');
                        $this.addClass('active');
                        $('.cases-slider').slick('slickGoTo', slide);
                    }
                })
            });
            $casesSlider.on('beforeChange', function (slick, currSlide, nextSlide) {
                var $slideInfo = $casesSlider.siblings('.slide-info'),
                    $slideInfoTitle = $slideInfo.find('.slide-info__title span');


                setTimeout(function () {
                    var title = $casesSlider.find('.slick-slide[data-slick-index="'+ currSlide.currentSlide +'"]').attr('data-title');
                    $slideInfoTitle.html(title);
                    $casesSlider.next('.slider-nav').find('.jsSliderNavItem').removeClass('active').eq(currSlide.currentSlide).addClass('active');
                }, 100);

            });
            $casesSlider.slick({
                prevArrow: '',
                nextArrow: '',
                fade: true,
                speed: 750
            });
        }

        var $investSlider = $('.invest-slider');
        if ($investSlider.length > 0) {
            $investSlider.on('init', function () {
                var $navItems = $investSlider.next('.slider-nav').find('.jsSliderNavItem');
                $navItems.on('click', function () {
                    var $this = $(this);
                    if (!$this.hasClass('active')) {
                        var slide = $this.data('slide');
                        $navItems.removeClass('active');
                        $this.addClass('active');
                        $('.invest-slider').slick('slickGoTo', slide);
                    }
                })
            });
            $investSlider.on('beforeChange', function (slick, currSlide, nextSlide) {
                var $slideInfo = $investSlider.siblings('.slide-info'),
                    $slideInfoTitle = $slideInfo.find('.slide-info__title span');

                setTimeout(function () {
                    var title = $investSlider.find('.slick-slide[data-slick-index="'+ currSlide.currentSlide +'"]').attr('data-title');
                    $slideInfoTitle.html(title);
                    $investSlider.next('.slider-nav').find('.jsSliderNavItem').removeClass('active').eq(currSlide.currentSlide).addClass('active');
                }, 100);

            });
            $investSlider.slick({
                prevArrow: '',
                nextArrow: '',
                fade: true,
                speed: 750
            })
        }
    }
};
app.init = function () {
    app.main.sliders();
};


$(document).ready(function() {
	app.init();
});