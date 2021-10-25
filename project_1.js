

function setup() {
	createCanvas(1000, 500);
	
}

function draw() {
	background(100);
	
	
	
	fourStar(0,0);
	fourStar(800,0);
	fourStar(800,300);
	fourStar(0,300);
	
	calmHuman(0,-100);
	
}

function calmHuman(x,y){

	fill(240, 180, 84);
	rect(x+492,y+290,15,20); //neck
	rect(x+440,y+310,125,50); //chest
	triangle(x+455,y+355,x+545,y+355,x+500,y+440);//stomach
	rect(x+440,y+400,125,50)//hips
	ellipse(x+500,y+250,75,90); // head
	ellipse(x+430,y+310,30,30); //left shoulder
	ellipse(x+570,y+310,30,30); //right shoulder
	strokeWeight(10);
	stroke(240, 180, 84);
	line(x+430,y+310,x+ 414,y+405); // uper left arm
	line(x+414,y+405,x+350,y+445); // lower left arm
	

}

function fourStar(x,y){

	noStroke();
	fill(252, 232, 3);
	triangle(x+ 110,y + 75,x + 95,y + 75, x + 105,y + 40);
	triangle(x +105,y + 70, x + 105,y + 85, x + 75, y + 80);
	triangle(x + 105,y + 70,x + 105,y + 85,x + 135,y + 80);
	triangle(x + 110,y + 75,x + 95,y + 75,x + 105, y + 125);
	fill(252, 232, 3,90);
	ellipse(x + 105, y + 80, 50, 50);
	fill(252, 232, 3, 60);
	ellipse(x + 105, y + 80, 100, 100);

}

function mousePressed(){

	print(mouseX); // mousepress for helping me with understanding the coordinates better
	print(mouseY);

}