const btn = document.getElementById("btn");
const btnReset = document.getElementById("btn-reset");

const inputBox = document.getElementById("formInput");

const numOfClicksDisplay = document.getElementById('numberOfClicksTxt')
sumClicks = 0


btn.addEventListener('click', function (event) {
    event.preventDefault(); 
    sumClicks++;
    numOfClicksDisplay.innerText = 'Number of clicks: '+sumClicks
    //alert(inputBox.value)
});


btnReset.addEventListener('click', function (event) {
    event.preventDefault(); 
    sumClicks = 0
    numOfClicksDisplay.innerText = 'Number of clicks: '+sumClicks
});