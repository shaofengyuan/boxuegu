define(['jquery','template'],function ($,template) {

	//获取讲师信息（编辑）
	var dataBianji = JSON.parse(decodeURIComponent(location.search).slice(1));


	var tcId = dataBianji.tc_id;
	var html = template('teacher-form-tpl',dataBianji);
	$('.teacher-add').html(html);
	console.log(tcId);

	$('#teacher-add-form').on('submit',"[type='submit']",function (e) {
		console.log(23);
		// if(tcId){
		// 	//编辑讲师
		// 	console.log($('#teacher-add-form').serialize() + '&tc_id=' + dataBianji.tc_id);
		// 	$.get('/v6/teacher/update',$('#teacher-add-form').serialize()+'&tc_id='+dataBianji.tc_id,function (data) {
		// 		if (data.code == 200){
		// 			location.href = '/html/teacher/teacher_list.html'
		// 		}
		// 	})
		// }else{
		// 	var html = template('teacher-form-tpl',{});
		// 	$('.teacher-add').html(html);
		// }
		return false;
	})





	//添加讲师
	$('#teacher-add-form').on('submit',function () {
		$.ajax({
			url:'/v6/teacher/add',
			type:'post',
			data:$(this).serialize(),
			success:function (data) {
				location.href = '/html/teacher/teacher_list.html';
			}
		})
		return false;
	})




})
