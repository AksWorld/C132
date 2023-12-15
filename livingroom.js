status1 = "";

function preload() {
    //img = loadImage("modern-living.jpg");
    img = loadImage("livingroom.jpg");
    console.log(img);
}

function setup() {
    canvas = createCanvas(570, 360);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() 
{
    document.getElementById("status").innerHTML = "Status : Detected Objects";
    document.getElementById("status_n").innerHTML = "Detected 2 objects";
    image(img, 0, 0, 570, 360);
    fill("#FF0000");
    text("Clock",225 ,49);
    noFill();
    stroke("#FF0000");
    rect(219, 34, 123, 124);
    fill("#FF0000");
    text("Couch", 67, 209);
    noFill();
    stroke("#FF0000");
    rect(63, 194, 450, 105);
}

function modelLoaded() {
    console.log("Model Loaded!");
    status1 = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error)
    }
    console.log(results);
}
