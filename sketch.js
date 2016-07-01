var genbutton;
var genslider;
var running = true;
function setup() {

  frameRate(30);
  createCanvas(710, 400);

  //these are all for the labels and sliders
  genbutton = createButton("stop");
  genbutton.mouseClicked(turnonoff);
  genbutton.position(20,30);
  genbutton.class("sim-button");
   
  genslider = createSlider(5, 50, 20);
  genslider.position(150,40);
  genslider.class("sim-slider");

}

function draw() {
  background(255);
  fill(230,40,40);
 ellipse((width/2)+random(0,5),(height/2)+random(0,5),genslider.value(),genslider.value());
}

function turnonoff() {
  // and of course it's nice to be able to stop it if things get crazy
    if (!running){
      running = true;
      loop();
      genbutton.html("stop");
      return
    }

    if (running){
      running = false;
      noLoop()
      genbutton.html("start");
      return
    }

}