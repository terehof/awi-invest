var app = app || {};
app.main = {
    sliders: function () {
        var $casesSlider = $('.cases-slider');
        if ($casesSlider.length > 0) {
            $casesSlider.slick({

            });
        }
    }
};
app.init = function () {
    app.main.sliders();
};


$(document).ready(function() {
	app.init();
});