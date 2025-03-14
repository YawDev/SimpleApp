const btn = document.getElementById("btn");
const btnReset = document.getElementById("btn-reset");

const inputBox = document.getElementById("formInput");

const numOfClicksDisplay = document.getElementById('numberOfClicksTxt')
sumClicks = 0;
maxClicksAllowed = 10;


btn.addEventListener('click', (event) => {
    event.preventDefault(); 
    if (sumClicks == maxClicksAllowed)
    {
        alert('You have reached a maximum of 10 attempts to submit!')
    }
    else
    {
        sumClicks++;
        numOfClicksDisplay.innerText = 'Number of clicks: '+sumClicks
    }
});


btnReset.addEventListener('click',  (event) => {
    event.preventDefault(); 
    sumClicks = 0
    numOfClicksDisplay.innerText = 'Number of clicks: '+sumClicks
});