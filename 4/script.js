var button = document.getElementById("button");
var container = document.getElementById("container");

var compliments = [
    "Admirable.",
    "Exceptional.",
    "Outstanding.",
    "Inspirational.",
    "Marvelous.",
    "Outstanding.",
    "Brilliant.",
    "Fantastic.",
    "Exceptional.",
    "Glorious.",
    "Exquisite.",
    "Superb.",
    "Remarkable.",
    "Splendid.",
    "Phenomenal.",
    "Stunning.",
    "Wonderful.",
    "Fabulous.",
    "Impressive.",
    "Majestic."
];

var debounce = false;

function displayRandomCompliment(rollingIndex, finalIndex) {
    if (rollingIndex <= finalIndex) {
        var index = rollingIndex % compliments.length;
        container.innerHTML = "<p>You are " + compliments[index] + "</p>";
        setTimeout(function() {
            displayRandomCompliment(rollingIndex + 1, finalIndex);
        }, 100);
    } else {
        container.innerHTML = "<p>You are " + compliments[finalIndex % compliments.length] + "</p>";
    }
}

function loopWithCooldown(randomLength, i) {
    if (i < randomLength) {
        var finalIndex = Math.floor(Math.random() * compliments.length);
        displayRandomCompliment(0, finalIndex);
        i++;
        
        setTimeout(function() {
            loopWithCooldown(randomLength, i);
        }, 100);
    }
}

function clicked() {
    if (!debounce) {
        debounce = true;

        var max = 5;
        var min = 1;

        var randomLength = Math.floor(Math.random() * (max - min)) + min;

        loopWithCooldown(randomLength, 0);

        setTimeout(function() {
            debounce = false;
        }, randomLength * 100);
    }
}

button.addEventListener("click", clicked);
