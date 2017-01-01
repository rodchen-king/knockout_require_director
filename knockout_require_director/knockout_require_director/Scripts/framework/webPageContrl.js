define(['knockout', 'jquery', 'Router', 'Custom'], function (ko, $, Router) {
	var initialRun = true;

	function isEndSharp() { // url end with #
		if (app.lastUrl != "" && location.toLocaleString().indexOf(app.lastUrl) != -1 && location.toLocaleString().indexOf('#') != -1 && location.hash == "") {
			return true;
		}

		return false;
	}

	var app = {
	    initJS: function (pageName) {
	        require([pageName + '-js'], function (page) {
	            app.init(pageName, page);
	        });
	    },
		init: function(pageName, pageData) {
			if (isEndSharp()) {
				return;
			}

			pageData.init(); 

			app.page({
			    name: pageName,
			    data: pageData
			}); 

			if (initialRun) {
				ko.applyBindings(app, document.getElementsByTagName('html')[0]); 
				initialRun = false;
			}
		},
		page: ko.observable({
			name: '', 
			data: {
				init: function() {}
			}
		}),
		
		afterRender: function() {
			if (app.page().data.afterRender) {
				app.page().data.afterRender();
			}
		}
	};

	return app;
});