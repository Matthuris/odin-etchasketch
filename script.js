const init = function () {
  const container = document.querySelector(".container");
  const button = document.querySelector("button");

  createGrid = function (size) {
    const newGrid = document.createElement("div");
    container.appendChild(newGrid);
    newGrid.className = "grid";
    const newRow = document.createElement("div");
    newGrid.appendChild(newRow);
    newRow.className = "row";

    for (let i = 1; i <= size; i++) {
      const newSquare = document.createElement("div");
      newRow.appendChild(newSquare);
      newSquare.className = "square";
    }

    for (let j = 1; j < size; j++) {
      const cloneRow = newRow.cloneNode(true);
      newGrid.appendChild(cloneRow);
    }
  };
  getResponse = function () {
    let response = +prompt("How many squares per side? (1-100");
    if (response === 0) {
      return;
    } else if (Number.isInteger(response) && response > 0 && response <= 100) {
      deleteGrid();
      return response;
    } else {
      alert("Must be a number between 1 and 100!");
      getResponse();
    }
  };

  deleteGrid = function () {
    const grid = document.querySelector(".grid");
    container.removeChild(grid);
  };
  createGrid();

  container.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("square")) {
      e.target.classList.add("filled");
    }
  });

  button.addEventListener("click", function () {
    const size = getResponse();
    createGrid(size);
  });
};

init();
