define(['jquery','template','foundationDatepicker','region','ckeditor'],function ($,template) {

	//渲染基本信息
	$.get('/v6/teacher/profile',function (data) {
		$('.form-horizontal').html(template('teacher-profile-tpl',data.result));
		//日期
		require(['runDate']);
		//地址插件
		$('.hometown').region({
			url:'/lib/region/region.json',
		})
		//富文本
		var edit = CKEDITOR.replace('ckeditor', {
			toolbarGroups: [
				{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
				{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
				{ name: 'links' },
				{ name: 'insert' },
				{ name: 'forms' },
				{ name: 'tools' },
				{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
				{ name: 'others' },
			]
		});
		window.edit = edit;

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
		$('#ckeditor').val(edit.getData());
		$.post('/v6/teacher/modify',$('.form-horizontal').serialize(),function (data) {
			// history.back();//返回上一个页面
			location.reload();
		})

		return false;
	});

})
