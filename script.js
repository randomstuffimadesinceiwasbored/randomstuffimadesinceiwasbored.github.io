var button = document.getElementById("button");

function generatePathToWebsite() {
    var number = Math.floor(Math.random() * 4) + 1

    return number.toString() + "/index.html"
}

function clicked() {
    var websitePath = generatePathToWebsite();
    location.href = websitePath
};

button.addEventListener("click", clicked)