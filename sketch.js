var genbutton;
var genslider;
var running = true;


function setup() {

  frameRate(30);
  createCanvas(window.Width,window.Height);

  //these are all for the labels and sliders
  genbutton = createButton("STOP");
  genbutton.mouseClicked(turnonoff);
  genbutton.position((width/2)-50,(height/2)-90);
  genbutton.class("sim-button");
  
  genbutton = createButton("STOP");
  genbutton.mouseClicked(turnonoff);
  genbutton.position(20,30);
  genbutton.class("sim-button");
   
  genslider = createSlider(5, 1000, 20);
  genslider.position(20,100);
  genslider.class("sim-slider");
  

}

function draw() {
  background(255);
  fill(230,40,40);
 ellipse((width/2)+random(0,5),((height/2) +300)+random(0,5),genslider.value(),genslider.value());
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

