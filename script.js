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

const clearCanvas = function () {
    const canvas = document.querySelector("#canvas");
    canvas.replaceChildren();
}

const generateSession = function () {    
    const squareSize = document.querySelector("input");
    const confirmButton = document.querySelector("#confirm");
    const resetButton = document.querySelector("#reset");

    createCanvas(20);
    addOneColorHoverEffect("green");
    

    confirmButton.addEventListener("click", (e) => {
        clearCanvas();
        createCanvas(squareSize.value);
        addOneColorHoverEffect("green");
    })

    resetButton.addEventListener("click", (e) => {
        clearCanvas();
        createCanvas(squareSize.value);
        addOneColorHoverEffect("green");
    })

};

generateSession();