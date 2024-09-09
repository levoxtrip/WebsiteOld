if (window.innerWidth > 1600) {

	let r1, r2, r3, r4,r5;
	let textCounter = 1;
	function setup() {
	  canvas = createCanvas(1000,600);
		canvas.position(windowWidth/2-500,120);
		
		textFont("Roboto Condensed");
		
		
	  fill(255);
	  
	  textAlign(CENTER);
	  textStyle(BOLDITALIC);
	  textSize(50);
	  stroke(0,0,255);
	  strokeWeight(3);
	  
	  r1 = new MRect(134.0, 0.1 * height);
	  r2 = new MRect(44.0, 0.3 * height);
	  r3 = new MRect(58.0, 0.4 * height);
	  r4 = new MRect(120.0, 0.9 * height);
	  r5 = new MRect(72.0, 0.6 * height);
	}
	
	function draw() {
	  //canvas.clear();
		textFont("Roboto Condensed");
	
	
	  textSize(textCounter);
	  r1.display("MOIN");
	  r2.display("HALLO");
	  r3.display("WELCOME");
	  r4.display("BIENVENIDO");
	  r5.display("HOLA");
	
	  r1.move(mouseX - width / 2, mouseY + height * 0.1, 30);
	  r2.move((mouseX + width * 0.05) % width, mouseY + height * 0.025, 20);
	  r3.move(mouseX / 4, mouseY - height * 0.025, 40);
	  r4.move(mouseX - width / 2, height - mouseY, 50);
	  r5.move(mouseX + height / 3, height - mouseY, 10);
	
	  textCounter +=0.5;
	
	  if (textCounter >200){
		  textCounter = 10;
	  }
	}
	
	
	
	}




else if (window.innerWidth > 1200) {

let r1, r2, r3, r4,r5;
let textCounter = 1;
function setup() {
  canvas = createCanvas(800,500);
    canvas.position(windowWidth/2-400,100);
    
	textFont("Roboto");
    
    
  fill(0,0,255);
  
  textAlign(CENTER);
  textStyle(BOLDITALIC);
  textSize(50);
  stroke(255);
  strokeWeight(3);
  
  r1 = new MRect(134.0, 0.1 * height);
  r2 = new MRect(44.0, 0.3 * height);
  r3 = new MRect(58.0, 0.4 * height);
  r4 = new MRect(120.0, 0.9 * height);
  r5 = new MRect(72.0, 0.6 * height);
}

function draw() {
  //canvas.clear();
	textFont("Roboto");


  textSize(textCounter);
  r1.display("MOIN");
  r2.display("HALLO");
  r3.display("WELCOME");
  r4.display("BIENVENIDO");
  r5.display("HOLA");

  r1.move(mouseX - width / 2, mouseY + height * 0.1, 30);
  r2.move((mouseX + width * 0.05) % width, mouseY + height * 0.025, 20);
  r3.move(mouseX / 4, mouseY - height * 0.025, 40);
  r4.move(mouseX - width / 2, height - mouseY, 50);
  r5.move(mouseX + height / 3, height - mouseY, 10);

  textCounter +=0.5;

  if (textCounter >200){
	  textCounter = 10;
  }
}



}

else {
	noCanvas();
}












function mouseClicked(){
	canvas.clear();
}


class MRect {
  constructor(ixp, iyp) {
    
    this.xpos = ixp; // rect xposition
    
    this.ypos = iyp; // rect yposition
    
    

  }

  move(posX, posY, damping) {
    let dif = this.ypos - posY;
    if (abs(dif) > 1) {
      this.ypos -= dif / damping;
    }
    dif = this.xpos - posX;
    if (abs(dif) > 1) {
      this.xpos -= dif / damping;
    }
  }

  display(textHi) {
    
    text(textHi,this.xpos,this.ypos);
    
    
  }

}
