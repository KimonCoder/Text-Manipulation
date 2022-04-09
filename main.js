noseX=0;
noseY=0;
difference=0;
leftwristx=0;
rightwristx=0;

function preload(){

}
function setup(){
Canvas=createCanvas(600,500);
Video=createCapture(VIDEO);
Canvas.center();

poseNet=ml5.poseNet(Video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
console.log("PoseNet Running");
}
function gotPoses(results){
if(results.length > 0){
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
leftwristx=results[0].pose.leftWrist.x;
rightwristx=results[0].pose.rightWrist.x;
difference=Math.floor(leftwristx - rightwristx);
}
}
function draw(){
background("grey");
fill("red");
square(noseX,noseY,difference);
document.getElementById("widhei").innerHTML=difference + "px";
}