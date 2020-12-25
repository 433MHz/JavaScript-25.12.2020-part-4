var imageNumber = 1;

function insertImage()
{
	var imgText = "<img src=\"img/slajd" + imageNumber + ".jpg\" width=\"650\" height=\"650\">";
	document.getElementById("containerBottom").innerHTML = imgText;
	$("#containerBottom").fadeIn(500);
	imageNumber++;
	setTimeout("insertImage()", 3000);
	setTimeout("showOut()", 5000);
	if(imageNumber > 3){
		imageNumber = 1;
	}
}

function showOut()
{
	$("#containerBottom").fadeOut(500);
}