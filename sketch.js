function setup() {
  createCanvas(windowWidth,windowHeight)
  t=0
  background(0)
}

function draw() {
	stroke(255)
	
	//background(t*255)
	fill(255)
	ellipse(mouseX,mouseY,60)
	textSize(40);
	fill(0);
	stroke(0)
	text('Grattis på födelsedagen pappa!\nTack för att du finns för oss!\nHa en bra dag!', 20, 40);
	for(var i = 0;i<20;i++){
		
	}

}

function mousePressed(){
	t=1-t
}