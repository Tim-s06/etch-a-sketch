let container = document.getElementById("container");
let darkening = false;
let rainbow = false;

function hoverEffect(color) {
    let squareDivs = document.getElementsByClassName("square");
    Array.from(squareDivs).forEach((squareDiv) => {
    squareDiv.addEventListener("mouseenter", () => {
        if(darkening) {
            let currentOpacity = parseFloat(squareDiv.style.opacity) || 0;
            let newOpacity = currentOpacity + 0.1;
            squareDiv.style.opacity = newOpacity;
        }
        if(rainbow) {
            let r = Math.floor(Math.random()*256);
            let g = Math.floor(Math.random()*256);
            let b = Math.floor(Math.random()*256);
            squareDiv.style.background = `rgb(${r},${g},${b})`;
            squareDiv.style.opacity = 1;
        } else{
            squareDiv.style.background =  color;
            if(!darkening) {
                squareDiv.style.opacity = 1;
            }            
        }
        
        });
    });
}

function createSquares(howmany) {
    let squarePercentage = 100 / howmany;
    for(let i = 0;i<howmany*howmany;i++) {
        let squareDiv = document.createElement("div");
        squareDiv.setAttribute("class","square");
        squareDiv.style.height = `${squarePercentage}%`;
        squareDiv.style.width = `${squarePercentage}%`;
        container.appendChild(squareDiv);
    }
    hoverEffect("black");
}
createSquares(16)

let button = document.getElementById("squareNumber");

button.addEventListener("click",  () => {
    let input = prompt("How many squares (Max of 100)?");
    input = Number(input);
    if(Number.isInteger(input) && input > 0  && input <=100) {
        while(container.firstChild) {
            container.removeChild(container.lastChild);
        }
        createSquares(input);
    }
});
let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
    let squares = document.getElementsByClassName("square");
    Array.from(squares).forEach((squareDiv) => {
        squareDiv.style.background = "white";
    });
});
let rainbowButton = document.getElementById("rainbow");
rainbowButton.addEventListener("click", () => {
    if(rainbow == true) {
        rainbow = false
        rainbowButton.style.backgroundColor ="#f0f0f0";
    } else if(darkening ==false){
        rainbow = true;
        rainbowButton.style.backgroundColor = "lightgreen";
    }
});
let blackButton = document.getElementById("black");
blackButton.addEventListener("click", () => {
    rainbow = false;
    darkening = false;
});
let darkeningButton = document.getElementById("darkening");
darkeningButton.addEventListener("click", () => {
    if(darkening ==true) {
        darkening = false;
        darkeningButton.style.backgroundColor = "#f0f0f0";
    } else if(rainbow == false){
        darkening = true;
        darkeningButton.style.backgroundColor = "lightgreen";
    }
});

    


    

