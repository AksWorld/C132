status="";

function preload()
{
    img = loadImage("bathroom.png");
    console.log(img);
}

function setup()
{
    canvas = createCanvas(310, 385);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw()
{   document.getElementById("status").innerHTML = "Status : Detected Objects";
     document.getElementById("status_n").innerHTML = "Detected 2 objects";
    image(img, 0, 0, 310, 385);
    fill("#FF0000");
    text("Toilet", 180, 237);
    noFill();
    stroke("#FF0000");
    rect(171, 222, 81 , 145 );
    fill("#FF0000");
    text("Sink", 25, 203);
    noFill();
    stroke("#FF0000");
    rect(19, 188, 98 , 47 );
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
