const button = document.getElementById("button");
let clickCount = 0;

button.addEventListener('click', function() {
    clickCount += 1;
    console.log(clickCount);
});