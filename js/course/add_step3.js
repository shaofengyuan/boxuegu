define(['jquery','template'],function ($,template) {

	if(location.search.slice(1)) {
		var csId = location.search.slice(1);
		//渲染页面
		$.get('/v6//course/picture', csId, function (data) {
			console.log(data);
			$('.steps').html(template('addsetps3', data.result));

		})
	}




	//步骤选择
	$('.forwards>li:eq(2)>a').addClass('active');
	//侧边下拉
	$('.list-unstyled').eq(1).show().find('li').eq(0).find('a').addClass('active')
})
