var numSquares = 6;
var colors = generateColors(numSquares);

var squares = document.querySelectorAll(".square");

var pickedColor = pickColor();

var color = pickedColor;

var rest_btn = document.getElementById("reset");

var modeButtons = document.querySelectorAll(".mode");

var span_text = document.getElementById("rgb_text");
span_text.textContent = color;


init();

function init(){

		for(var i=0; i<modeButtons.length; i++)
		{
			modeButtons[i].addEventListener("click", function(){
				modeButtons[0].classList.remove("selected");
				modeButtons[1].classList.remove("selected");
				
				this.classList.add("selected");
				
				this.textContent === 'Easy' ?  numSquares =3 : numSquares=6;
				
				reset();
			})
		}

}


function reset(){
	
	colors =generateColors(numSquares);
	pickedColor = pickColor();
	color = pickedColor;
	span_text.textContent = color;
	rest_btn.textContent = "New Colors";
	document.getElementById("top").style.backgroundColor = "steelblue";
	document.getElementById("answer").textContent = "";	

	for(var i=0; i<squares.length; i++)
	{
		if(colors[i]){
		squares[i].style.display = "block";
		squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}

	}
}

rest_btn.addEventListener("click", function(){
	reset();

});


for(var i=0; i< squares.length; i++)
{
	
	squares[i].addEventListener("click", function(){
	if(this.style.backgroundColor === pickedColor)
	{
			document.getElementById("answer").textContent = "Correct!";
			rest_btn.textContent = "Play Again?";
			setColor(pickedColor, squares);
	}
	else
	{

		this.style.background = "#232323";
		document.getElementById("answer").textContent = "Try Again!"
	}
	
	});
}

function setColor(pickedColor, squares){
	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.background = pickedColor;
	}
	document.getElementById("top").style.backgroundColor = pickedColor;
}

function pickColor(){
	var num = Math.floor(Math.random() * colors.length -1);
	return colors[num];
}

function generateColors(val)
{
	var arr = [];
	for(var i=0; i<val; i++){
		arr[i] = generateRandomColor();
	}
	return arr;
}

function generateRandomColor(){
	
	var r = Math.floor(Math.random()*256);
	
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	return "rgb(" +r +", " +g +", " +b + ")";

}
