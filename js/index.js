$(document).ready(function () {
	var startTimer = function(seconds){
		var endtime = moment("2017-10-27 09:00:00.000+05:30");
		var now = moment();
		var duration = moment.duration(endtime.diff(now))
		var timediff = Math.floor(duration.asSeconds())
		var interval = setInterval(function(){
			timediff-=1;
			timedisplay.innerHTML = Math.floor(timediff);
		}, 1000);
	};
	var para = document.getElementById('subtext');
	para.innerHTML = "Awesomeness begins in <span id='timedisplay'></span> seconds";
	startTimer();
});
