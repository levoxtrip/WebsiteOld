var canvas;
let counter =0;

if (window.innerWidth > 800) {
  
 
function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
    canvas = createCanvas(1000,550);
  canvas.position(windowWidth/2-500,100);
  canvas.style('z-index','10000');
}
function setup() {
  canvas = createCanvas(1000,550);
  canvas.position(windowWidth/2-500,100);
  canvas.style('z-index','10000');


  


}

function draw() {
  textSize(60);
  textStyle("italic");
 textFont("Roboto");
 strokeWeight(4);

  if (counter < 100){
    stroke(0,0,255);
    fill(255);
    let welcome = "WELCOME"

  let text_width = textWidth(welcome)
  text(welcome, mouseX-text_width/2,mouseY);

  }

  else if ((counter >100) && (counter <200)) {
    stroke(255);
    fill(0);
    let welcome = "HELLO WOLRD"

  let text_width = textWidth(welcome)
  text(welcome, mouseX-text_width/2,mouseY);

  }

  else {

    stroke(255);
    fill(0,0,255);


    let welcome = "BIENVENIDO"

  let text_width = textWidth(welcome)
  text(welcome, mouseX-text_width/2,mouseY);



  }



  
  



  counter += 1;

  if (counter>300){
    counter = 0;
    canvas.clear()
  }
  print(counter)

}

function mouseClicked(){
  canvas.clear()

}

}
