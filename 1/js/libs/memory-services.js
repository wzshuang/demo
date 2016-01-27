


// (function () {

//     'use strict';

// Mock.Random.extend({
//     cnCharacter: function() {
//         var pool = "的一是了我不人在他有这个上们来到时大地为子中你说生国年着就那和要她出也得里后自以会家可下而过天去能对小多然于心学么之都好看起发当没成只如事把还用第样道想作种开美总从无情己面最女但现前些所同日手又行意动方期它头经长儿回位分爱老因很给名法间斯知世什两次使身者被高已亲其进此话常与活正感见明问力理尔点文几定本公特做外孩相西果走将月十实向声车全信重三机工物气每并别真打太新比才便夫再书部水像眼等体却加电主界门利海受听表德少克代员许稜先口由死安写性马光白或住难望教命花结乐色更拉东神记处让母父应直字场平报友关放至张认接告入笑内英军候民岁往何度山觉路带万男边风解叫任金快原吃妈变通师立象数四失满战远格士音轻目条呢病始达深完今提求清王化空业思切怎非找片罗钱紶吗语元喜曾离飞科言干流欢约各即指合反题必该论交终林请医晚制球决窢传画保读运及则房早院量苦火布品近坐产答星精视五连司巴奇管类未朋且婚台夜青北队久乎越观落尽形影红爸百令周吧识步希亚术留市半热送兴造谈容极随演收首根讲整式取照办强石古华諣拿计您装似足双妻尼转诉米称丽客南领节衣站黑刻统断福城故历惊脸选包紧争另建维绝树系伤示愿持千史谁准联妇纪基买志静阿诗独复痛消社算义竟确酒需单治卡幸兰念举仅钟怕共毛句息功官待究跟穿室易游程号居考突皮哪费倒价图具刚脑永歌响商礼细专黄块脚味灵改据般破引食仍存众注笔甚某沉血备习校默务土微娘须试怀料调广蜖苏显赛查密议底列富梦错座参八除跑亮假印设线温虽掉京初养香停际致阳纸李纳验助激够严证帝饭忘趣支春集丈木研班普导顿睡展跳获艺六波察群皇段急庭创区奥器谢弟店否害草排背止组州朝封睛板角况曲馆育忙质河续哥呼若推境遇雨标姐充围案伦护冷警贝著雪索剧啊船险烟依斗值帮汉慢佛肯闻唱沙局伯族低玩资屋击速顾泪洲团圣旁堂兵七露园牛哭旅街劳型烈姑陈莫鱼异抱宝权鲁简态级票怪寻杀律胜份汽右洋范床舞秘午登楼贵吸责例追较职属渐左录丝牙党继托赶章智冲叶胡吉卖坚喝肉遗救修松临藏担戏善卫药悲敢靠伊村戴词森耳差短祖云规窗散迷油旧适乡架恩投弹铁博雷府压超负勒杂醒洗采毫嘴毕九冰既状乱景席珍童顶派素脱农疑练野按犯拍征坏骨余承置臓彩灯巨琴免环姆暗换技翻束增忍餐洛塞缺忆判欧层付阵玛批岛项狗休懂武革良恶恋委拥娜妙探呀营退摇弄桌熟诺宣银势奖宫忽套康供优课鸟喊降夏困刘罪亡鞋健模败伴守挥鲜财孤枪禁恐伙杰迹妹藸遍盖副坦牌江顺秋萨菜划授归浪听凡预奶雄升碃编典袋莱含盛济蒙棋端腿招释介烧误";
//         return pool.charAt(Random.natural(0, pool.length - 1));
//     },
//     cnWord: function(min, max) {
//         var len;
//         if (arguments.length === 0) len = Random.natural(1, 4);
//         if (arguments.length === 1) len = max = min;
//         if (arguments.length === 2) {
//             min = parseInt(min, 10);
//             max = parseInt(max, 10);
//             len = Random.natural(min, max);
//         }
//         var result = "";
//         for (var i = 0; i < len; i++) {
//             result += Random.cnCharacter();
//         }
//         return result;
//     },
//     cnSentence: function(min, max) {
//         var len;
//         if (arguments.length === 0) len = Random.natural(3, 15);
//         if (arguments.length === 1) len = max = min;
//         if (arguments.length === 2) {
//             min = parseInt(min, 10);
//             max = parseInt(max, 10);
//             len = Random.natural(min, max);
//         }
//         var arr = [];
//         for (var i = 0; i < len; i++) {
//             arr.push(Random.cnWord());
//         }
//         return Random.capitalize(arr.join(""));
//     },
//     cnParagraph: function(min, max) {
//         var len;
//         if (arguments.length === 0) len = Random.natural(2, 7);
//         if (arguments.length === 1) len = max = min;
//         if (arguments.length === 2) {
//             min = parseInt(min, 10);
//             max = parseInt(max, 10);
//             len = Random.natural(min, max);
//         }
//         var arr = [];
//         for (var i = 0; i < len; i++) {
//             arr.push(Random.cnSentence(2, 10));
//         }
//         return arr.join("，") + "。";
//     }
// });

//     var userInfo = {
//         userType: 4
//     };
//     sessionStorage.setItem("userInfo", JSON.stringify(userInfo));

//     var TIME_OUT = 1000;
//     angular.module('myApp.memoryServices', [])
//         .factory('restService', ['$q',
//             function($q) {
//                 return {
//                     getSms: function (params, callback) {
//                     	var deferred = $q.defer();
//                         setTimeout(function() {
//                         	//deferred.resolve({"id":3195,"orgId":263502,"orgName":"胡建丽加盟商0901-02","schoolId":209,"schoolName":"胡建丽0901-02","classId":2521,"sendId":263505,"sendName":"胡建丽学校0901-02","recId":266617,"recName":"大师0300家长","mobile":"18098787910","sendThreadId":null,"recThreadId":null,"content":"今天的作业是：\r\n背古诗！","num":1,"ynView":0,"type":1,"channelType":2,"state":2,"inOut":0,"createTime":1441156602000});
//                         	var tpl = {
//                         		'id': '@increment',
//                         		'type|0-6': 1,
//                         		'sendName': '@chineseName',
//                         		'createTime': '@time(T)',
//                         		'content': '@cnParagraph(3)'
//                         	}
//                         	var d = Mock.mock(tpl);
//                         	deferred.resolve(d);
//                         }, TIME_OUT);
//                         return {
//                         	$promise: deferred.promise
//                         };
//                     },
//                     getListPlan: function (params, callback) {
//                     	var deferred = $q.defer();
//                         setTimeout(function() {
//                         	//deferred.resolve({"plainPageNum":1,"pageNum":1,"numPerPage":10,"orderField":"createTime","orderDirection":"desc","totalPage":1,"prePage":1,"nextPage":1,"totalCount":5,"result":[{"id":4962,"orgId":263502,"orgName":"胡建丽加盟商0901-02","schoolId":209,"schoolName":"胡建丽0901-02","classId":2521,"sendId":263505,"sendName":"胡建丽学校0901-02","recId":266617,"recName":"大师0300家长","mobile":"18098787910","sendThreadId":null,"recThreadId":null,"content":"ad","num":1,"ynView":0,"type":0,"channelType":2,"state":2,"inOut":0,"createTime":1441511272000},{"id":4276,"orgId":263502,"orgName":"胡建丽加盟商0901-02","schoolId":209,"schoolName":"胡建丽0901-02","classId":2521,"sendId":263505,"sendName":"胡建丽学校0901-02","recId":266617,"recName":"大师0300家长","mobile":"18098787910","sendThreadId":null,"recThreadId":null,"content":"天气不错，天气好","num":1,"ynView":0,"type":0,"channelType":2,"state":2,"inOut":0,"createTime":1441174243000},{"id":3195,"orgId":263502,"orgName":"胡建丽加盟商0901-02","schoolId":209,"schoolName":"胡建丽0901-02","classId":2521,"sendId":263505,"sendName":"胡建丽学校0901-02","recId":266617,"recName":"大师0300家长","mobile":"18098787910","sendThreadId":null,"recThreadId":null,"content":"今天的作业是：\r\n背古诗！","num":1,"ynView":0,"type":0,"channelType":2,"state":2,"inOut":0,"createTime":1441156602000},{"id":9,"orgId":263502,"orgName":"胡建丽加盟商0901-02","schoolId":209,"schoolName":"胡建丽0901-02","classId":2521,"sendId":263505,"sendName":"胡建丽学校0901-02","recId":266617,"recName":"大师0300家长","mobile":"18098787910","sendThreadId":null,"recThreadId":null,"content":"5","num":1,"ynView":0,"type":0,"channelType":2,"state":2,"inOut":0,"createTime":1441105909000},{"id":8,"orgId":263502,"orgName":"胡建丽加盟商0901-02","schoolId":209,"schoolName":"胡建丽0901-02","classId":2521,"sendId":263505,"sendName":"胡建丽学校0901-02","recId":266617,"recName":"大师0300家长","mobile":"18098787910","sendThreadId":null,"recThreadId":null,"content":"2","num":1,"ynView":0,"type":0,"channelType":2,"state":2,"inOut":0,"createTime":1441105889000}]});
//                         	var tpl = {
//                         		'id': '@increment',
//                         		'type|0-6': 1,
//                         		'sendName': '@chineseName',
//                         		'createTime': '@time(T)',
//                         		'content': '@cnParagraph(2)'
//                         	}
//                         	var tpls = [];
//                         	for(var i=0; i< 10; i++) {
//                         		tpls.push(tpl);
//                         	}
//                         	var d = Mock.mock(tpls);
//                         	deferred.resolve({
//                         		"plainPageNum":1,
//                         		"pageNum":1,
//                         		"numPerPage":10,
//                         		"orderField":"createTime",
//                         		"orderDirection":"desc",
//                         		"totalPage":1,
//                         		"prePage":1,
//                         		"nextPage":1,
//                         		"totalCount":5,
//                         		"result": d
//                         	});
//                         }, TIME_OUT);
//                         return {
//                         	$promise: deferred.promise
//                         };
//                     },
//                     getSmsList: function(pathParam, params, callback) {
//                     	var deferred = $q.defer();
//                         setTimeout(function() {
//                         	var tpl = {
//                         		'id': '@increment',
//                         		'type|0-6': 1,
//                         		'sendName': '@chineseName',
//                         		'createTime': '@time(T)',
//                         		'content': '@cnParagraph(2)'
//                         	}
//                         	var tpls = [];
//                         	for(var i=0; i< 10; i++) {
//                         		tpls.push(tpl);
//                         	}
//                         	var d = Mock.mock(tpls);
//                         	deferred.resolve({
//                         		"plainPageNum":1,
//                         		"pageNum":1,
//                         		"numPerPage":10,
//                         		"orderField":"createTime",
//                         		"orderDirection":"desc",
//                         		"totalPage":1,
//                         		"prePage":1,
//                         		"nextPage":1,
//                         		"totalCount":5,
//                         		"result": d
//                         	});
//                         }, TIME_OUT);
//                         return {
//                         	$promise: deferred.promise
//                         };
//                     },
//                     getClassList: function(params, callback) {
//                         return callback([{"id":1309,"inviteCode":null,"orgId":2348,"pname":"一年级一班","dutyGroupId":2348,"entrustGroupId":866,"name":"一年级一班","shortName":"一年级一班","address":null,"description":null,"dutyTypes":[],"oldTeacherGroupId":null,"teacherGroupId":null,"teacherName":"","tel":"","gradePname":null,"gradeName":null,"schoolName":null,"schoolGroupId":null,"cityName":null,"teacherPhoneNo":null,"hasHotline":false,"deleteMq":true},{"id":2,"inviteCode":null,"orgId":1041,"pname":"小学2年级1班","dutyGroupId":1041,"entrustGroupId":381,"name":"1班","shortName":"1班","address":null,"description":null,"dutyTypes":[],"oldTeacherGroupId":null,"teacherGroupId":null,"teacherName":"","tel":"","gradePname":null,"gradeName":null,"schoolName":null,"schoolGroupId":null,"cityName":null,"teacherPhoneNo":null,"hasHotline":false,"deleteMq":true},{"id":3,"inviteCode":null,"orgId":1042,"pname":"小学3年级1班","dutyGroupId":1042,"entrustGroupId":382,"name":"1班","shortName":"1班","address":null,"description":null,"dutyTypes":[],"oldTeacherGroupId":null,"teacherGroupId":null,"teacherName":"","tel":"","gradePname":null,"gradeName":null,"schoolName":null,"schoolGroupId":null,"cityName":null,"teacherPhoneNo":null,"hasHotline":false,"deleteMq":true},{"id":4,"inviteCode":null,"orgId":1043,"pname":"小学4年级1班","dutyGroupId":1043,"entrustGroupId":383,"name":"1班","shortName":"1班","address":null,"description":null,"dutyTypes":[],"oldTeacherGroupId":null,"teacherGroupId":null,"teacherName":"","tel":"","gradePname":null,"gradeName":null,"schoolName":null,"schoolGroupId":null,"cityName":null,"teacherPhoneNo":null,"hasHotline":false,"deleteMq":true},{"id":5,"inviteCode":null,"orgId":1044,"pname":"小学5年级1班","dutyGroupId":1044,"entrustGroupId":384,"name":"1班","shortName":"1班","address":null,"description":null,"dutyTypes":[],"oldTeacherGroupId":null,"teacherGroupId":null,"teacherName":"","tel":"","gradePname":null,"gradeName":null,"schoolName":null,"schoolGroupId":null,"cityName":null,"teacherPhoneNo":null,"hasHotline":false,"deleteMq":true},{"id":6,"inviteCode":null,"orgId":1045,"pname":"小学6年级1班","dutyGroupId":1045,"entrustGroupId":385,"name":"1班","shortName":"1班","address":null,"description":null,"dutyTypes":[],"oldTeacherGroupId":null,"teacherGroupId":null,"teacherName":"","tel":"","gradePname":null,"gradeName":null,"schoolName":null,"schoolGroupId":null,"cityName":null,"teacherPhoneNo":null,"hasHotline":false,"deleteMq":true},{"id":7,"inviteCode":null,"orgId":1046,"pname":"小学6年级2班","dutyGroupId":1046,"entrustGroupId":385,"name":"2班","shortName":"2班","address":null,"description":null,"dutyTypes":[],"oldTeacherGroupId":null,"teacherGroupId":null,"teacherName":"","tel":"","gradePname":null,"gradeName":null,"schoolName":null,"schoolGroupId":null,"cityName":null,"teacherPhoneNo":null,"hasHotline":false,"deleteMq":true}]);
//                     },
//                     getParentList: function(param, callback) {
//                         return callback([{"id":63695,"dutyGroupId":63695,"entrustGroupId":169204,"loginId":null,"loginName":null,"loginType":null,"phoneNo":"15284716225","email":null,"qqNo":null,"password":"315ec7c9b10c373af0c3984bdb82511a","realname":"刘思雨家长","sex":null,"pic":null,"status":0,"createTime":1410316659000,"operateTime":null,"question1":null,"question2":null,"question3":null,"answer1":null,"answer2":null,"answer3":null,"dutyTypes":[],"provinceId":null,"provinceName":null,"cityId":null,"cityName":null,"districtId":null,"districtName":null,"tel":null,"parentType":null,"parTypeName":"家长","relationType":null,"operatorGroupId":null,"operatorRealname":null,"schoolId":null,"schoolGroupId":null,"classGroupId":null,"hasHotline":false,"studentName":null,"addNum":null},{"id":63693,"dutyGroupId":63693,"entrustGroupId":169203,"loginId":null,"loginName":null,"loginType":null,"phoneNo":"15682353683","email":null,"qqNo":null,"password":"d9e8bf73fbab28754997f706781400a7","realname":"户 倩家长","sex":null,"pic":null,"status":0,"createTime":1410316659000,"operateTime":null,"question1":null,"question2":null,"question3":null,"answer1":null,"answer2":null,"answer3":null,"dutyTypes":[],"provinceId":null,"provinceName":null,"cityId":null,"cityName":null,"districtId":null,"districtName":null,"tel":null,"parentType":null,"parTypeName":"家长","relationType":null,"operatorGroupId":null,"operatorRealname":null,"schoolId":null,"schoolGroupId":null,"classGroupId":null,"hasHotline":false,"studentName":null,"addNum":null},{"id":63692,"dutyGroupId":63692,"entrustGroupId":169202,"loginId":null,"loginName":null,"loginType":null,"phoneNo":"13698276384","email":null,"qqNo":null,"password":"ae1ec0d860f6363e13758395d3545099","realname":"姜少杰家长","sex":null,"pic":null,"status":0,"createTime":1410316659000,"operateTime":null,"question1":null,"question2":null,"question3":null,"answer1":null,"answer2":null,"answer3":null,"dutyTypes":[],"provinceId":null,"provinceName":null,"cityId":null,"cityName":null,"districtId":null,"districtName":null,"tel":null,"parentType":null,"parTypeName":"家长","relationType":null,"operatorGroupId":null,"operatorRealname":null,"schoolId":null,"schoolGroupId":null,"classGroupId":null,"hasHotline":false,"studentName":null,"addNum":null},{"id":63691,"dutyGroupId":63691,"entrustGroupId":169201,"loginId":null,"loginName":null,"loginType":null,"phoneNo":"18181476878","email":null,"qqNo":null,"password":"c025cd6437997d50325df34ee5d89351","realname":"单俊皓家长","sex":null,"pic":null,"status":0,"createTime":1410316659000,"operateTime":null,"question1":null,"question2":null,"question3":null,"answer1":null,"answer2":null,"answer3":null,"dutyTypes":[],"provinceId":null,"provinceName":null,"cityId":null,"cityName":null,"districtId":null,"districtName":null,"tel":null,"parentType":null,"parTypeName":"家长","relationType":null,"operatorGroupId":null,"operatorRealname":null,"schoolId":null,"schoolGroupId":null,"classGroupId":null,"hasHotline":false,"studentName":null,"addNum":null},{"id":63700,"dutyGroupId":63700,"entrustGroupId":169208,"loginId":null,"loginName":null,"loginType":null,"phoneNo":"18090206070","email":null,"qqNo":null,"password":"230e1a3e1d8b9139fe22bc415558ed81","realname":"傅瑜欣家长","sex":null,"pic":null,"status":0,"createTime":1410316659000,"operateTime":null,"question1":null,"question2":null,"question3":null,"answer1":null,"answer2":null,"answer3":null,"dutyTypes":[],"provinceId":null,"provinceName":null,"cityId":null,"cityName":null,"districtId":null,"districtName":null,"tel":null,"parentType":null,"parTypeName":"家长","relationType":null,"operatorGroupId":null,"operatorRealname":null,"schoolId":null,"schoolGroupId":null,"classGroupId":null,"hasHotline":false,"studentName":null,"addNum":null},{"id":63699,"dutyGroupId":63699,"entrustGroupId":169207,"loginId":null,"loginName":null,"loginType":null,"phoneNo":"13908297814","email":null,"qqNo":null,"password":"5e651da1654b8e2babc88ebcc9a65d61","realname":"黎蒋梅家长","sex":null,"pic":null,"status":0,"createTime":1410316659000,"operateTime":null,"question1":null,"question2":null,"question3":null,"answer1":null,"answer2":null,"answer3":null,"dutyTypes":[],"provinceId":null,"provinceName":null,"cityId":null,"cityName":null,"districtId":null,"districtName":null,"tel":null,"parentType":null,"parTypeName":"家长","relationType":null,"operatorGroupId":null,"operatorRealname":null,"schoolId":null,"schoolGroupId":null,"classGroupId":null,"hasHotline":false,"studentName":null,"addNum":null},{"id":63698,"dutyGroupId":63698,"entrustGroupId":169206,"loginId":null,"loginName":null,"loginType":null,"phoneNo":"18382905661","email":null,"qqNo":null,"password":"d6c250bd074af5987837456f5a7ba0ba","realname":"姜天昊家长","sex":null,"pic":null,"status":0,"createTime":1410316659000,"operateTime":null,"question1":null,"question2":null,"question3":null,"answer1":null,"answer2":null,"answer3":null,"dutyTypes":[],"provinceId":null,"provinceName":null,"cityId":null,"cityName":null,"districtId":null,"districtName":null,"tel":null,"parentType":null,"parTypeName":"家长","relationType":null,"operatorGroupId":null,"operatorRealname":null,"schoolId":null,"schoolGroupId":null,"classGroupId":null,"hasHotline":false,"studentName":null,"addNum":null},{"id":63697,"dutyGroupId":63697,"entrustGroupId":169205,"loginId":null,"loginName":null,"loginType":null,"phoneNo":"18282106120","email":null,"qqNo":null,"password":"30cee662c00834c462f069699d2ba9d3","realname":"彭  丽家长","sex":null,"pic":null,"status":0,"createTime":1410316659000,"operateTime":null,"question1":null,"question2":null,"question3":null,"answer1":null,"answer2":null,"answer3":null,"dutyTypes":[],"provinceId":null,"provinceName":null,"cityId":null,"cityName":null,"districtId":null,"districtName":null,"tel":null,"parentType":null,"parTypeName":"家长","relationType":null,"operatorGroupId":null,"operatorRealname":null,"schoolId":null,"schoolGroupId":null,"classGroupId":null,"hasHotline":false,"studentName":null,"addNum":null},{"id":63714,"dutyGroupId":63714,"entrustGroupId":169196,"loginId":null,"loginName":null,"loginType":null,"phoneNo":"15508287995","email":null,"qqNo":null,"password":"c5607b092581b68921a283e6b9951313","realname":"张韬家长","sex":null,"pic":null,"status":0,"createTime":1410316658000,"operateTime":null,"question1":null,"question2":null,"question3":null,"answer1":null,"answer2":null,"answer3":null,"dutyTypes":[],"provinceId":null,"provinceName":null,"cityId":null,"cityName":null,"districtId":null,"districtName":null,"tel":null,"parentType":null,"parTypeName":"家长","relationType":null,"operatorGroupId":null,"operatorRealname":null,"schoolId":null,"schoolGroupId":null,"classGroupId":null,"hasHotline":false,"studentName":null,"addNum":null}]);
//                     },
//                     send: function(params, callback) {
//                         setTimeout(function(){
//                             return callback({"status": false, "message": "短信服务未开通或账户已欠费"});
//                         }, TIME_OUT);
//                     },
//                     oauth: function(callback) {
//                     	return callback({"statusCode":200,"message":"绑定成功！","forwardUrl":"","data":null});
//                     },
//                     access: function(params, callback) { // 根据openid获取家校通用户信息
//                     	return callback({"statusCode":200,"message":"操作成功.","forwardUrl":"","data":{"id":3,"dutyGroupId":null,"entrustGroupId":null,"loginId":null,"loginName":"abc123456","loginType":null,"phoneNo":null,"email":null,"qqNo":null,"password":"e10adc3949ba59abbe56e057f20f883e","realname":"林","sex":null,"pic":null,"status":0,"createTime":1395167264000,"operateTime":null,"question1":null,"question2":null,"question3":null,"answer1":null,"answer2":null,"answer3":null,"dutyTypes":[{"id":4,"name":"业务员","description":null,"type":1,"dutyTypePermissionDTOs":[]}],"provinceId":null,"provinceName":null,"cityId":null,"cityName":null,"districtId":null,"districtName":null,"tel":null,"parentType":null,"parTypeName":null,"relationType":null,"operatorGroupId":null,"operatorRealname":null,"schoolId":null,"schoolGroupId":null,"classGroupId":null,"hasHotline":false,"studentName":null,"addNum":null}});
//                     },
//                     sendYzm: { //发送验证码的接口
//                     	method: 'GET',
//                     	url:  '/services/findPassword/saveYzm/:phoneNum'
//                     },
//                     resetPwd: function(){ //重置密码
//                     	var deferred = $q.defer();
// 						deferred.resolve();
// 						return {
//                         	$promise: deferred.promise
//                         };
//                     },
//                     getTeacherGroupList: {
//                     	method: 'GET',
//                     	url:  '/services/user/getTeacherGroupList/:schoolId',
//                     	isArray: true
//                     },
//                     getTeacherList: {
//                     	method: 'GET',
//                     	url: '/services/user/getTeacherList/:groupId',
//                     	isArray: true
//                     }
//                 }
//             }])
//             ;
// }());


(function() {
    'use strict';

    angular.module('watch.resource.mock', ['ngResource', 'watch.config'])
        .factory('positionService', ['$resource', 'AppConfig', function($resource, AppConfig){
            return {"statusCode":200,"message":"","forwardUrl":"","data":{"id":6,"watch":"123","userId":2,"realname":"家校通","longitude":"1932.132","latitude":"43243.22","createTime":1445246874000}};
        }])
        .factory('userService', ['$resource', '$rootScope', 
            function($resource, $rootScope){
                return $resource(AppConfig.API_HOST + '/service/user/:id', {id: '@id'}, {
                    //根据userId查询手表是否绑定
                    judgeBinding: {
                        method: 'GET',
                        url: AppConfig.API_HOST + '/services/bindWatch/judgeBinding/:userId',
                        param: {
                            userId: '@userId'
                        }
                    }
                });
            }
        ])
        .factory('mapService', ['$resource', '$rootScope', 
            function($resource, $rootScope){
                return $resource(AppConfig.API_HOST + '/service/user/:id', {id: '@id'}, {
                });
            }
        ])
        .factory('childrenService', ['$resource', function($resource){
            return $resource('', {}, {
                // 根据孩子的groupId显示昵称、生日、性别、学校、年级、班级 
                // 返回示例 返回示例：[{"gradeName":"小学1年级","gradeGroupId":177391,"className":"1班","classGroupId":177333,"schoolName":"1111111111111","sex":1,"nickname":null,"Birthday":null}]
                findChildrenBySid: {
                    method: 'GET',
                    url: AppConfig.API_HOST + '/services/findRoles/findChildrenBySid/:dutyGroupId',
                    param: {
                        dutyGroupId: '@dutyGroupId'
                    },
                    isArray: true
                }
            });
        }])
        // 静音时段
        .factory('silentTimeService', ['$resource', function($resource){
            return $resource('', {}, {
                getList: function(a, b, callback){
                    return callback([{"id":1,"watchId":null,"weekday":"周一,周二","amStime":"07:20","amEtime":"11:30","pmStime":"13:20","pmEtime":"17:30","status":1}]);
                }
            });
        }])
        ;
}());