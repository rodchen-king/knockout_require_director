define(['app', 'Routes', 'Router', 'jquery'], function(app, Routes, Router) {
	var routes = {};
    /*��������·�����飬��routes�м�¼���е�·����Ϣ��*/
	$.each(Routes, function(key, value) {
		var values = value.split(' ');
		var pageName = values[0];
		var controllerName = values[1];
		routes[key] = function() {
		    app.initJS(pageName);
		};
	});

    //����router��configure��
	var router = new Router(routes).configure({
		notfound: function() {
			routes['/error404/:code'](404);
		}
	});

	var urlNotAtRoot = window.location.pathname && (window.location.pathname != '/');

    //·�ɳ�ʼ����
	if (urlNotAtRoot) {
		router.init();
	} else {
		router.init('/');
	}


	return router;
});