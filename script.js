const createCanvas = function (resolution, canvasSize = 500) {
    let canvasSquares = [];
    const canvas = document.querySelector("#canvas");
    const canvasSurface = canvasSize ** 2;
    const squareSize = Math.sqrt(canvasSurface / resolution);
    const SQUARE_OPACITY = "0.1";

    for (let i = 0; i < resolution; i++) {
        canvasSquares.push(document.createElement("div"));
    }
    canvasSquares.map( item => {
        item.classList.add("square");
        item.style.width = `${squareSize}px`;
        item.style.height = `${squareSize}px`;
        item.style.opacity = SQUARE_OPACITY;
    });

    canvasSquares.forEach((item) => canvas.appendChild(item));
};


const colorSquare = function (square) {
        square.addEventListener("mouseenter", (e) => {
        e.stopPropagation();
        e.target.style.backgroundColor = `rgb(${generateRandomColor().join(",")})`;
        increaseSquareOpacity(e.target);
        });
};

const increaseSquareOpacity = function (square) {
    if (Number(square.style.opacity) < 1) {
        square.style.opacity = Number(square.style.opacity) + 0.1;
    } else {
        square.style.opacity = "1";
    }
}

const addHoverEffect = function () {
    const canvas = Array.from(document.querySelectorAll(".square"));
    canvas.forEach(colorSquare);
};

const clearCanvas = function () {
    const canvas = document.querySelector("#canvas");
    canvas.replaceChildren();
}

const generateRandomColor = function () {
    return Array.from({ length: 3}, (_, num) => Math.floor(Math.random() * 256));
}

const generateSession = function () {    
    const resolution = document.querySelector("input");
    const confirmButton = document.querySelector("#confirm");
    const resetButton = document.querySelector("#reset");

    createCanvas(730);
    addHoverEffect();

    confirmButton.addEventListener("click", (e) => {
        clearCanvas();
        createCanvas(resolution.value);
        addHoverEffect();
    })

    resetButton.addEventListener("click", (e) => {
        clearCanvas();
        createCanvas(resolution.value);
        addHoverEffect();
    })

};

generateSession();