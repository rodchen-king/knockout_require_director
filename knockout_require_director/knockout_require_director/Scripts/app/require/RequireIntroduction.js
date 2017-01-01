define(function () {
    function RequireIntroductionViewModel() {
        var self = this;

        self.init = function () { };

        self.controllers = {
            '/': function () { }
        };

        self.afterRender = function (element) {
            console.log("Successful to load RequireIntroductionViewModel page");
        };
    }

    return new RequireIntroductionViewModel();
});