var genbutton;
var genbutton2;
var genbutton3;
var genslider;
var genslider2;
var genslider3;
var running = true;


function setup() {

  frameRate(30);
  createCanvas(window.innerWidth,window.innerHeight);

  //these are all for the labels and sliders
  genbutton = createButton("STOP");
  genbutton.mouseClicked(turnonoff);
  genbutton.position((width/2)-50,(height/2)-90);
  genbutton.class("sim-button");
  
  genbutton2 = createButton("STOP");
  genbutton2.mouseClicked(turnonoff);
  genbutton2.position(300,30);
  genbutton2.class("sim-button gray");
  
  genbutton3 = createButton("STOP");
  genbutton3.mouseClicked(turnonoff);
  genbutton3.position(600,30);
  genbutton3.class("sim-button red");
  
  genbutton = createButton("STOP");
  genbutton.mouseClicked(turnonoff);
  genbutton.position(20,30);
  genbutton.class("sim-button");
   
  genslider = createSlider(5, 1000, 20);
  genslider.position(20,100);
  genslider.class("sim-slider");
  
  genslider2 = createSlider(5, 1000, 20);
  genslider2.position(300,100);
  genslider2.class("sim-slider");
  
  genslider3 = createSlider(5, 1000, 20);
  genslider3.position(600,100);
  genslider3.style("sim-slider");
  genslider3.class("sim-slider");
  

}

function draw() {
  background(255);
  fill(230,40,40);
 ellipse((width/2)+random(0,5),((height/2) +200)+random(0,5),genslider.value(),genslider.value());
}

function turnonoff() {
  // and of course it's nice to be able to stop it if things get crazy
    if (!running){
      running = true;
      loop();
      genbutton.html("STOP");
      return
    }

    if (running){
      running = false;
      noLoop()
      genbutton.html("START");
      return
    }
}
