var len = document.querySelectorAll(".drum").length;

for (var i = 0; i < len; i++){
    
document.querySelectorAll(".drum")[i].addEventListener("click", Onclick);
    function Onclick() {
        this.style.color = "Blue";
    }
}

document.querySelectorAll(".drum")[0].addEventListener("click",function() {
    var audio = new Audio('crash.mp3');
    audio.play();
});
document.querySelectorAll(".drum")[1].addEventListener("click",function() {
    var audio = new Audio('kick-bass.mp3');
    audio.play();
});
document.querySelectorAll(".drum")[2].addEventListener("click",function() {
    var audio = new Audio('snare.mp3');
    audio.play();
});
document.querySelectorAll(".drum")[3].addEventListener("click",function() {
    var audio = new Audio('tom-1.mp3');
    audio.play();
});
document.querySelectorAll(".drum")[4].addEventListener("click",function() {
    var audio = new Audio('tom-2.mp3');
    audio.play();
});
document.querySelectorAll(".drum")[5].addEventListener("click",function() {
    var audio = new Audio('tom-3.mp3');
    audio.play();
});
document.querySelectorAll(".drum")[6].addEventListener("click",function() {
    var audio = new Audio('tom-4.mp3');
    audio.play();
});
