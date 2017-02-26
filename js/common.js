define(["jQuery","nprogress"],function(a,NProgress){
	NProgress.start();

	NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});
})
