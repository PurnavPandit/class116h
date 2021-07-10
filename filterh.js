filterX = 0;
filterY = 0; 
function preload(){
  filter = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup(){
   canvas = createCanvas(300,300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(300,300);
   poseNet = ml5.poseNet(video,modelLoaded);
   poseNet.on('pose', gotPoses);
}                             
function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    
    filterX = results[0].pose.nose.x;
    filterY = results[0].pose.nose.y;
  }
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
  }
function draw(){
    image(video, 0, 0, 300, 300);
  image(filter, filterX, filterY, 50, 50);
}
function take_snapshot(){    
    save('myFilterImage.png');
}
function change_filter() {
 if (document.getElementById("change").src = "https://i.postimg.cc/PxFvYgkv/l1.png"){
    document.getElementById("change").src =  "https://i.postimg.cc/3x3QzSGq/m.png" 
    filter = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png") 
 }
  else if (document.getElementById("change").src = "https://i.postimg.cc/3x3QzSGq/m.png"){
    document.getElementById("change").src =  "https://i.postimg.cc/PxFvYgkv/l1.png" 
    filter = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
  }
}