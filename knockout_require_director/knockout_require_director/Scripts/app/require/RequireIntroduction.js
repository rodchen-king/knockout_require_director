/*  
    jsÔ´´úÂë.
    Description: The js is for testing require.
 */
define(function () {
    function RequireIntroductionViewModel() {
    var self = this;

    self.TestRequireJs = function () {
        alert("The function is in RequireIntroduction.js!");
    }
  }

return new RequireIntroductionViewModel();
});