 $(function () {
 	var countDownDate = new Date();
 	countDownDate.setFullYear(parseInt($('#countDown').attr('data-countdown-year')));
 	countDownDate.setMonth(parseInt($('#countDown').attr('data-countdown-month')) - 1);
 	countDownDate.setDate(parseInt($('#countDown').attr('data-countdown-date')))
 	countDownDate.setHours(parseInt($('#countDown').attr('data-countdown-24hrTime').split(':')[0]), parseInt($('#countDown').attr('data-countdown-24hrTime').split(':')[1]), parseInt($('#countDown').attr('data-countdown-24hrTime').split(':')[2]));
 	var now = new Date().getTime();
 	var timeRemaining = countDownDate - now;
 	var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
 	var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 	var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
 	var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

 	$('#days').html(days)
 	$('#hours').html(hours)
 	$('#minutes').html(minutes)
 	$('#seconds').html(seconds)

 	var x = setInterval(function () {
 		now = new Date().getTime();
 		timeRemaining = countDownDate - now;
 		days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
 		hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 		minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
 		seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

 		$('#days').html(days)
 		$('#hours').html(hours)
 		$('#minutes').html(minutes)
 		$('#seconds').html(seconds)

 		if (timeRemaining < 0) {
 			clearInterval(x);
 		}
 	}, 1000);
 });
