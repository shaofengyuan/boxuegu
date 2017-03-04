define(['jquery','common','nprogress','template'],function ($,undefined,nprogress,template) {
	console.log('course-category-add');
	//课程分类管理
	function cateoryManage() {
		this.cg_id = location.search.slice(1);//要编辑的ID,添加的话则没有
		console.log(location.search.slice(1));
		this.isEdit = !!this.cg_id;//是不是添加项
		this.selectorTpl = 'category-list-tpl';//模板的ID
		this.selectorTplParent = '.course-category';//未来模板的坑的选择器
		this.getCategoryEditUrl = '/v6/category/edit';//获取课程分类编辑信息的url
		this.selectorform = '#category-manage-form';//form表单选择器
		this.submitUrl = this.isEdit?'/v6/category/modify':'/v6/category/add';//表单提交的url
	}

	cateoryManage.prototype={
		//初始化页面1、渲染数据 2、渲染页面 3、监听表单提交事件
		init:function () {
			var self = this;
			this.getRenderData(function (data) {
				self.render(data);
				self.onSubmit()
			});
		},
		//获取模板所需数据,涉及到了异步函数，所以用了fn作为形参来传回调函数
		getRenderData:function (fn) {
			console.log(12);
			if (this.isEdit){
				$.get(this.getCategoryEditUrl,{cg_id:this.cg_id},function (data) {
					console.log(data);
					if(data.code==200){
						fn(data.result);
					}
				})
			}else{
				fn({});
			}
		},

		//渲染模板到页面
		render:function (data) {
			console.log(this.selectorTpl);
			$(this.selectorTplParent).html(template(this.selectorTpl,data));
		},

		//获取表单提交的数据
		getSubmitData:function () {
			return $(this.selectorform).serialize();
		},
		//监听页面submit时间，转为ajax方式提交数据
		onSubmit:function () {
			var self = this;
			$(this.selectorform).on('submit',function () {
				$.ajax({
					url:self.submitUrl,
					type:'post',
					data:self.getSubmitData(),
					success:function (data) {
						if(data.code==200){
							location.href = '/html/course/course_category.html';
						}
					}
				})
				return false;
			});
		},
	}
	new cateoryManage().init();
})
