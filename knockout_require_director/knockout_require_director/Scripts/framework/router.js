define(['WebPageContrl', 'Routes', 'Router'], function (WebPageContrl, Routes, Router) {
	var routes = {};
    /*遍历整个路由对象，在routes中记录所有的路由信息。*/
	$.each(Routes, function(key, value) {
		var values = value.split(' ');
		var pageName = values[0];
		routes[key] = function() {
		    WebPageContrl.initJS(pageName);
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