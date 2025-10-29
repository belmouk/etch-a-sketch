const createCanvas = function (squareSize, canvasSize = 500) {
    let canvasSquares = [];
    const canvas = document.querySelector("#canvas");
    const squareNumber = (canvasSize ** 2) / (squareSize ** 2);

    for (let i = 0; i < squareNumber; i++) {
        canvasSquares.push(document.createElement("div"));
    }
    canvasSquares.map( item => {
        item.classList.add("square");
        item.style.width = `${squareSize}px`;
        item.style.height = `${squareSize}px`;
    });

    canvasSquares.forEach((item) => canvas.appendChild(item));
};


const colorSquare = function (square) {
        square.addEventListener("mouseenter", (e) => {
        e.stopPropagation();
        e.target.style.backgroundColor = `rgb(${generateRandomColor().join(",")})`;
        });
};

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
    const squareSize = document.querySelector("input");
    const confirmButton = document.querySelector("#confirm");
    const resetButton = document.querySelector("#reset");

    createCanvas(20);
    addHoverEffect();

    confirmButton.addEventListener("click", (e) => {
        clearCanvas();
        createCanvas(squareSize.value);
        addHoverEffect();
    })

    resetButton.addEventListener("click", (e) => {
        clearCanvas();
        createCanvas(squareSize.value);
        addHoverEffect();
    })

};

generateSession();