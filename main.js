leftwristx=0;
rightwristx=0;
difference=0;
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
background("violet");
textSize(difference);
text('Karthikeyan', 10, 200);
fill(0, 102, 153);
document.getElementById("text_sides").innerHTML=" The text size will be = "+difference+"px";

}

function modelloaded(){
    console.log("model is loaded");

    
}

function gotposes(results,error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);

        leftWrist_x = results[0].pose.leftWrist.x;
        rightWrist_x = results[0].pose.rightWrist.x;
        difference = floor(leftWrist_x - rightWrist_x);

        console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
    }
}