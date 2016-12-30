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

			pageData.init(); // init view model and call controller (optional) before template is swapped-in

			app.page({
			    name: pageName,
			    data: pageData
			}); // to test if template finished rendering, use afterRender binding in the template binding

			if (initialRun) {
				ko.applyBindings(app, document.getElementsByTagName('html')[0]); // apply binding at root node to be able to bind to anywhere
				initialRun = false;
			}
		},
		page: ko.observable({
			name: '', // name of the page - auto-set by the framework, no need to worry
			data: {
				init: function() {}, // preparation before the page's template is rendered, such as checking access control, init/instantiate modules used by the page, etc.
				dispose: function() {} // properly dispose the page to prevent memory leaks and UI leftovers (important for SPA since page doesn't refresh between page views) - remove DOM element event listeners, dispose knockout manual subscriptions, etc.
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