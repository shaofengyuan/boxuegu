define(['jquery','template'],function ($,template) {
	console.log('course-add-step2');

	if(location.search.slice(1)) {
		var csId = location.search.slice(1);
		//渲染页面
		$.get('/v6//course/picture', csId, function (data) {
			console.log(data);
			$('.steps').html(template('addstep2', data.result));
			//上传图片
			$('#upfile').change(function () {
				var file = document.querySelector('#upfile')
				var form = document.querySelector('form');
				var formData = new FormData(form);
				formData.append('cs_cover_original',file.files[0]);

				var xhr = new XMLHttpRequest();
				xhr.open('post','/v6/uploader/cover');
				xhr.send(formData);
				xhr.onreadystatechange = function () {
					if(xhr.readyState == 4 && xhr.status == 200){
						console.log(JSON.parse(xhr.responseText));
						$('.preview>img').attr('src',JSON.parse(xhr.responseText).result.path)
					}
				}
			})

		})
	}






	//步骤选择
	$('.forwards>li:eq(1)>a').addClass('active');
	//侧边下拉
	$('.list-unstyled').eq(1).show().find('li').eq(0).find('a').addClass('active')
})
