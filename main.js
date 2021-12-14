  img = "";
  Status ="";
  function preload() {
    img = loadImage ('bedroom.jpeg');

}


  function setup () {
 
     canvas =createCanvas ( 640 , 420);
     canvas.center();
     objectDetector =ml5.objectDetector('cocossd', modelLoaded);
     document.getElementById("status").innerHTML = "status : Detecting Objects";
 }
 function draw () {
     image( img, 0,0,640,420);
     fill("#000000");
     text("bed" , 45, 75);
     noFill();
     stroke("#000000");
     rect(30, 60,450,350);

     fill("#000000");
     text("Train" , 430 ,270);
     noFill();
     stroke("#000000");
     rect(430, 250,200,100);
 }
 
 function modelLoaded(){
   console.log("Model Loaded!")
   status=true;
   ojectDetector.detect(img,gotResult);
 }

 function gotresult(error,results) {
   if (error) {
     console.log(error);
   }
   console.log(results);
 }