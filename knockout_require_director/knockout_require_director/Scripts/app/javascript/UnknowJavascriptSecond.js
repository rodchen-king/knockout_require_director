define(['knockout'], function (ko) {
    function UnknowJavascriptSecondViewModel() {
        var self = this;
        self.VisitInfo = ko.observableArray(null);

        self.init = function () {
        };

        self.controllers = {
            '/': function () {
            }
        };

        self.afterRender = function (element) {
            console.log("Successful to load UnknowJavascriptSecondViewModel page");
        };
    }

    return new UnknowJavascriptSecondViewModel();
});