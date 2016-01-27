(function () {
    'use strict';

    angular.module('watch.config', [])
        .constant('AppConfig', {
            API_HOST: window.API_HOST
        })
        .config(['$provide', function ($provide) {
            // 扩展dateFilter，E 格式化为中文的星期几
            $provide.decorator('dateFilter', ['$delegate', function ($delegate) {
                var srcFilter = $delegate;
                var extendsFilter = function () {
                    var g = srcFilter.apply(this, arguments);
                    if(arguments[1] === "E"){
                        var arr = ["日", "一", "二", "三", "四", "五", "六"];
                        var date = arguments[0];
                        g = arr[date.getDay()];
                    }
                    return g;
                };
                return extendsFilter;
            }]);
        }]);
})();