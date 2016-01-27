(function() {
    'use strict';

    angular.module('watch.resource', ['ngResource', 'watch.config'])
        .factory('positionService', ['$resource', 'AppConfig', function($resource, AppConfig){
            return $resource(AppConfig.API_HOST + '/services/location', {}, {
                // 根据时间查询历史轨迹记录
                getHistoryLocation: {
                    method: 'GET',
                    url: AppConfig.API_HOST + '/services/location/findlocationBytime/:imei/:startTime/:endTime',
                    param: {
                        imei: '@imei',
                        startTime: '@startTime',
                        endTime: '@endTime'
                    },
                    isArray: true
                }
            });
        }])
    	

    	;
}());