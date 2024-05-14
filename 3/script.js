var button = document.getElementById("button")

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function playSound() {
    var audio = new Audio("mouse-click.mp3")
    audio.play()
}

function clicked() {
    button.style.backgroundColor = getRandomColor()
    playSound()
}

button.addEventListener("click", clicked)