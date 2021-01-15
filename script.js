// We want to let the users change the color 
// for the heading 3
// For that to happen we select the heading thirs
var css = document.querySelector("h3");
// Now We want the users to control the
// Color selecting parameter from html
// Therefore we will select the color 1 and color input type 
// that is added below the h1
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
// We are accesing the body element that will have impact on background color
var body= document.getElementById("Gradient");
// We have used gradient property 
// So we shall change the color of gradient from left to right


// In the above scenario we have selected the color 1 and two
// Now we shall add some functionality by event listner
// Event Listner will respond to it
// color1 and colr2 are also the class created that helps us 
// access the input type button
// console.log(color1); this is to check wether the function was working or not

color1.addEventListener("input",function(){
	body.style.background = "linear-gradient(to right, " + color1.value +", "+color2.value +")";
})
// Now color1. value is the value that user is giving
// We are telling the above function to change the 
// orignal color to this given color
color2.addEventListener("input",function(){
	body.style.background = "linear-gradient(to right, " + color1.value +", "+color2.value +")";
})

// Till now we were able to grab the value from the color