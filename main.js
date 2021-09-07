noseX=0;
noseY=0;

function preload() {
  sunglass = loadImage('https://i.postimg.cc/hvH5F3Bf/sunglass.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-50;
    noseY = results[0].pose.nose.y-45;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(sunglass, noseX, noseY, 100, 50);
}

function take_snapshot(){    
  save('myFilterImage.png');
}