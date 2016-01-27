(function () {
    'use strict';

    angular
        .module('watch.service', ['watch.resource'])
        .service('utilService', ['$rootScope', '$q', function ($rootScope, $q) {
            var that = this;

            /**
             * 将08:37这种时分字符串转换为date对象
             * @param timeStr
             * @returns {Date}
             */
            this.getDateFromTime = function(timeStr){
                var _time = timeStr.split(":");
                var today = new Date();
                today.setHours(_time[0]);
                today.setMinutes(_time[1]);
                return today;
            };

            /**
             * 获取url参数
             * @param name 参数名
             * @returns {*} 参数值，无值返回null
             */
            this.getQueryString = function (name) {
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
                var r = window.location.search.substr(1).match(reg);
                if (r !== null)return decodeURIComponent(r[2]);
                return null;
            };

            /**
             * 设置body的样式
             * @param bodyClassName 样式名
             * @param $scope
             */
            this.setBodyClass = function (bodyClassName, $scope) {
                $rootScope.bodyClass = bodyClassName;
                $scope.$on('$destroy', function () {
                    $rootScope.bodyClass = null;
                });
            };

            /**
             * 根据child的头像获取地图marker的icon
             * @param pic
             * @returns {*|r.promise|Function|promise|k.promise|{then, catch, finally}}
             */
            this.getMarkerIcon = function (pic) {
                pic = that.getChildAvatar(pic);

                var defer = $q.defer();
                var canvas = document.createElement("canvas");
                canvas.width = 40;
                canvas.height = 60;
                var ctx = canvas.getContext("2d");

                var img = document.createElement("img");
                var img2 = document.createElement("img");
                img.src = "images/marker.png";


                img.onload = function () {
                    ctx.drawImage(img, 0, 0, 47.5, 60);
                    img2.src = pic;
                    img2.onload = function () {
                        ctx.drawImage(img2, 7, 8, 25, 25);
                        defer.resolve(canvas.toDataURL());
                    };
                };
                var onerror = function () {
                    console.log("onerror..");
                    defer.resolve("images/marker.png");
                };
                img.onerror = onerror;
                img2.onerror = onerror;

                return defer.promise;
            };
            return this;
        }])
        .service('geoService', ['$rootScope', '$q',
            function ($rootScope, $q) {
                var geocoder = new AMap.Geocoder({
                    radius: 1000,
                    extensions: "all"
                });

                /**
                 * 根据经纬度获取对应的地名
                 * @param lonlat 经纬度，例如 [119.361343, 26.024263]
                 * @returns {*|r.promise|Function|promise|k.promise|{then, catch, finally}}
                 */
                this.getAddress = function (lonlat) {
                    var defer = $q.defer();
                    geocoder.getAddress(lonlat, function (status, result) {
                        if (status === 'complete' && result.info === 'OK') {
                            defer.resolve(result.regeocode.formattedAddress);
                        } else {
                            console.error("获取位置信息失败", result);
                            defer.reject(result);
                        }
                    });
                    return defer.promise;
                };

                /**
                 * 获取当前的位置信息
                 * @param map
                 * @returns {*|r.promise|Function|promise|k.promise|{then, catch, finally}}
                 */
                this.getCurrentPosition = function (map) {
                    var defer = $q.defer();
                    var geolocation = new AMap.Geolocation({
                        showButton: false, //是否显示定位图标
                        showCircle: false, //定位成功后用圆圈表示定位精度范围
                        enableHighAccuracy: true,//是否使用高精度定位，默认:true
                        timeout: 60000,          //超过60秒后停止定位
                        panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，
                        zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                    });
                    map.addControl(geolocation);
                    geolocation.getCurrentPosition();
                    AMap.event.addListener(geolocation, 'complete', function (data) {
                        var str = ['定位成功'];
                        str.push('经度：' + data.position.getLng());
                        str.push('纬度：' + data.position.getLat());
                        str.push('精度：' + data.accuracy + ' 米');
                        str.push('是否经过偏移：' + (data.isConverted ? '是' : '否'));
                        defer.resolve(data);
                    });
                    AMap.event.addListener(geolocation, 'error', function (data) {
                        console.log("定位失败", data);
                        defer.reject(data);
                    });
                    return defer.promise;
                };
                return this;
            }])

    ;
}());
