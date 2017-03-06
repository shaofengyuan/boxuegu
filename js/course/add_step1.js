define(['jquery','template','common','ckeditor'],function ($,template,undefined,ckeditor) {

	if(location.search.slice(1)){
		var csId = location.search.slice(1);
		//渲染页面
		$.get('/v6/course/basic',csId,function (data) {
			console.log(data);
			$('.course-add').html(template('courseAdd1',data.result));
			//监听课程分类选择下拉框的change时间
			$('#category-top-select').change(function () {
				//获取顶级分类的cg_id
				var cgId = $(this).find('option:selected').val();
				//根据顶级分类的cg_id发送请求，获取相应的子级分类
				$.get('/v6/category/child',{cg_id:cgId},function (data) {
					//动态生成option课程分类子级，添加到对应的select元素中。
					var htmlStr = '{{ each result }} ' +
								'<option  value="{{ $value.cg_id }}">{{ $value.cg_name }}</option>' +
								'{{ /each }}';
					//用template.compile返回一个渲染函数
					var render = template.compile(htmlStr);
					//往这个渲染函数里传送数据
					var html =  render(data);
					$('#category-child-select').html(html);
				})
			})
			//保存
			$('#addsetp1Save').on('click',function () {
				$.post('/v6/course/update/basic',$('.form-horizontal').serialize(),function (data) {
					if (data.code ==200){
						location.href = 'course_add_step2.html?cs_id='+data.result.cs_id;
					}
				})
			})
		})
	}else{
		$('.course-add').html(template('courseAdd1',{}));
	}

	//步骤选择
	$('.forwards>li:eq(0)>a').addClass('active');
	//侧边下拉
	$('.list-unstyled').eq(1).show().find('li').eq(0).find('a').addClass('active')
})
