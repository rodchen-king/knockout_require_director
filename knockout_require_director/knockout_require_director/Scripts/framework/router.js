define(['app', 'Routes', 'Router', 'jquery'], function(app, Routes, Router) {

    /*Init page function, get the pageName, require the file(.js), execute fuction init of app model.*/
	function initPage(pageName, controller) {
		require([pageName + '-js'], function(page) {
			app.init(pageName, page, controller);
		});
	}


	var routes = {};
    /*��������·�����飬��routes�м�¼���е�·����Ϣ��*/
	$.each(Routes, function(key, value) {
		var values = value.split(' ');
		var pageName = values[0];
		var controllerName = values[1];
		routes[key] = function() {

			var args = Array.prototype.slice.call(arguments, 0); //��arguments������ת����arguments���顣
			var controller = controllerName ? function(page) {

				return page.controllers[controllerName].apply(null, args); //���ڿ������Ļ���ִ��viewmodel�еĿ�������

			} : null;

			initPage(pageName, controller);
		};
	});

    //����router��configure��
	var router = new Router(routes).configure({
		strict: false,
		html5history: true,
		convert_hash_in_init: false,
		notfound: function() {
			routes['/error404/:code'](404);
		}
	});

	var urlNotAtRoot = window.location.pathname && (window.location.pathname != '/');

	if (!router.historySupport && urlNotAtRoot) {
		window.location.href = '/#' + (window.location.pathname.indexOf('/') == 0 ? '' : '/') + window.location.pathname;
		return;
	}

    //·�ɳ�ʼ����
	if (urlNotAtRoot) {
		router.init();
	} else {
		router.init('/');
	}

    //��ҳ���е�����a��ǩ����Ĭ��ҳ����ת��Ϊת��Ϊ·����Ϊ��
	var bindRoute = function() {
		$('body').on('click', 'a[href]', function(event) {
			var href = $(this).attr('href');
			if (href && !href.indexOf('http') == 0 && !href.indexOf('//') == 0 && !href.indexOf('#') == 0 &&
				($(this).attr('target') != '_blank') && !$(this).data('go') && !event.ctrlKey && !event.metaKey) {
				event.preventDefault();
				
				router.setRoute(href);
			} else if (href && href != "#" && href.indexOf("#") == 0) {
				if (href.indexOf('_') == -1) {
					window.history.pushState({
						time: new Date().getTime()
					}, '', href);
				}
			}
		});
	}


	bindRoute();

	return router;

});