const container = document.querySelector(".container");

const init = function () {
  const newRow = document.createElement("div");
  container.appendChild(newRow);
  for (let i = 1; i <= 16; i++) {
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

init();
