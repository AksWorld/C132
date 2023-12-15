status="";

function preload()
{
    img = loadImage("kitchen.jpg");
    console.log(img);
}

function setup()
{
    canvas = createCanvas(410, 380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
   
}

function draw()
{    
    document.getElementById("status").innerHTML = "Status : Detected Objects";
    document.getElementById("status_n").innerHTML = "Detected 4 objects";
    image(img, 0, 0, 410, 380);
    fill("#FF0000");
    text("Oven", 253, 210);
    noFill();
    stroke("#FF0000");
    rect(249, 195, 113 , 153 );
    fill("#FF0000");
    text("Refrigerator", 25, 110);
    noFill();
    stroke("#FF0000");
    rect(22,95,134, 260 );
    fill("#FF0000");
    text("Microwave", 166,239);
    noFill();
    stroke("#FF0000");
    rect(163,227, 92 , 56 );
    fill("#FF0000");
    text("Bottle", 223, 190);
    noFill();
    stroke("#FF0000");
    rect(230,184, 7 , 34 );
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error)
    {
        console.log(error)
    }
    console.log(results);
}
