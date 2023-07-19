var hands = document.getElementById("hands");
var monkey = document.getElementById("monkey");

function closeeye() {
    monkey.style.backgroundImage = "url(img/monkey_pwd.gif)";
    hands.style.marginTop = "0%"
}

function openeye() {
    monkey.style.backgroundImage = "url(img/monkey.gif)";
    hands.style.marginTop = "120%"
}