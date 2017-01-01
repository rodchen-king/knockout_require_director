define(['WebPageContrl', 'Routes', 'Router'], function (WebPageContrl, Routes, Router) {
	var routes = {};
    /*��������·�ɶ�����routes�м�¼���е�·����Ϣ��*/
	$.each(Routes, function(key, value) {
		var values = value.split(' ');
		var pageName = values[0];
		routes[key] = function() {
		    WebPageContrl.initJS(pageName);
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