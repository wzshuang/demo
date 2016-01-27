(function(){
	'use strict';

	angular.module('watch-filter', [])
		.filter('genderFilter', [function(){
			return function(gender) {
				var a = {"0": "男", "1": "女"};
				return a[gender] || "";
			};
	    }])
	    .filter('dateStrFilter', [function(){
	    	return function(dateString){
	    		return new Date(dateString).getTime();
	    	};
	    }])
	    // 根据时间显示上午或下午，例"07:12"返回"上午"
	    .filter('ampmFilter', [function(){
	    	return function(time){
	    		if(time === undefined) return;
	    		var hourStr = time.split(":")[0];
	    		var hour = parseInt(hourStr, 10);
	    		return hour < 12 ? "上午" : "下午";
	    	};
	    }])
	    // 将1 2 3转换成对应的周几
	    .filter('weekday', [function(){
	    	return function(days){
	    		if(days !== undefined){
		    		var arr = [];
		    		var data = ["", "周一", "周二", "周三", "周四", "周五", "周六", "周日"];
		    		days.split(",").forEach(function(day){
		    			arr.push(data[day]);
		    		});
		    		return arr.join("，");
	    		}
	    	};
	    }])
		// 例如： 1分钟内显示秒，超过1分钟显示分钟
		.filter('secondsBeauty', [function(){
			return function(seconds){
				if(seconds !== undefined){
					var m = Math.floor(seconds / 60);
					var s = seconds % 60;
					var result = "";
					if(m !== 0){
						result += m + "分钟";
					} else {
						result += s + "秒";
					}
					return  result;
				}
			};
		}])
		// 如果日期是当天，就用format1格式化，否则用format2格式化
		.filter('dateBeauty', ['$filter', function($filter){
			return function(date, format1, format2){
				//console.log(date, format1, format2, $filter);
				var today = new Date();
				var result = "";
				if($filter("date")(date, "yyyyMMdd") == $filter("date")(today, "yyyyMMdd")){
					result = $filter("date")(date, format1);
				} else {
					result = $filter("date")(date, format2);
				}
				return result;
			};
		}])

	    ;
})();