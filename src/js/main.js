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
                    $slideInfoTitle = $slideInfo.find('.slide-info__title span'),
                    $pricePurchase = $slideInfo.find('.jsPricePurchase'),
                    $investPeriod = $slideInfo.find('.jsInvestPeriod'),
                    $priceSelling = $slideInfo.find('.jsPriceSelling'),
                    $revenueMeter = $slideInfo.find('.jsRevenueMeter'),
                    $profitAll = $slideInfo.find('.jsProfitAll'),
                    $profitMonth = $slideInfo.find('.jsProfitMonth');


                setTimeout(function () {
                    var title = $casesSlider.find('.slick-slide[data-slick-index="'+ currSlide.currentSlide +'"]').attr('data-title'),
                        pricePurchase = $casesSlider.find('.slick-slide[data-slick-index="'+ currSlide.currentSlide +'"]').attr('data-price-purchase'),
                        investPeriod = $casesSlider.find('.slick-slide[data-slick-index="'+ currSlide.currentSlide +'"]').attr('data-invest-period'),
                        priceSelling = $casesSlider.find('.slick-slide[data-slick-index="'+ currSlide.currentSlide +'"]').attr('data-price-selling'),
                        revenueMeter = $casesSlider.find('.slick-slide[data-slick-index="'+ currSlide.currentSlide +'"]').attr('data-revenue-meter'),
                        profitAll = $casesSlider.find('.slick-slide[data-slick-index="'+ currSlide.currentSlide +'"]').attr('data-profit-all'),
                        profitMonth = $casesSlider.find('.slick-slide[data-slick-index="'+ currSlide.currentSlide +'"]').attr('data-profit-month');
                    $slideInfoTitle.html(title);
                    $pricePurchase.html(pricePurchase);
                    $investPeriod.html(investPeriod);
                    $priceSelling.html(priceSelling);
                    $revenueMeter.html(revenueMeter);
                    $profitAll.html(profitAll);
                    $profitMonth.html(profitMonth);

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
                    $investSlider.siblings('.slide-info').fadeOut().removeClass('showOnScroll animated fadeInUp');
                    $investSlider.siblings('.slide-info-'+ (currSlide.currentSlide+1)).fadeIn();
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
            var separator_space = $.animateNumber.numberStepFactories.separator(' ');
            $('#calculator-result').stop().animateNumber({
                separator: ' ',
                number: result,
                numberStep: separator_space
            }, 750);
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
app.animations = {
    showOnScroll: function () {
        if ($(window).width() > 960) {
            $('.showOnScroll').each(function (i, item) {
                var animClass = $(item).attr('data-animate'),
                    offset = +$(item).attr('data-offset');
                $(item).viewportChecker({
                    classToAdd: 'visible animated ' + animClass,
                    offset: ((!offset) ? 100 : offset)
                });
            });
            $('.textShowOnScroll').each(function (i, item) {
                var offset = +$(item).attr('data-offset');
                $(item).viewportChecker({
                    classToAdd: 'text-visible',
                    offset: ((!offset) ? 170 : offset)
                });
            });
        } else {
            $('.showOnScroll').css('opacity', 1);
        }

        setTimeout(function () {
            $('.intro-block').addClass('can-hover');
        }, 1500);
    },
    showCalc: function () {
        var $calculator = $('.calculator-profit'),
            startValue = $calculator.attr('data-start-value');

        var separator_space = $.animateNumber.numberStepFactories.separator(' ');
        $('.calculator-profit').viewportChecker({
            callbackFunction: function (el) {
                $('#calculator-result').animateNumber({
                    separator: ' ',
                    number: startValue,
                    numberStep: separator_space
                }, 5000);
            }
        });

        $('.noUi-target').viewportChecker({
            classToAdd: 'showRange'
        })
    },
    cooperationBlocks: function () {
        $('.cooperation-blocks').viewportChecker({
            classToAdd: 'showBlocks'
        })
    },
    enllax: function () {
        $(window).enllax();
    },
    placeholders: function () {
        var $input = $('.input, .textarea');
        if ($input.length > 0) {
            $input.each(function (i, item) {
                $(item).on('blur', function () {
                    if ($(this).val().length > 0) {
                        $(item).addClass('not-empty');
                    } else {
                        $(item).removeClass('not-empty');
                    }
                });
            });
        }
    }
};
app.popups = {
    init: function () {
        var self = this;
        $('.jsOpenPopup').on('click', function () {
            var $this = $(this),
                popup = $this.attr('data-popup');
            self.popupOpen(popup);
        });
        $('.jsPopupClose').on('click', function () {
            var $self = $(this),
                $popupBg = $('.popup-bg'),
                $popup = $self.closest('.popup');
            $popupBg.removeClass('opened');
            $popup.removeClass('opened');
            $popup.find('.form-message').slideUp();
        });
    },
    popupOpen: function (popupName) {
        var $popupBg = $('.popup-bg'),
            $popup = $('.popup.popup-'+ popupName);
        $popupBg.addClass('opened');
        $popup.addClass('opened');
    }
};
app.forms = {
    init: function () {
        var $formMessage = $('#form-message');
        if ($formMessage.length > 0) {
            $formMessage.validate({
                rules: {
                    name: {
                        required: true
                    },
                    phone: {
                        required: true,
                        phoneRU: true
                    },
                    message: {
                        required: true
                    }
                },
                messages: {
                    name: {
                        required: 'Укажите как к Вам обращаться'
                    },
                    phone: {
                        required: 'Укажите Ваш телефон'
                    },
                    message: {
                        required: 'Напишите Ваше сообщение'
                    }
                },
                submitHandler: function(form) {
                    var $form = $(form);
                    $.ajax({
                        type: "POST",
                        url: "mail-message.php",
                        data: $form.serialize()
                    }).done(function(e) {
                        setTimeout(function() {
                            $form.find('.form-message').html('Спасибо! Мы скоро свяжемся с Вами').addClass('success').slideDown();
                            $form.trigger("reset");
                            $form.find('input, textarea').removeClass('not-empty');
                        }, 1000)
                    }).fail(function (e) {
                        $form.find('.form-message').html('Произошла ошибка. Попробуйте позже').slideDown();
                        $form.trigger('reset');
                        $form.find('input, textarea').removeClass('not-empty');
                    })
                }
            });
        }
        var $formCallback = $('#form-callback');
        if ($formCallback.length > 0) {
            $formCallback.validate({
                rules: {
                    name: {
                        required: true
                    },
                    phone: {
                        required: true,
                        phoneRU: true
                    },
                    message: {
                        required: true
                    }
                },
                messages: {
                    name: {
                        required: 'Укажите как к Вам обращаться'
                    },
                    phone: {
                        required: 'Укажите Ваш телефон'
                    },
                    message: {
                        required: 'Напишите Ваше сообщение'
                    }
                },
                submitHandler: function(form) {
                    var $form = $(form);
                    $.ajax({
                        type: "POST",
                        url: "mail-callback.php",
                        data: $form.serialize()
                    }).done(function(e) {
                        setTimeout(function() {
                            $form.find('.form-message').html('Спасибо! Мы скоро свяжемся с Вами').addClass('success').slideDown();
                            $form.trigger("reset");
                            $form.find('input, textarea').removeClass('not-empty');
                        }, 1000)
                    }).fail(function (e) {
                        $form.find('.form-message').html('Произошла ошибка. Попробуйте позже').slideDown();
                        $form.trigger('reset');
                        $form.find('input, textarea').removeClass('not-empty');
                    })
                }
            });
        }
    }
};


app.init = function () {
    app.main.sliders();
    app.main.profitCalculator();
    app.popups.init();
    app.forms.init();
    app.animations.showOnScroll();
    app.animations.showCalc();
    app.animations.cooperationBlocks();
    app.animations.enllax();
    app.animations.placeholders();
};


$(document).ready(function() {
	app.init();
});