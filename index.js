/*  Name: Sai Chand Akkisani
    Student ID: C0882376
    Date: 10-Aug-2023
    Front End 2 Assignment 10 */


let paintBrush = document.querySelector('#main');
let ctx = paintBrush.getContext('2d');
let coord = { x: 0, y: 0 };
let fillColor;
let radius;
let paint = false;
window.addEventListener('load', () => {
    document.addEventListener('mousedown', startPainting);
    document.addEventListener('mouseup', stopPainting);
    document.addEventListener('mousemove', sketch);
    sliderSize();
});

function startPainting(event) {
    paint = true;
    getPosition(event);
}
function stopPainting() {
    paint = false;
}

function getPosition(event) {
    coord.x = event.clientX - paintBrush.offsetLeft;
    coord.y = event.clientY - paintBrush.offsetTop;
}

function sketch(event) {
    if (!paint) return;
    ctx.beginPath();
    ctx.lineWidth = radius;
    ctx.lineCap = 'round';
    ctx.strokeStyle = fillColor;
    ctx.moveTo(coord.x, coord.y);
    getPosition(event);
    ctx.lineTo(coord.x, coord.y);
    ctx.stroke();
}

function changeColor(event) {     //Function to change brush color
    let id = event.currentTarget.id;
    if (id === 'black') {
        fillColor = '#000000';
    }
    else if (id === 'pink') {
        fillColor = '#f1004b'
    }
    else if (id === 'blue') {
        fillColor = '#256eff'
    }
    else if (id === 'yellow') {
        fillColor = '#ffcf01'
    }
    else if (id === 'erase') {
        fillColor = '#FFFFFF'
    }
}

function sliderSize() {      //Function to change slider size
    radius = document.getElementById("slider").value;
}

function clearDrawing() {    //Function to clear the drawing
    ctx.reset();
}