(function () {
    'use strict';
    angular.module('watch.controller', ['watch.resource', 'watch.service', 'ngDialog', 'ui.bootstrap', 'watch.templates', 'watch.config'])
        // 全局控制器
        .controller('MainCtrl', ['$scope', '$rootScope', '$state', '$stateParams', '$window', '$location', 'loginService', 'utilService', 'AppConfig', 'ngDialog', '$timeout',
            function ($scope, $rootScope, $state, $stateParams, $window, $location, loginService, utilService, AppConfig, ngDialog, $timeout) {
                //window.location.href="http://m.ele.me";
                //return;
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
                $rootScope.utilService = utilService;

                $rootScope.back = function (reload) {
                    $window.history.back();
                    if (reload) {
                        $state.reload();
                    }
                };
                // 弹框。当message的长度大于200时，极有可能是后台报错了
                $rootScope.alert = function (message) {
                    if (message === undefined || message.length > 200) message = "出错了...";
                    $rootScope.alertContent = message;
                    var dialog = ngDialog.open({
                        scope: $rootScope,
                        showClose: false, //是否显示关闭按钮，默认为true
                        overlay: true, // 是否显示遮罩层，默认为true
                        closeByDocument: true, //点击body关闭，默认为true
                        template: 'partials/dialog/alert-location.html',
                        disableAnimation: true //是否禁用动画，默认为false
                    });
                    return dialog;
                };
                $rootScope.confirm = function (content) {
                    $scope.confirmMessage = content;
                    var dialog = ngDialog.openConfirm({
                        scope: $scope,
                        showClose: false, //是否显示关闭按钮，默认为true
                        overlay: true, // 是否显示遮罩层，默认为true
                        closeByDocument: true, //点击body关闭，默认为true
                        template: 'partials/dialog/confirm-unbind.html',
                        disableAnimation: true //是否禁用动画，默认为false
                    });
                    return dialog;
                };
                $rootScope.$on("$stateChangeStart", function (event, toState) {
                    
                });
                $rootScope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {
                    
                });
                
            }])
        // 检查用户有没有绑定学生
        .controller('IndexCtrl', ['$scope', 'parentService', '$window', '$state', '$stateParams', '$rootScope', 'loginService', 'utilService',
            function ($scope, parentService, $window, $state, $stateParams, $rootScope, loginService, utilService) {
                
            }])
        
        
    ;
}());

