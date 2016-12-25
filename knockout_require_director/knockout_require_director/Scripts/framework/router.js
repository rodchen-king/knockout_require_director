define(['Routes', 'Router'], function (Routes, Router) {
    var router = Router(Routes);

    router.init();
    return router;
});