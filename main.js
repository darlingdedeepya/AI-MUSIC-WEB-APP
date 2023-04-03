song1="";
song2="";
rightWrist_X=0;
rightWrist_Y=0;
leftWrist_X=0;
leftWrist_y=0;

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotposes);
}

function preload(){
    song1=loadSoud("music.mp3");
    song2=loadSound("music2.mp3");
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function modelLoaded(){
    console.log("PoseNet Is Initialized")
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);

        leftWrist_X = results[0].pose.leftWrist.x;
        leftWrist_Y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x =" + leftWrist_X + " leftWrist_y = " + leftWrist_Y);

        rightWrist_X = results[0].pose.rightWrist.x;
        rightWrist_Y = results[0].pose.rightWrist.y;
        console.log("rightWrist_x =" + rightWrist_X + " rightWrist_y = " + rightWrist_Y);
    }
}
