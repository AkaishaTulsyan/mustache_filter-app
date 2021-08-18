function preload(){
    mustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
    }
    nosex=0;
    nosey=0;
    
    function setup(){
        canvas=createCanvas(300,300);
        canvas.center();
        video=createCapture(VIDEO)
        video.size(300,300);
        video.hide();
        poseNet=ml5.poseNet(video,handler);
        poseNet.on("pose",position)
     }
     function handler(){
     console.log("posenet loaded!");
     }
     function position(result){
     console.log(result)
     console.log("x position of the nose"+result[0].pose.nose.x);
     console.log("y position of the nose"+result[0].pose.nose.y);
     nosex=result[0].pose.nose.x;
     nosey=result[0].pose.nose.y;
     
     }
    
    
    function draw(){
    image(video,0,0,300,300);
    image(mustache, nosex-15, nosey, 30, 30);
    
    }
    
    
    function takeSnapshot(){
        save("filter pic.png");
    }