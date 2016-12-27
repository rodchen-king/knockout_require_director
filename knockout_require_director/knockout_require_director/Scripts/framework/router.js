define(['app', 'Routes', 'Router', 'jquery'], function(app, Routes, Router) {

    /*Init page function, get the pageName, require the file(.js), execute fuction init of app model.*/
	function initPage(pageName, controller) {
		require([pageName + '-js'], function(page) {
			app.init(pageName, page, controller);
		});
	}


	var routes = {};
    /*遍历整个路由数组，在routes中记录所有的路由信息。*/
	$.each(Routes, function(key, value) {
		var values = value.split(' ');
		var pageName = values[0];
		var controllerName = values[1];
		routes[key] = function() {

			var args = Array.prototype.slice.call(arguments, 0); //将arguments类数组转换成arguments数组。
			var controller = controllerName ? function(page) {

				return page.controllers[controllerName].apply(null, args); //存在控制器的话，执行viewmodel中的控制器。

			} : null;

			initPage(pageName, controller);
		};
	});

    //配置router的configure。
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

    //路由初始化。
	if (urlNotAtRoot) {
		router.init();
	} else {
		router.init('/');
	}

    //绑定页面中的所有a标签，将默认页面跳转行为转换为路由行为。
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