const init = function () {
  const container = document.querySelector(".container");
  const button = document.querySelector("button");
  const grid = document.querySelector(".grid");

  const createGrid = function () {
    const newGrid = document.createElement("div");
    container.appendChild(newGrid);
    newGrid.className = "grid";
    const newRow = document.createElement("div");
    newGrid.appendChild(newRow);
    newRow.className = "row";
    for (let i = 1; i <= 16; i++) {
      const newSquare = document.createElement("div");
      newRow.appendChild(newSquare);
      newSquare.className = "square";
    }

    for (let j = 1; j < 16; j++) {
      const cloneRow = newRow.cloneNode(true);
      newGrid.appendChild(cloneRow);
    }
  };
  createGrid();

  container.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("square")) {
      e.target.classList.add("filled");
    }
  });
  getResponse = function () {
    let response = +prompt("How many squares per side? (1-100");
    if (response === 0) {
      return;
    } else if (Number.isInteger(response) && response > 0 && response <= 100) {
      return response;
    } else {
      alert("Must be a number between 1 and 100!");
      getResponse();
    }
  };
  button.addEventListener("click", function () {
    const size = getResponse();
  });
};

init();
