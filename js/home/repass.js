define(['jquery','common'],function ($,undefined) {

	$('#repass-form').on('submit',function () {
		$.ajax({
			url:'/v6/teacher/repass',
			type:'post',
			data:$('#repass-form').serialize(),
			success:function (data) {
				if (data.code == 200){
					$('#logout').trigger('click');//替我点击了退出按钮
				}
			}
		});
		return false;
	})
})
