createCanvas = function (canvasSize) {
    let canvasSquares = [];
    const canvas = document.querySelector("#canvas");
    for (let i = 0; i < canvasSize; i++) {
        canvasSquares.push(document.createElement("div"));
    }
    canvasSquares.map( item => item.classList.add("square"));
    canvasSquares.forEach((item) => canvas.appendChild(item));
}

createCanvas(16);