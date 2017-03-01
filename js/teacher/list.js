define(['jquery','template','common'],function ($,template,undefined) {

	//渲染讲师列表
	$.get('/v6/teacher',function (data) {
		if (data.code==200){
			var html = template('teacher-list-tpl',data);
			$('#teacher-lists').html(html);
		}
	});

	//然后获取讲师详细信息并展示。
	$('#teacher-lists').on('click',".teacher-view",function () {
		$.get('/v6/teacher/view',{tc_id:$(this).parent().attr('data-id')},function (data) {
			var html = template('teacher-view-tpl',data.result);
			$('#teacherModal').html(html);
		})
	});

	//讲师状态修改
	$('#teacher-lists').on('click',".teacher-status",function () {
		var $self = $(this);
		$.ajax({
			url:'/v6/teacher/handle',
			type:'post',
			data:{
				tc_id:$(this).parent().attr('data-id'),
				tc_status:$(this).parent().attr('data-status'),
			},
			success:function (data) {
				if (data.code ==200){
					data-status==0?'开启':'注销'
				}
			}
		})
	});

});
