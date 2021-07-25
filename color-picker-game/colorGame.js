var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easybtn = document.querySelector("#easy");
var hardbtn = document.querySelector("#hard");
// var modeButtons = document.querySelectorAll(".mode");

// for (var i = 0; i < modeButtons.length; ++i){
//     modeButtons[i].addEventListener("click", function(){
//         modeButtons[0].classList.remove("selected");
//         modeButtons[1].classList.remove("selected");
//         this.classList.add("selected");
        
//     });
// }

easybtn.addEventListener("click", function(){
    numSquares = 3;
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    //create new colors
    colors = generateRandomColors(numSquares);
    //pick new random color from array
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    reset.textContent = "New Colors";
    message.textContent = "";
    h1.style.backgroundColor = "steelblue"
    for (var i = 0; i< squares.length; ++i){   
        if (colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
        }    

});

hardbtn.addEventListener("click", function(){
    numSquares = 6;
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
     //create new colors
     colors = generateRandomColors(numSquares);
     //pick new random color from array
     pickedColor = pickColor();
     colorDisplay.textContent = pickedColor;
     reset.textContent = "New Colors";
     message.textContent = "";
     h1.style.backgroundColor = "steelblue"
     for (var i = 0; i< squares.length; ++i){   
             squares[i].style.backgroundColor = colors[i];
             squares[i].style.display = "block";
         }    
 
});

reset.addEventListener("click", function(){
    //generate new colors
    colors = generateRandomColors(numSquares);
    //pick new random color from array
    pickedColor = pickColor();
    reset.textContent = "New Colors";
    //change colors of squares
    for (var i = 0; i< squares.length; ++i){   
    squares[i].style.backgroundColor = colors[i];
    }    
    h1.style.backgroundColor = "steelblue";
    message.textContent = "";

});

colorDisplay.textContent = pickedColor;

for (var i = 0; i< squares.length; ++i)
{   
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare pickedColor to clickedColor
        if (clickedColor == pickedColor){
            message.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            reset.textContent = "Play Again?";
        }
        else{
            this.style.backgroundColor = "#232323";
            message.textContent = "Incorrect";
        }
    });
}

function changeColors(color){
    //loop through all squares
    for( var i = 0; i<squares.length; ++i)
    {   //change all colors to match color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return(colors[random]);
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //add num random colors to the array
    for (var i = 0; i < num; ++i){
        //get random color and push into array
        arr.push(randomColor());
    }
    //return array
    return arr;

}

function randomColor(){
    var r,g,b;
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
