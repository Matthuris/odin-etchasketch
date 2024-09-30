const init = function () {
  let n = 0;
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
    let response = +prompt("How many squares per side? (1-100)");
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
    if (grid) content.removeChild(grid);
  };

  rndRGB = function () {
    rndNum = function () {
      return Math.floor(Math.random() * 256);
    };
    return `${rndNum()}, ${rndNum()}, ${rndNum()}`;
  };
  content.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("square")) {
      n < 10 ? n++ : null;
      RGB = rndRGB();
      e.target.style.backgroundColor = `rgb(${RGB},${n / 10})`;
    }
  });

  button.addEventListener("click", function () {
    const size = getResponse();
    createGrid(size);
  });
};

init();
