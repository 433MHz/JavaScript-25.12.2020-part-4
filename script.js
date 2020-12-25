var slideNumber = 1;
var timer1;
var timer2;

function show()
{
	image = "<img src=\"img/slajd" + slideNumber + ".jpg\" width=\"600\" height=\"600\"/>"

	document.getElementById("container").innerHTML = image;

	slideNumber++;
	if(slideNumber > 3){
		slideNumber = 1;
	}
	timer1 = setTimeout("show()" , 5000);
	showIn();
	timer2 = setTimeout("showOut()" , 4500);
}

function showIn(){
	$("#container").fadeIn(500);
}

function showOut()
{
	$("#container").fadeOut(500);
}

function choose(button)
{
	slideNumber = button;
	clearTimeout(timer1);
	clearTimeout(timer2);
	show();
}
