let letter = "x";

let cells = Array.from(document.getElementsByClassName('cell'));
console.log(cells);

cells.forEach(cell => {
    cell.addEventListener('click', clickHandle, { once: true });
});

function clickHandle(e) {
    clickedCell = e.target;
    display(clickedCell, letter);
    if (letter === "x") {
        letter = "o";
    } else {
        letter = "x";
    }
    console.log(e.target);
}

function display(clickedCell, letter) {
    clickedCell.classList.add(letter);
}