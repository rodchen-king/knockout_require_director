define(['knockout'], function (ko) {
    function CustomerIntroductionViewModel() {
        var self = this;

        self.init = function () { };

        self.Information = {
            name: 'rodchen',
            phone: '19815516122'
        };

        self.controllers = {
            '/': function () { }
        };

        self.afterRender = function (element) {
            console.log("Successful to load CustomerIntroductionViewModel page");
        };
    }

    return new CustomerIntroductionViewModel();
});