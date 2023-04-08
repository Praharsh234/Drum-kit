for (var i = 0 ;i< document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click" , handleClick);
}
function handleClick(){
    // this.style.color = "white"; 
    // jab bhi click hoga white hoo jayega
    
    var b = this.innerHTML;
    drumBeat(b);
    animation(b);
}

document.addEventListener("keypress" , function(event){
    drumBeat(event.key);
    animation(event.key)
})


function drumBeat(drum){
    switch (drum) {
        case "q":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "w":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "e":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "r":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "t":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "y":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "u":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default:
            alert(buttoninnetHtml);
            break;
    }
}


function animation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    } , 100);
}

// var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();