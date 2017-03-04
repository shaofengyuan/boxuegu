define(['jquery','common','template'],function ($,undefined,template) {
	console.log('course-list');
		
	$.get('/v6/course',function (data) {
		// console.log(data);
		if (data.code==200){
			$('.courses').append(template('course-tpl',{list:data.result}));
		}
	})


})
