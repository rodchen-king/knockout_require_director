define(['knockout'], function (ko) {
    function RequireIntroductionViewModel() {
    var self = this;

    self.data = {
        PageName: ko.observable('knockout')
    }

    self.afterRender = function () {
        console.log('This is the function named afterRender in knockout.js');
    }
  }

return new RequireIntroductionViewModel();
});