var today = new Date();
var previousTime;

function startTime() {
	previousTime = today;
	today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	var ms = today.getMilliseconds().toString().slice(0, 2);
	var ampm = (' PM');
	  if (h < 12) {ampm = (' AM')};
      if (h > 12) {h -= 12};
	h = checkTime (h);
	var mString = checkTime (m);
	s = checkTime (s);
	ms = checkTime (ms);
	ampm = checkTime (ampm);
	document.getElementById('clock').innerHTML = h + ":" + mString + ":" + s + ":" + ms + ampm;

	if (previousTime.getMinutes() != m) {
		var randomColor = getRandomColor();
		document.getElementById('clock').style.backgroundColor = randomColor;
	}
}
function checkTime(i) {
	if (i < 10) {
		i = "0" + i
	};
	return i;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function changeBackgroundColor() {

}
var t = setInterval(startTime, 1);