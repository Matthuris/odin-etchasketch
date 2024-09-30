const init = function () {
  const container = document.querySelector(".container");
  const content = document.querySelector(".content");
  const button = document.querySelector("button");

  createGrid = function (size) {
    const newGrid = document.createElement("div");
    content.appendChild(newGrid);
    newGrid.className = "grid";
    const newRow = document.createElement("div");
    newGrid.appendChild(newRow);
    newRow.className = "row";

    for (let i = 1; i <= 100; i++) {
      const newSquare = document.createElement("div");
      newRow.appendChild(newSquare);
      newSquare.className = "square";
    }

    for (let j = 1; j < 100; j++) {
      const cloneRow = newRow.cloneNode(true);
      newGrid.appendChild(cloneRow);
    }
  };
  createGrid();

  deleteGrid = function () {
    const grid = document.querySelector(".grid");
    if (grid) content.removeChild(grid);
  };

  content.addEventListener("mousedown", function (e) {
    if (e.target.classList.contains("square")) {
      e.target.classList.toggle("filled");
    }
  });

  button.addEventListener("click", function () {
    deleteGrid();
    createGrid();
  });
};

init();
