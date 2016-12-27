define(function() {
  function RequireCodeViewModel() {
    var self = this;

    self.init = function() {};

    self.controllers = {
      '/': function() {}
    };

    self.afterRender = function(element) {
        console.log("Successful to load RequireCodeViewModel page");
    };

  }

  return new RequireCodeViewModel();

});