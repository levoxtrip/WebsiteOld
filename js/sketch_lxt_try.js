// video source: https://vimeo.com/90312869
let img = []
let vid;
let theta = 0;
let object;


function preload() {
  object = loadModel('/projects/levoxtrip/X.obj');
  for(let i = 0; i<9;i++){
    img[i] = loadImage('/projects/levoxtrip/img/sketch'+i+'.png');
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
  translate(240, 0, 400.5*noise(0.01*frameCount) );
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  translate(0,200,0);
  rotateY(frameCount * 0.01);
  
  texture(img[2]);
  sphere(120);
  pop();

  translate(-240 * 2, 200, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img[7]);
  cone(70, 70);
  pop();

  translate(240, 0, 0);
  push();
  texture(img[5]);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(70, 20);
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
