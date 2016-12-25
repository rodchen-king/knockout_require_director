/*
    Author: TS
    Date: 2016/12/24
    Description: It's the main entry point for require.
 */

var paths = {
    /* TODO: register all AMD modules by providing CamelCase aliases, exceptions are RequireJS plugins and named AMD modules, whose names are fixed */
    /* follow files dictionary order */
    'jquery': 'Scripts/lib/jquery',
    "text": "Scripts/lib/text",
    'knockout': 'Scripts/lib/knockout',
    "knockout-amd-helpers": "Scripts/lib/knockout-amd-helpers",

    //Require
    'RequireIntroduction-html': 'templates/require/RequireIntroduction.html',
    "RequireIntroduction-js": 'Scripts/app/require/RequireIntroduction',

    //Knockout
    'KnockoutIntroduction-html': 'templates/knockout/KnockoutIntroduction.html',
    'KnockoutIntroduction-js': 'Scripts/app/knockout/KnockoutIntroduction',
};

var baseUrl = '/';

require.config({
    baseUrl: baseUrl,
    paths: paths,
    shim: {
    }
});

require(["knockout", "KnockoutIntroduction-js", "knockout-amd-helpers", "text"], function (ko, knockoutIntroduction) {
    ko.bindingHandlers.module.baseDir = "modules";

    //fruits/vegetable modules have embedded template
    ko.bindingHandlers.module.templateProperty = "embeddedTemplate";
    ko.applyBindings(knockoutIntroduction);
});

//require(["jquery", "RequireIntroduction-js", "text!RequireIntroduction-html"],
//    function ($, module, html) {
//        console.log("Start test require html!");
//        $('#main').html(html);
//        console.log("Start test require js!");
//        module.TestRequireJs();
//    }
//);



