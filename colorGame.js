var colors = [
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");

var pickedColor = colors[3];
var color = pickedColor.slice(3,pickedColor.length);

var span_text = document.getElementById("rgb_text");
span_text.textContent = color;


for(var i=0; i< squares.length; i++)
{
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
	if(this.style.backgroundColor === pickedColor)
			console.log("Yay");
	else
	{
		console.log("Nay, try again!");
	}
	});
	
}


