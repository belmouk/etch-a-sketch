createCanvas = function (canvasSize) {
    let canvas = [];
    const canvasContainer = document.querySelector("#canvas-container");
    for (let i = 0; i < canvasSize; i++) {
        canvas.push(document.createElement("div"));
    }
    canvas.map( item => item.classList.add("square"));
    canvas.forEach((item) => canvasContainer.appendChild(item));
}

createCanvas(16);