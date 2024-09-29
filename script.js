const init = function () {
  const container = document.querySelector(".container");
  const button = document.querySelector("button");
  const grid = document.querySelector(".grid");
  const createGrid = function () {
    const newDiv = document.createElement("div");
    container.appendChild(newDiv);
    container.className = "grid";
    for (let i = 1; i <= 16; i++) {
      const grid = document.querySelector(".grid");
      grid.appendChild(newDiv);
      const newSquare = document.createElement("div");
      newDiv.appendChild(newSquare);
      newSquare.className = "square";
    }
    newDiv.className = "row";
    const row = document.querySelector(".row");
    for (let j = 1; j < 16; j++) {
      const grid = document.querySelector(".grid");
      const cloneRow = row.cloneNode(true);
      grid.appendChild(cloneRow);
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
    if (Number.isInteger(response) && response > 0 && response <= 100) {
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
