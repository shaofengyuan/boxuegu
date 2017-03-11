requirejs.config({
	baseUrl:'/',
	paths: {

		// 第三方库的路径配置
		jquery: 'node_modules/jquery/dist/jquery.min',
		bootstrap: 'node_modules/bootstrap/dist/js/bootstrap',
		jqureyCookie:'lib/jquery-cookie/jquery.cookie',
		nprogress:'lib/nprogress/nprogress',
		template: 'node_modules/art-template/dist/template',
		common: 'js/common/common',
		foundationDatepicker:'/lib/Datepicker/js/foundation-datepicker',
		region:'/lib/region/jquery.region',
		ckeditor:'/lib/ckeditor/ckeditor',


		// 自己写的路径配置
		index:'js/index',
		userList: 'js/user/list',
		userProfile: 'js/user/profile',
		teacherAdd: 'js/teacher/add',
		teacherList: 'js/teacher/list',
		homeLogin: 'js/home/login',
		homeRepass: 'js/home/repass',
		homeSetting: 'js/home/settings',
		courseAdd: 'js/course/add',
		courseAddStep1: 'js/course/add_step1',
		courseAddStep2: 'js/course/add_step2',
		courseAddStep3: 'js/course/add_step3',
		courseCategory: 'js/course/category',
		courseCategoryAdd: 'js/course/category_add',
		courseCategoryList: 'js/course/list',
		courseCategoryTopic: 'js/course/topic',
		runDate:'/js/date'
	},
	shim: {
		bootstrap: {
			deps: ['jquery']
		},
		// common:{
		// 	deps: ['jquery']
		// }
	}

});
//进度条
require(['nprogress'],function (nprogress) {
	nprogress.start();
})
require(['jquery','bootstrap','common']);

(function(window) {
	//获取路径
	var pathname = window.location.pathname;
	require(['jquery','jqureyCookie'],function ($,undefined) {
		/**
		 * 判断登陆状态:
		 *
		 * 1、登陆页
		 * 1.1、没有SESSID，不用管
		 * 1.2、有SESSID，跳转到首页
		 *
		 * 2、其它页
		 * 2.1、没有SESSID，跳转到登陆页
		 * 2.2、有SESSID，不用管
		 */
		if (pathname !== '/html/home/login.html' && !$.cookie('PHPSESSID')){
			location.href = '/html/home/login.html';
		}else if(pathname == '/html/home/login.html' && $.cookie('PHPSESSID')){
			location.href = '/';
		}

		switch(pathname) {
			case '/':
				require(['index']);
				break;
			case '/html/user/user_list.html':
				require(['userList']);
				break;
			case '/html/user/user_profile.html':
				require(['userProfile']);
				break;
			case '/html/teacher/teacher_add.html':
				require(['teacherAdd','runDate']);
				break;
			case '/html/teacher/teacher_list.html':
				require(['teacherList']);
				break;
			case '/html/home/login.html':
				require(['homeLogin']);
				break;
			case '/html/home/repass.html':
				require(['homeRepass']);
				break;
			case '/html/home/settings.html':
				require(['homeSetting']);
				break;
			case '/html/course/course_add.html':
				require(['courseAdd']);
				break;
			case '/html/course/course_add_step1.html':
				require(['courseAddStep1']);
				break;
			case '/html/course/course_add_step2.html':
				require(['courseAddStep2']);
				break;
			case '/html/course/course_add_step3.html':
				require(['courseAddStep3']);
				break;
			case '/html/course/course_category.html':
				require(['courseCategory']);
				break;
			case '/html/course/course_category_add.html':
				require(['courseCategoryAdd']);
				break;
			case '/html/course/course_list.html':
				require(['courseCategoryList']);
				break;
			case '/html/course/course_topic.html':
				require(['courseCategoryTopic']);
				break;
		}
	})
})(window);
