define(['jquery','template'],function ($,template) {
	if(location.search.slice(1)){
		var csId = location.search.slice(1);
		$.get('/v6/course/basic',csId,function (data) {
			$('.course-add').html(template('courseAdd1',data.result));
		})
	}else{
		$('.course-add').html(template('courseAdd1',{}));
	}

})
