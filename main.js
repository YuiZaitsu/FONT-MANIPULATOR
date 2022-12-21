function preload(){

}

function setup(){
canvas =createCanvas(500,500);
canvas.position(560,150);
video =createCapture(VIDEO);
video.size(500,500);
posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",gotposes);
}

function draw(){
background("black");
}

function modelloaded(){
    console.log("model is loaded");

    
}

function gotposes(reuslts){
if(reuslts.length > 0){
    console.log(reuslts);
}
}