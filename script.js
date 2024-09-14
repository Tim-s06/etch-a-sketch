let container = document.getElementById("container");

for(let i = 0;i<256;i++) {
    let squareDiv = document.createElement("div");
    squareDiv.setAttribute("id","square");
    squareDiv.setAttribute("class","square");
    container.appendChild(squareDiv);
}
let squareDivs = document.querySelectorAll("div");
squareDivs.forEach((squareDiv) => {
    squareDiv.addEventListener("mouseenter", () => {
        squareDiv.setAttribute("style","color: black; background: black;")
        });
    /*squareDiv.addEventListener("mouseleave", () => {
        squareDiv.setAttribute("style","color: white; background: white;")
});*/
});

    

