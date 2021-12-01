const sketchContainer = document.querySelector(".container")

function drawGrid(size){
    let grid = new Array(size)
    for (i = 0; i < grid.length; i++){
        grid[i] = new Array(size)
    }

    for (let i = 0; i < grid.length; i++){
        x = i + 1
        let gridX = grid[i];
        // gridX = document.createElement("div");
        // gridX.setAttribute("id", `x${i}`);
        // gridX.style.display = "flex";
        // gridX.style.justifyContent = "stretch"
        // sketchContainer.appendChild(gridX);
        for (let j = 0; j < gridX.length; j++){
            y = j + 1
            let gridY = grid[i][j];
            gridY = document.createElement("div");
            gridY.setAttribute("id", `y${y}`);
            gridY.setAttribute("class", `x${x} y${y} grid`);
            gridY.addEventListener("mouseover", () => {randomGridColor(gridY)})
            // gridY.style.border = gridDisplay(gridSwitch);
            gridY.style.gridRow = `${x}`;
            gridY.style.gridColumn = `${y}`;
            sketchContainer.appendChild(gridY);
        }
    }
    gridSquares = document.querySelectorAll(".grid");
    return gridSquares;
}

function randomGridColor(square){
    let colors = ['#EF7B45', '#D84727', '#5EB1BF', '#259DB3'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    square.style.backgroundColor = randomColor;
}
gridSwitch = true;
drawGrid(16);



function resetSketch(){
    let gridSize = prompt("New grid size: ");
    sketchContainer.innerHTML = ""
    drawGrid(parseInt(gridSize))

}

function gridDisplaySwitch(switchOn){
    console.log(document.styleSheets[0].rules)
    if (switchOn){
        document.styleSheets[0].deleteRule(0)
        gridButton.textContent = "Grid: OFF"
        return switchOn = false;
    }
    else if (!switchOn){
        document.styleSheets[0].insertRule('.grid {border: 1px solid grey}', 0)
        gridButton.textContent = "Grid: ON"
        return switchOn = true;
    }
}

// function gridDisplay(switchOn){
//     if (switchOn){
//         border = `1px solid grey`
//     }
//     else{
//         border = "none"
//     }
//     return border;
// }

const clearButton = document.querySelector("#clear-button")
clearButton.addEventListener("click", resetSketch)

const gridButton = document.querySelector("#grid-display")
gridButton.addEventListener("click", () => { gridSwitch = gridDisplaySwitch(gridSwitch)})