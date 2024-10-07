// Acknowledgement: Tutored by the Coding Train, thanks Nikki!
const mediaDensity = 'GCATgcat?!i_    ';

let video;
let asciiDiv;
let clickPositions = [];

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    video = createCapture(VIDEO);
    video.size(100, 50);
    video.hide();
    asciiDiv = createDiv();
    asciiDiv.style('position', 'absolute');
    asciiDiv.style('top', '50%');
    asciiDiv.style('left', '50%');
    asciiDiv.style('transform', 'translate(-50%, -50%)');
}

function draw() {
    video.loadPixels();
    let asciiImage = '';

    for (let j = 0; j < video.height; j++) {
        for (let i = 0; i < video.width; i++) {
            const pixelIndex = (i + j * video.width) * 4;
            const r = video.pixels[pixelIndex];
            const g = video.pixels[pixelIndex + 1];
            const b = video.pixels[pixelIndex + 2];

            const avg = (r + g + b) / 3;

            const len = mediaDensity.length;
            const charIndex = floor(map(avg, 0, 255, len, -1, 0));
            const c = mediaDensity.charAt(charIndex);

            if (c == ' ') asciiImage += "&nbsp;";
            else asciiImage += c;
        }
        asciiImage += '<br/>';
    }

    asciiDiv.html(asciiImage);

    for (let pos of clickPositions) {
        noFill();
        stroke('blue')
        strokeWeight(2);
        rect(pos.x - 10, pos.y - 10, 30, 30);
    }
}

function mousePressed() {
    clickPositions.push({ x: mouseX, y: mouseY });
}
