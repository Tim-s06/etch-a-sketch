let container = document.getElementById("container");

for(let i = 0;i<256;i++) {
    let squareDiv = document.createElement("div");
    squareDiv.setAttribute("id","square");
    container.appendChild(squareDiv);
}