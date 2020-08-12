function addItem(){
    const item = document.createElement("div");
    item.classList.add("grid-item");
    item.addEventListener("mouseover", ()=>{
        item.classList.add("colored");
    });
    return item;
}


function clearGrid(){
    const grid = document.querySelector(".grid-container");
    Array.from(grid.childNodes).forEach((element) => {
        grid.removeChild(element);
    });
}


function createGrid(numberOfElementsPerSide, height){
    const itemSize = (height-numberOfElementsPerSide+1)/numberOfElementsPerSide;
    // reduces height by gap-size (numberOfElementsPerSide-1 gaps with 1px)
    const grid = document.querySelector(".grid-container");
    const rows = `grid-template-rows: repeat(${numberOfElementsPerSide}, ${itemSize}px); `;
    const colums = `grid-template-columns: repeat(${numberOfElementsPerSide}, ${itemSize}px); `;
    const size = `width:${height}px; height:${height}px;`;

    grid.setAttribute("style", rows+colums+size);

    for (let i = 0; i < numberOfElementsPerSide**2; i++) {
       grid.appendChild(addItem());
    }

}


function main(gridHeight){
    createGrid(16, gridHeight);

    const resetButton = document.querySelector("#reset");

    resetButton.addEventListener("click", (event) => {
        let number = Number(prompt("How many squares in each row or column?", "16"));
        if (!(isNaN(number) || number <= 0 || number > 200)){
            clearGrid();
            createGrid(number, gridHeight);
        }
        else{
            console.log("Number: ", number)
            alert("Invalid number! Press button to retry.");
        }
    });
}



main(600);