define(["jquery","nprogress"],function($,NProgress){
	// 左侧导航下拉列表
	NProgress.start();
	NProgress.done();
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});


	//左侧导航点击到哪个，哪个就显示出来
	var pathname = window.location.pathname;//先获取当前页面的路径
	$('.navs a').removeClass('active').filter('[href="'+pathname+'"]').addClass('active').parents('ul').show();


	//退出功能
	$('#logout').click(function () {
		console.log(12);
		$.post('/v6/logout',function (data) {
			console.log(data);
			if (data.code == 200){
				location.href = '/html/home/login.html';
			}
		})
	});

	// 获取本地cookie用户信息，同时做容错处理
	var userInfo = null;
	try {
		userInfo = JSON.parse($.cookie('userInfo'))
	}catch(e) {
		userInfo = {};
	}

	// 然后展示到左侧导航
	$('.aside .profile h4').html(userInfo.tc_name? userInfo.tc_name: 'doudou');
	$('.aside .profile img').attr('src', userInfo.tc_avatar? userInfo.tc_avatar: '/images/default.png');


})
