for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        console.log(this.innerHTML)
        var key = this.innerHTML;
        makeSound(key);
        btnAnimation(key);
    })
}

function makeSound(key){
    switch(key){
        case 'W':
        var audio = new Audio("sounds/tom-1.mp3")
        audio.play();
        break;

        case 'A':
        var audio = new Audio("sounds/tom-2.mp3")
        audio.play();
        break;

        case 'S':
        var audio = new Audio("sounds/tom-3.mp3")
        audio.play();
        break;

        case 'D':
        var audio = new Audio("sounds/tom-4.mp3")
        audio.play();
        break;

        case 'J':
        var audio = new Audio("sounds/snare.mp3")
        audio.play();
        break;

        case 'K':
        var audio = new Audio("sounds/crash.mp3")
        audio.play();
        break;

        case 'L':
        var audio = new Audio("sounds/kick-bass.mp3")
        audio.play();
        break;
    }
}

function btnAnimation(key){
    document.querySelector("."+key).classList.add("pressed");
    document.querySelector("."+key).classList.add("pressed");

    
}