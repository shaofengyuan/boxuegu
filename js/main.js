requirejs.config({
	baseUrl:'/',
	paths: {

		// 第三方库的路径配置
		jQuery: 'lib/jquery/jquery.min',
		bootstrap: 'lib/bootstrap/js/bootstrap.min',
		nprogress:'lib/nprogress/nprogress',
		common: 'js/common',

		// 自己写的路径配置
		userList: 'js/user/list',
		userProfile: 'js/user/profile',
		teacherAdd: 'js/teacher/add',
		teacherList: 'js/teacher/list',
		homeLogin: 'js/home/login',
		homeRepass: 'js/home/repass',
		homeSetting: 'js/home/setting',
		courseAdd: 'js/course/add',
		courseAddStep1: 'js/course/add_step1',
		courseAddStep2: 'js/course/add_step2',
		courseAddStep3: 'js/course/add_step3',
		courseCategory: 'js/course/category',
		courseCategoryAdd: 'js/course/category_add',
		courseCategoryList: 'js/course/list',
		courseCategoryTopic: 'js/course/topic',
	},
	shim: {
		bootstrap: {
			deps: ['jQuery']
		},
	}

});

require(['jQuery','bootstrap','nprogress','common'],function () {
	console.log(123);
	console.log(window);
	console.log(window.location.pathname);
});

(function(window) {

	var pathname = window.location.pathname;
	switch(pathname) {
		case '/html/user/list.html':
			require(['userList']);
			break;
		case '/html/user/profile.html':
			require(['userProfile']);
			break;
		case '/html/teacher/add':
			require(['teacherAdd']);
			break;
		case '/html/teacher/list':
			require(['teacherList']);
			break;
		case '/html/home/login':
			require(['homeLogin']);
			break;
		case '/html/home/repass':
			require(['homeRepass']);
			break;
		case '/html/home/setting':
			require(['homeSetting']);
			break;
		case '/html/course/add':
			require(['courseAdd']);
			break;
		case '/html/course/add_step1':
			require(['courseAddStep1']);
			break;
		case '/html/course/add_step2':
			require(['courseAddStep2']);
			break;
		case '/html/course/add_step3':
			require(['courseAddStep3']);
			break;
		case '/html/course/category':
			require(['courseCategory']);
			break;
		case '/html/course/category_add':
			require(['courseCategoryAdd']);
			break;
		case '/html/course/list':
			require(['courseCategoryList']);
			break;
		case '/html/course/topic':
			require(['courseCategoryTopic']);
			break;
	}

})(window);
