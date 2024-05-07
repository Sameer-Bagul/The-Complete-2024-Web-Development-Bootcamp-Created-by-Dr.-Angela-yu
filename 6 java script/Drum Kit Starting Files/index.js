// Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll( ".drum").length;

for (var i = 0; i < numberOfDrumButtons ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {    // we are difining the function in event listner as it will respond to click when it will get clicked only ! if we want to give the name of function only and declare the function some where in the code  then we should type the name of the function only the () - parenthisis mus not be given in this case  
        //console.log(this);  // by this code line we get to know that which buttonos clicked, the this key word is usefull fpr this feature
        // this.style.color = " white";        
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    });
}

// Detecting Keyboard Press

document.addEventListener("keydown", function(event) {    
    makeSound(event.key)
});

// Function to make sound 

function makeSound(key){
    
    switch (key) {

        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");   // here we are  creating the new audio oject and the giving it the audio file to be played with the help of the play function. 
            // var tom1 = new Audio("sounds/aah.mp3");
            tom1.play();  

        break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");   
            tom2.play();    
        break;
    
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");   
            tom3.play();    
        break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");   
            tom4.play();    
        break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");   
            audio.play();    
        break;

        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");   
            audio.play();    
        break;

        case "l":
            var audio = new Audio("sounds/crash.mp3");   
            audio.play();    
        break;
    
        default:
            break;
            
    }

}