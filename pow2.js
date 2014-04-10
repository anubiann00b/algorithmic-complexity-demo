var num = 0;
var time=setInterval(function(){myTimer()},250);

function myTimer()
{
	document.getElementById("input").innerHTML = num + "\xB2 =";
	document.getElementById("output").innerHTML = Math.pow(2, num);
	num++;
}
function restart()
{
	num = 0
	document.getElementById("input").innerHTML= num + "\xB2 =";
	document.getElementById("output").innerHTML = Math.pow(2, num);
}
function toggleTime()
{
	if(!time)
	{
		time=setInterval(function(){myTimer()},250);
		document.getElementById("on_off").value="stop";
	}
	else 
	{
		clearTimeout(time);
		time = false;
		document.getElementById("on_off").value="start";
	}
}
