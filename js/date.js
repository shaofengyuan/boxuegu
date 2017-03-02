define(['jquery','foundationDatepicker'],function () {
	$('#tc_join_date').fdatepicker({
		format: 'yyyy-mm-dd',
	});
	$('#tc_birthday').fdatepicker({
		format: 'yyyy-mm-dd',
	});
/*
	var nowTemp = new Date();
	var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
	var checkin = $('#tc_join_date').fdatepicker({
		onRender: function (date) {
			return date.valueOf() < now.valueOf() ? 'disabled' : '';
		}
	}).on('changeDate', function (ev) {
		if (ev.date.valueOf() > checkout.date.valueOf()) {
			var newDate = new Date(ev.date)
			newDate.setDate(newDate.getDate() + 1);
			checkout.update(newDate);
		}
		checkin.hide();
		$('#tc_birthday')[0].focus();
	}).data('datepicker');
	var checkout = $('#tc_birthday').fdatepicker({
		onRender: function (date) {
			return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
		}
	}).on('changeDate', function (ev) {
		checkout.hide();
	}).data('datepicker');*/

})