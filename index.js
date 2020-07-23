var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageSelector = document.querySelector('#message');
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;


var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function(){
   colors = generateRandomColors(6);
   pickedColor = pickColor();

   colorDisplay.textContent = pickColor();

for (let i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    h1.style.backgroundColor = "#232323"
}

})

var diff = document.querySelectorAll('.btn');
 for(var i=0;i<diff.length;i++){
     diff[i].addEventListener('click', ()=>{
         if(this.id==="Hard")
         alert('You clicked a hard button')

         else
         alert('You clicked a easy button')
     })
 }


for (let i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add quick listeners
    squares[i].addEventListener('click', function(){
        // grab color of the clicked square
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
        messageSelector.textContent = " Correct!..";
         changeColors(clickedColor);
         h1.style.backgroundColor = clickedColor;
         resetButton.textContent = "Play Again ?";
    
        }
        else{
        this.style.background = '#232323';
        messageSelector.textContent = 'try Again';
        }
    })    
}

function changeColors (color){
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;   
        
    }

}
function pickColor(){
     var random = Math.floor(Math.random() * colors.length);
     return colors[random];
}

function generateRandomColors(num){
    // make an array 
    const arr = []
   for(var i=0; i<num;i++){
       // get random color and push it into the array
       arr.push(randomColor());
   }


  return arr;
}

function randomColor(){


   // pick a red from 0-255
   var r = Math.floor(Math.random() * 256);
   // pick a green
    var g =Math.floor(Math.random() * 256);
   // pick a blue
    var b=Math.floor(Math.random() * 256);
       return "rgb(" + r +", " + g + ", " + b + ")";
 

}

