define(['app', 'Routes', 'Router', 'jquery'], function(app, Routes, Router) {
	var routes = {};
    /*遍历整个路由数组，在routes中记录所有的路由信息。*/
	$.each(Routes, function(key, value) {
		var values = value.split(' ');
		var pageName = values[0];
		var controllerName = values[1];
		routes[key] = function() {
		    app.initJS(pageName);
		};
	});

    //配置router的configure。
	var router = new Router(routes).configure({
		notfound: function() {
			routes['/error404/:code'](404);
		}
	});

	var urlNotAtRoot = window.location.pathname && (window.location.pathname != '/');

    //路由初始化。
	if (urlNotAtRoot) {
		router.init();
	} else {
		router.init('/');
	}


	return router;
});