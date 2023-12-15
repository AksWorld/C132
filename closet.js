status="";

function preload()
{
    img = loadImage("closet.png");
    console.log(img);
}

function setup()
{
    canvas = createCanvas(270,390);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}

function draw()
{    document.getElementById("status").innerHTML = "Status : Detected Objects";
     document.getElementById("status_n").innerHTML = "Detected 3 objects";
    image(img, 0, 0, 270, 390);
    fill("#FF0000");
    text("Umbrella", 150, 60);
    noFill();
    stroke("#FF0000");
    rect(145, 40, 87 , 220);

    
    fill("#FF0000");
    text("Potted Plant", 45, 260);
    noFill();
    stroke("#FF0000");
    rect(40, 270, 90 , 110);

    fill("#FF0000");
    text("Vase", 65, 330,);
    noFill();
    stroke("#FF0000");
    rect(60, 320, 40 , 60);
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
