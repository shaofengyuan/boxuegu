define(['jquery','common','template'],function ($,undefined,template) {

	$.get('/v6/course',function (data) {
		console.log(data);
		if (data.code==200){
			$('.courses').append(template('course-tpl',{list:data.result}));
		}
	})


})
