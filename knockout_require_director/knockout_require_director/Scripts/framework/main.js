/*
    Author: TS
    Date: 2016/12/24
    Description: It's the main entry point for require.
 */

var paths = {
    /* TODO: register all AMD modules by providing CamelCase aliases, exceptions are RequireJS plugins and named AMD modules, whose names are fixed */
    /* follow files dictionary order */
    'common': 'Scripts/common',
    'jquery': 'Scripts/lib/jquery',
    "text": "Scripts/lib/text",


    //Require
    'RequireIntroduction-html': 'templates/require/RequireIntroduction.html',
    "RequireIntroduction-js": 'Scripts/app/require/RequireIntroduction'
};

var baseUrl = '/';

require.config({
    baseUrl: baseUrl,
    paths: paths,
    shim: {
    }
});

require(["jquery", "RequireIntroduction-js", "text!RequireIntroduction-html"],
    function ($, module, html) {
        console.log("Start test require html!");
        $('#main').html(html);
        console.log("Start test require js!");
        module.TestRequireJs();
    }
);


