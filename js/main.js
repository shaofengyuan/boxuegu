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
		common:{
			deps: ['jQuery']
		}
	}

});

require(['jQuery','bootstrap','nprogress','common'],function () {
	console.log(123);
});

(function(window) {

	var pathname = window.location.pathname;


	switch(pathname) {
		case '/html/user/user_list.html':
			require(['userList']);
			break;
		case '/html/user/user_profile.html':
			require(['userProfile']);
			break;
		case '/html/teacher/teacher_add.html':
			require(['teacherAdd']);
			break;
		case '/html/teacher/teacher_list.html':
			require(['teacherList']);
			break;
		case '/html/home/login':
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

})(window);
