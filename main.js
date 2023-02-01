song="";

function preload()
{
    song=loadSound("music.mp3");
}


function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function setup() {
    canvas = createCanvas(600,500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}
LeftWristX = 0;
LeftWristY = 0;
function gotPoses(results) {

    if (results.length> 0)
{
    console.log(results);
    RightWristX = results[0].pose.RightWrist.x;
    RightWristY = results[0].pose.RightWrist.y;
    console.log("rightWristX = " + RightWristX +" rightWristY =" + RightWrist) +"" RightWristY;

    LeftWristX = results[0].pose.leftWrist.x;
    LeftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX +" leftWristY = "+ LeftWristY ="" LeftWristY);
}
}