define(['jquery','common','nprogress'],function ($,undefined,nprogress) {
	$('#create').on('click',function () {
		$.post('/v6/course/create',$('form').serialize(),function (data) {
			location.href = '/html/course/course_add_step1.html?cs_id='+data.result.cs_id;
		});
		return false;
	})
});


