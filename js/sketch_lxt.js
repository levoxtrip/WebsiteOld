let img = [];
//let vid;
let theta = 0;
let object;


function preload() {
  object = loadModel('/projects/levoxtrip/X.obj');
  object1 = loadModel('/projects/levoxtrip/half_circle.obj')
  frame = loadModel('/projects/levoxtrip/frame.obj')
  for(let i = 0; i<9;i++){
    img[i] = loadImage('/projects/levoxtrip/img/sketch'+i+'_s.png');
  }

    
    
    //vid = createVideo(['assets/360video_256crop_v2.mp4']);
    //vid.elt.muted = true;
    //vid.loop();
    //vid.hide();
  }


  function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
    canvas = createCanvas(windowWidth,windowHeight,WEBGL);
    
    canvas.style('z-index','-10000');
}

function setup() {
    canvas = createCanvas(windowWidth,windowHeight,WEBGL);
  canvas.position(0,0);
  canvas.style('z-index','-10000');
  



}

function draw() {
  //canvas.clear()
  rotateZ(mouseX*0.01);
  noStroke();
  translate(-240, -100, 0);
  
  push();
  rotateZ(frameCount * 0.01);
  translate(200,0,0);
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.01);
  texture(img[0]);
  torus(70, 20);
  pop();

  translate(240, 0, 0);
  push();
  translate(0,0,-400+mouseX*0.5);
  //rotateZ(frameCount * 0.01);
  //
  //rotateY(frameCount * 0.01);
  scale(100);
  rotateX(frameCount * 0.01);
  rotateY(frameCount*0.01);
  texture(img[1]);
  model(object);
  pop();

  //translate(240, 0, 300.5*sin(0.01*frameCount) );
  translate(240, 0, 100 );
  push();
  translate(0,0,300*noise(0.01*frameCount));
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  translate(0,200,0);
  rotateY(frameCount * 0.01);
  
  texture(img[2]);
  sphere(80);
  pop();

  translate(-240 * 1.5*sin(frameCount*0.01), 200, 0);
  push();
  translate(0,0,150*noise(0.01*frameCount));
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.03);
  
  texture(img[7]);
  scale(50);
  model(object1);
  pop();

  translate(240, 0, 0);
  push();
  translate(0,0,-300+mouseY*noise(0.01*frameCount));
  texture(img[5]);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.05);
  scale(70);
  model(frame);
  //torus(70, 20);
  pop();

  translate(240, 0, 0);
  push();
  texture(img[6])
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  sphere(70);
  pop();
  theta += 0.05;
}

function mouseClicked(){
  canvas.clear()
}
