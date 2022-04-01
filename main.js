video =""
status1=""

function preload(){
    video=createVideo("video.mp4")
    video.hide()
}

function setup(){
 canvas = createCanvas(480, 340)
 canvas.center()
}

function draw(){
    image(video, 0, 0, 480, 340)
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "Status: Detecting Objects"
    document.getElementById("input").value
}

function modelLoaded(){
    console.log("model has been loaded")
    status1 = true
}
