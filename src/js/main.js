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
    },
    profitCalculator: function () {
        var range1 = document.getElementById('range-1'),
            range2 = document.getElementById('range-2');

        function prettyNumber(n) {
            n += "";
            n = new Array(4 - n.length % 3).join("U") + n;
            return n.replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "");
        }

        noUiSlider.create(range1, {
            start: 10,
            connect: [true, false],
            step: 1,
            range: {
                'min': 1,
                // '50%': 10,
                'max': 20
            }
        });
        noUiSlider.create(range2, {
            start: 6,
            connect: [true, false],
            step: 1,
            range: {
                'min': 1,
                // '50%': 6,
                'max': 12
            }
        });
        function calcResult() {
            var money = range1.noUiSlider.get()*10000,
                months = range2.noUiSlider.get(),
                result = Math.round((money*months)*2.81);
            $('#calculator-result').html(prettyNumber(result));
        }
        range1.noUiSlider.on('update', function (values, handle) {
            var value = values[handle];
            $('#range-1-result').html(Math.round(value));
            calcResult();
        });
        range2.noUiSlider.on('update', function (values, handle) {
            var value = values[handle];
            $('#range-2-result').html(Math.round(value));
            calcResult();
        });
    }
};
app.init = function () {
    app.main.sliders();
    app.main.profitCalculator();
};


$(document).ready(function() {
	app.init();
});