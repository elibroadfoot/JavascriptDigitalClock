function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes().toString();
	var s = today.getSeconds().toString();
	var ms = today.getMilliseconds().toString().slice(0, 2);
	var ampm = (' PM ');
	if (h < 12) {ampm = (' AM ')};
    if (h > 12) {h -= 12};
	h = checkTime (h);
	m = checkTime (m);
	s = checkTime (s);
	ms = checkTime (ms);
	ampm = checkTime (ampm);
	document.getElementById('clock').innerHTML = h + ":" + m + ":" + s + ":" + ms + ampm;
	var t = setTimeout(startTime, 1);
}
function checkTime(i) {
	if (i < 10) {i = "0" + i};
	return i;
}
