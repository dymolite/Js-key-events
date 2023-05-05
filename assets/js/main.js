const box = document.getElementById("box");
const sphere = document.getElementById("sphere");
let wh = 0;
let hg = 0;

function setBoxWidth(elem) {
    var elem = elem.previousElementSibling;
    if (elem.value <= 830) {
        box.style.width = elem.value + "px";
        wh = parseInt(elem.value);
    } else {
        alert("daha uzun etmek olmaz");
    }
}

function setBoxHeight(elem) {
    var elem = elem.previousElementSibling;
    if (elem.value <= 515) {
        box.style.height = elem.value + "px";
        hg = parseInt(elem.value);
    }
}

function setBoxColor(elem) {
    var elem = elem.previousElementSibling;
    box.style.backgroundColor = elem.value;
}

function setBorderColor(elem) {
    const borderColor = document.getElementById("borderColor").value;
    var elem = elem.previousElementSibling;
    box.style.border = elem.value + "px solid";
    box.style.borderColor = borderColor;
}

function setSphereSize(elem) {
    var elem = elem.previousElementSibling;
    const size = parseFloat(elem.value);
    wh -= size;
    hg -= size;
    sphere.style.width = elem.value + "px";
    sphere.style.height = elem.value + "px";
}

function setSphereColor(elem) {
    var elem = elem.previousElementSibling;
    sphere.style.backgroundColor = elem.value;
}

const steps = document.getElementById("steps");
let pxHeight = 0;
let pxWidth = 0;

function moveUp() {
    if (pxHeight > 0) {
        pxHeight -= parseFloat(steps.value);
        sphere.style.top = pxHeight + "px";
    }
}

function moveDown() {
    if (hg - pxHeight > parseFloat(steps.value)) {
        pxHeight += parseFloat(steps.value);
        sphere.style.top = pxHeight + "px";
    }
}

function moveLeft() {
    if (pxWidth > 0) {
        pxWidth -= parseFloat(steps.value);
        sphere.style.left = pxWidth + "px";
    }
}

function moveRight() {
    if (wh - pxWidth > parseFloat(steps.value)) {
        pxWidth += parseFloat(steps.value);
        sphere.style.left = pxWidth + "px";
    }
}
