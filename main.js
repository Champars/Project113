function preload() {

}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 125, 125, 250, 250);
    circle(50, 50, 80);
    circle(450, 450, 80);
    circle(50, 450, 80);
    circle(450, 50, 80);
    rect(90, 50, 320, 5);
    rect(50, 10, 410, 7);
    rect(50, 83, 410, 7);
    rect(90, 450, 320, 5);
    rect(50, 483, 410, 7);
    rect(50, 410, 410, 7);
    rect(10, 90, 80, 320);
    rect(410, 90, 80, 320);
}

function take_snapshot() {
    save('birthday.png');
}