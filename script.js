const init = function () {
  const button = document.querySelector("button");
  const container = document.querySelector(".container");
  const createGrid = function () {
    const newRow = document.createElement("div");
    for (let i = 1; i <= 16; i++) {
      container.appendChild(newRow);
      const newSquare = document.createElement("div");
      newRow.appendChild(newSquare);
      newSquare.className = "square";
    }
    newRow.className = "row";
    const row = document.querySelector(".row");
    for (let j = 1; j < 16; j++) {
      const cloneRow = row.cloneNode(true);
      container.appendChild(cloneRow);
    }
  };
  createGrid();
  container.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("square")) {
      e.target.classList.add("filled");
    }
  });
  getSize = function () {
    prompt("How many squares per side?");
  };
  button.addEventListener("click", function () {
    getSize();
  });
};

init();
