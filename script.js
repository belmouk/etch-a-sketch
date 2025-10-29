const createCanvas = function (resolution, canvasSize = 500) {
    const canvas = document.querySelector("#canvas");
    const squareSize = Math.floor(canvasSize / resolution);
    const SQUARE_OPACITY = "0.1";

    canvas.replaceChildren()

    canvas.style.width = `${squareSize * resolution}px`;
    canvas.style.height = `${squareSize * resolution}px`;

    for (let i = 0; i < resolution ** 2; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.flex = `0 0 ${squareSize}px`;
        square.style.opacity = SQUARE_OPACITY;
        canvas.appendChild(square);
    }
};


const increaseSquareOpacity = function (square) {
    if (Number(square.style.opacity) < 1) {
        square.style.opacity = Number(square.style.opacity) + 0.1;
    } else {
        square.style.opacity = "1";
    }
}

const addHoverEffect = function () {
    const canvas = document.querySelector("#canvas");

    canvas.addEventListener("mouseover", (e) => {
        if (e.target.classList.contains("square")) {
            e.stopPropagation();
            e.target.style.backgroundColor = `rgb(${generateRandomColor().join(",")})`;
            increaseSquareOpacity(e.target);
        }
    });
};

const generateRandomColor = function () {
    return Array.from({ length: 3}, (_, num) => Math.floor(Math.random() * 256));
}

const generateSession = function () {    
    const resolution = document.querySelector("#canvas-input");
    const confirmButton = document.querySelector("#confirm");
    const resetButton = document.querySelector("#reset");

    createCanvas(10);
    addHoverEffect();

    confirmButton.addEventListener("click", (e) => {
        createCanvas(resolution.value);
    })

    resetButton.addEventListener("click", (e) => {
        createCanvas(resolution.value);
    })

};

generateSession();