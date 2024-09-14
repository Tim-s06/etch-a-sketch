let container = document.getElementById("container");

for(let i = 0;i<256;i++) {
    let squareDiv = document.createElement("div");
    squareDiv.setAttribute("id","square");
    squareDiv.setAttribute("class","square");
    container.appendChild(squareDiv);
}
let squareDivs = document.getElementsByClassName("square");
console.log(squareDivs);
Array.from(squareDivs).forEach((squareDiv) => {
    squareDiv.addEventListener("mouseenter", () => {
        squareDiv.setAttribute("style","color: black; background: black;")
        });
    /*squareDiv.addEventListener("mouseleave", () => {
        squareDiv.setAttribute("style","color: white; background: white;")
});*/
});
let button = document.getElementById("squareNumber");
button.addEventListener("click",  () => {
    let input = prompt("How many squares (Max of 100)?");
    input = Number(input);
    if(Number.isInteger(input) && input > 0  && input <=100) {
        console.log("inif");
        while(container.firstChild) {
            container.removeChild(container.lastChild);
        }
        for(let i = 0;i<input*input;i++) {
            let squareDiv = document.createElement("div");
            squareDiv.setAttribute("id","square");
            squareDiv.setAttribute("class","square");
            let length = Math.floor(960/input - 2);
            squareDiv.style.height = length + "px";
            squareDiv.style.width = length + "px";
            container.appendChild(squareDiv);
        }
        
    }
    let newDivs = document.getElementsByClassName("square");
    Array.from(newDivs).forEach((div) => {
    div.addEventListener("mouseenter", () => {
    div.setAttribute("style","background: black;")
    });
    });
});
    


    

