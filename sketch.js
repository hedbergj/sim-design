var genbutton;
var genbutton2;
var genbutton3;
var genslider;
var genslider2;
var genslider3;
var switch1;
var running = true;
var fruit;
var howMany = 1;

function setup() {

  frameRate(30);

  createCanvas(800,500);

  //make buttons
  genbutton = createButton("STOP");
  genbutton.mouseClicked(turnonoff);
  genbutton.position(20,30);
  genbutton.class("sim-button blue");


  genbutton2 = createButton("STOP");
  genbutton2.mouseClicked(turnonoff);
  genbutton2.position(200,30);
  genbutton2.class("sim-button gray");

  genbutton3 = createButton("STOP");
  genbutton3.mouseClicked(turnonoff);
  genbutton3.position(400,30);
  genbutton3.class("sim-button red");



  //make sliders
  genslider = createSlider(5, 100, 20);
  genslider.position(20,130);
  genslider.class("sim-slider blue");

  genslider2 = createSlider(1, 20, 3);
  genslider2.position(200,130);
  genslider2.class("sim-slider gray");

  genslider3 = createSlider(1, 10, 1);
  genslider3.position(400,130);
  genslider3.class("sim-slider red");

  //make switches
  switch1 = createCheckbox(' ',false);
  switch1.position(20,230);
  switch1.class("sim-switch");

  switch2 = createCheckbox(' ',false);
  switch2.position(200,230);
  switch2.class("sim-switch gray");

  switch3 = createCheckbox(' ',false);
  switch3.position(400,230);
  switch3.class("sim-switch red");

  //make radio boxes
  radio = createRadio();

  radio.position(20,330);
  radio.option('orange', 'orange');
  radio.option('banana', 'yellow');
  radio.option('eggplant', 'purple');

  radio.class('sim-radio');
  radio.changed(switchColor);

  fruit = color('white');

  radioVert = createRadio();

  radioVert.position(20,360);
  radioVert.option('1', 1);
  radioVert.option('5', 5);
  radioVert.value(1);

  radioVert.class('sim-radio vertical red');
  radioVert.changed(numberOfBalls);
}

function draw() {
  background(map(genslider3.value(),1,10,255,110));
line(0,115,width-200,115);
line(0,200,width-200,200);
line(0,290,width-200,290);
line(500,290,500,height);

  fill(fruit);
  for (i=0;i<howMany;i++){
  ellipse((width-(100+i*genslider.value()))+random(-genslider2.value(),genslider2.value()),((height/2) +00)+random(-genslider2.value(),genslider2.value()),genslider.value(),genslider.value());
  }
}

function turnonoff() {
  // and of course it's nice to be able to stop it if things get crazy
    if (!running){
      running = true;
      loop();
      genbutton.html("STOP");
      genbutton2.html("STOP");
      genbutton3.html("STOP");
      return
    }

    if (running){
      running = false;
      noLoop()
      genbutton.html("START");
      genbutton2.html("START");
      genbutton3.html("START");
      return
    }
}

function switchColor(){
  fruit = radio.value();
}
function numberOfBalls(){
  howMany = radioVert.value();
}
