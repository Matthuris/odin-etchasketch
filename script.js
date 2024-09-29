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
