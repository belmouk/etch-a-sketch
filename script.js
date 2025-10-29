const createCanvas = function (canvasSize) {
    let canvasSquares = [];
    const canvas = document.querySelector("#canvas");
    for (let i = 0; i < canvasSize; i++) {
        canvasSquares.push(document.createElement("div"));
    }
    canvasSquares.map( item => item.classList.add("square"));
    canvasSquares.forEach((item) => canvas.appendChild(item));
};


const colorSquare = function (square, color) {
        square.addEventListener("mouseenter", (e) => {
        e.stopPropagation();
        e.target.style.backgroundColor = color;
        });
};

const addOneColorHoverEffect = function (color) {
    const canvas = Array.from(document.querySelectorAll(".square"));
    canvas.forEach(square => colorSquare(square, color));
};

createCanvas(60);
addOneColorHoverEffect("green");