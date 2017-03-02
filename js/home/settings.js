define(['jquery','template','foundationDatepicker'],function ($,template) {

	//渲染基本信息
	$.get('/v6/teacher/profile',function (data) {
		var html = template('teacher-profile-tpl',data.result);
		$('.form-horizontal').html(html);
		//日期
		require(['runDate']);

		//头像上传
		var file = document.querySelector('#upfile');
		file.onchange=function () {

			var form = document.querySelector('.form-horizontal');
			var formData = new FormData(form);
			formData.append('tc_avatar',file.files[0]);

			var xhr = new XMLHttpRequest();
			xhr.open('post','/v6/uploader/avatar');
			xhr.send(formData);
			xhr.onreadystatechange = function () {
				if(xhr.readyState == 4 && xhr.status == 200){
					document.querySelector('#avatar').src = JSON.parse(xhr.responseText).result.path;
					$('.avatar.img-circle img').attr('src',JSON.parse(xhr.responseText).result.path);
				}
			}
		}
	});


	//保存
	$('.form-horizontal').on('click','#teacher-save',function () {
		var tcId = $(this).parent().attr('data-id');
		$.post('/v6/teacher/modify',"tc_id="+tcId+"&"+$('.form-horizontal').serialize(),function (data) {
			history.back();
		})

		return false;
	});

})
