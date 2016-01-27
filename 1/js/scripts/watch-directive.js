(function () {
    'use strict';

    angular.module('watch-directive', ['watch.templates'])
        .directive('footermenu', function () {
            return {
                restrict: "E",
                templateUrl: "partials/directive/footermenu.html",
                replace: true
            };
        })
        .directive("scroll", ['$parse', '$window', '$rootScope', function ($parse, $window, $rootScope) {
            var timer;
            return {
                restrict: "A",
                link: function ($scope, $elem, attrs) {
                    angular.element($window).bind("scroll", function () {
                        clearTimeout(timer);
                        timer = setTimeout(function () {
                            if (document.body.clientHeight - window.screen.availHeight - document.body.scrollTop < 5) {
                                //$scope.$emit("scrollBottomEvent");
                                $scope.$broadcast("scrollBottomEvent");
                            }
                        }, 100);
                    });
                }
            };
        }])
    ;
}());