/*
    Author: rodchen
    Date: 2016/11/17
    Description: It's the main entry point for require.
 */

var paths = {
/* TODO: register all AMD modules by providing CamelCase aliases, exceptions are RequireJS plugins and named AMD modules, whose names are fixed */
/* follow files dictionary order */
'jquery': 'Scripts/lib/jquery',
'Routes': 'Scripts/framework/routes',
'knockout': 'Scripts/lib/knockout',


//framework
'Router': 'Scripts/lib/director',
'app': 'Scripts/framework/page',
'AppRouter': 'Scripts/framework/router',
'Error-js': 'Scripts/app/Error',
'Error-html': 'templates/Error-html.html',
"knockout-amd-helpers": "Scripts/lib/knockout-amd-helpers",
"text": "Scripts/lib/text",

//bootstrap
'Custom': 'Scripts/lib/custom',
'Bootstrap': 'Scripts/lib/bootstrap.min',

//Customer
'CustomerIntroduction-html': 'templates/customer/CustomerIntroduction.html',
'CustomerIntroduction-js': 'Scripts/app/customer/CustomerIntroduction',
'customer-information-html': 'templates/customer/components/CustomerInformation.html',
'customer-information-js': 'Scripts/app/customer/components/CustomerInformation',

 //require
'RequireIntroduction-html': 'templates/require/RequireIntroduction.html',
"RequireIntroduction-js": 'Scripts/app/require/RequireIntroduction',
'RequireCode-html': 'templates/require/RequireCode.html',
"RequireCode-js": 'Scripts/app/require/RequireCode',

//Javascript
'UnknowJavascriptSecond-html': 'templates/javascript/UnknowJavascriptSecond.html',
'UnknowJavascriptSecond-js': 'Scripts/app/javascript/UnknowJavascriptSecond',
};

var baseUrl = '/';

require.config({
	baseUrl: baseUrl,
	paths: paths,

	shim: {
		/* TODO: provide all needed shims for non-AMD modules */
		'Router': {
			exports: 'Router'
		},
		'Custom': {
            exports: 'Custom'
		},
		'Custom': ['Bootstrap'],
		'Bootstrap': ['jquery']
	}
});

require(["knockout", "app", "knockout-amd-helpers", "text"], function (ko, App) {
    ko.bindingHandlers.module.baseDir = "modules";

    //fruits/vegetable modules have embedded template
    ko.bindingHandlers.module.templateProperty = "embeddedTemplate";
});

require(['AppRouter'], function(){
});

