const sketchContainer = document.querySelector(".container")
let grid = new Array(16)
for (i = 0; i < grid.length; i++){
    grid[i] = new Array(16)
}

for (i = 0; i < grid.length; i++){
    gridX = grid[i];
    gridX = document.createElement("div")
    gridX.setAttribute("id", `x${i}`)
    gridX.style.display = "flex"
    sketchContainer.appendChild(gridX)
    for (j = 0; j < grid[i].length; j++){
        gridY = grid[i][j];
        gridY = document.createElement("div")
        gridY.setAttribute("id", `y${j}`)
        gridY.setAttribute("class", `x${i} y${j} grid-square`)
        gridY.addEventListener("mouseover", function(e){
            e.target.classList.add("hovered")
        })
        gridY.style.border = "1px solid black"
        gridY.style.width = "20px"
        gridY.style.height = "20px"
        gridX.appendChild(gridY)
    }
}

console.log(grid)