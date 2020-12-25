var slideNumber = 1;

function show()
{
	image = "<img src=\"img/slajd" + slideNumber + ".jpg\" width=\"600\" height=\"600\"/>"

	document.getElementById("container").innerHTML = image;

	slideNumber++;
	if(slideNumber > 3){
		slideNumber = 1;
	}
	setTimeout("show()" , 2000);
	showIn();
	setTimeout("showOut()" , 1500);
}

function showIn(){
	$("#container").fadeIn(500);
}

function showOut()
{
	$("#container").fadeOut(500);
}