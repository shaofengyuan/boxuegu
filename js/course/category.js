define(['jquery','template'],function ($,template) {
	$.get('/v6/category',function (data) {
		console.log(data);
		if (data.code == 200){
			$('.table-bordered').append(template('category-tpl',{list:data.result}))
		}
	})
})
