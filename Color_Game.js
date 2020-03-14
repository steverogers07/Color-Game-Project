var numSquares=6;
var colors=[];
var pickedColor;
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.getElementById("reset");
var modeButtons=document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i=0;i<modeButtons.length;i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent==="Easy"?numSquares=3:numSquares=6;
		reset();
	   });
    }
}

function setupSquares(){
    for(var i=0;i<squares.length;i++){
	//add click listners to squares
	squares[i].addEventListener("click",function(){
		//grab color of clicked square
		var clickedColor=this.style.background;
		//compare color of pickedcolor
		if(clickedColor===pickedColor)
		{
			messageDisplay.textContent="Correct!";
			changeColors(clickedColor);
			h1.style.background=clickedColor;
			resetButton.textContent="Play Again?";
		}
		else 
		{
			messageDisplay.textContent="Try Again!";
			this.style.background="#232323";
		}	
	});
  }	
}

function reset(){
	colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    resetButton.textContent="New Colors";
    h1.style.background="steelblue";
    messageDisplay.textContent="";
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.background=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
}

resetButton.addEventListener("click",function(){
	reset();
});

function changeColors(color){
	//loop through all squares
	for(var i=0;i<squares.length;i++)
	{
		//change each color to match given color
		squares[i].style.background=color;
	}
}
 
function pickColor(){
	var index=Math.floor(Math.random()*colors.length);
    return colors[index];
}

function generateRandomColors(num){
	//make an array
    var arr=[];
    //add num random colors to array
    for(var i=0;i<num;i++)
    {
    	r=Math.floor(Math.random()*256);
    	g=Math.floor(Math.random()*256);
    	b=Math.floor(Math.random()*256);
    	var str="rgb("+ r + ", " + g + ", " + b + ")";
    	arr.push(str);
    }
    //return that array
	return arr;
}