status="";

function preload()
{
    img = loadImage("bedroom.jpeg");
    console.log(img);
}

function setup()
{
    canvas = createCanvas(450, 360);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw()
{   document.getElementById("status").innerHTML = "Status : Detected Objects";
    document.getElementById("status_n").innerHTML = "Detected 2 objects";
    image(img, 0, 0, 450, 360);
    fill("#FF0000");
    text("Bed", 15, 220);
    noFill();
    stroke("#FF0000");
    rect(7, 205, 434 , 140 );
    
   
    fill("#FF0000");
    text("Potted plant", 380,157);
    noFill();
    stroke("#FF0000");
    rect(376,142, 69 , 105);
    
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
