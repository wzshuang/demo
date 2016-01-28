(function () {
    'use strict';

    angular.module('watch.route', ['ui.router', 'watch.controller', 'watch.templates'])
        .factory('myHttpInterceptor', ['$q', '$rootScope', function($q, $rootScope) {
            return {
                'requestError': function(rejection) {
                    console.log("myHttpInterceptor requestError", rejection);
                    return $q.reject(rejection);
                },
                'responseError': function(rejection) {
                    console.log("myHttpInterceptor responseError", rejection);
                    //$rootScope.alert("网络出错了，请稍后再试");
                    return $q.reject(rejection);
                },
                'request': function(config){
                    //console.log("myHttpInterceptor request", config);
                    return config;
                },
                'response': function(response){
                    return response;
                }
            };
        }])
        .config(['$httpProvider', function ($httpProvider) {
            if (!$httpProvider.defaults.headers.get) {
                $httpProvider.defaults.headers.get = {};
            }
            //$httpProvider.defaults.headers.post['x-a-b-c'] = "test";
            $httpProvider.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
            $httpProvider.interceptors.push('myHttpInterceptor');
        }])
        .config(['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {

                $urlRouterProvider.otherwise("");
                $stateProvider.state('root', {
                    url: '',
                    controller: 'RootCtrl'
                });
                $stateProvider.state('index', {
                    url: '/index/:parentPhoneNo',
                    params: {userId: null, parentId: null, parentPhoneNo: null},
                    controller: 'IndexCtrl'
                });
                // 管理 - 选择亲情号
                $stateProvider.state('manage.addFamilyNumber.chooseFamilyNumber', {
                    url: '/chooseFamilyNumber',
                    title: '位置',
                    templateUrl: 'partials/manage/manage.chooseFamilyNumber.html',
                    params: { familyNumber: null },
                    controller: 'ChooseFamilyNumberCtrl',
                    resolve: {
                        resolvedContact: ['watchService', 'loginService', '$q', '$rootScope',
                            function(watchService, loginService, $q, $rootScope){
                                var defer = $q.defer();
                                loginService.getSelectedChild().then(function(child) {
                                    watchService.getFamilyContact({
                                        studentGroupId: child.dutyGroupId,
                                        familyGroupId: child.familyGroupId
                                    }, {}, function (data) {
                                        if (data.length > 0) {
                                            data = _.map(data, function(item){
                                                item.id = _.uniqueId();
                                                return item;
                                            });
                                            defer.resolve(data);
                                        } else {
                                            //$rootScope.alert("");
                                        }
                                    });
                                });
                                return defer.promise;
                            }]
                    }
                });
            }])
    ;
}());