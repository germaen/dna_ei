let angle = 0; 
let helixHeight = 900; 
let spacing = 10; 
let coil = 150; 
let squareSize = 12;
let speed = 0.005; 
let unwindProgress = 0; 

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 1);
    canvas.style('z-index', '-1'); 
    canvas.style('position', 'fixed'); 
    window.addEventListener('scroll', onScroll); 
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight); 
}

function draw(){
    clear();
    translate(width - (coil * 2), height / 2); 

    for(let y = -helixHeight / 2; y <= helixHeight / 2; y += spacing){
        let x1 = coil * sin(angle + y * 0.05) + unwindProgress; 
        let x2 = -coil * sin(angle + y * 0.05) - unwindProgress; 

        fill('blue'); 
        noStroke();
        rect(x1, y, squareSize, squareSize);
        rect(x2, y, squareSize, squareSize);
    }
    angle += speed;
}

function onScroll(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    unwindProgress = map(scrollTop, 0, document.body.scrollHeight, 0, coil);

    if (unwindProgress > coil) {
        unwindProgress = coil;
    }
}
