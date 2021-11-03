s=0;

function setup() {
	createCanvas(1000, 500);
	
}

function draw() {
	background(0);
	
	
	for(z=0;z<100;z++){
		if(s<1000){
			background(0);
			s = s + 0.001;
			
		}
	}
	fourStar(0,0,s);
	fourStar(800,0,s);
	fourStar(800,300,s);
	fourStar(0,300,s);
	
	calmHuman(0,-100,s);
	
}

function calmHuman(x,y){
	
	
	noStroke();
	fill(252, 232, 3, 60); //glow
	ellipse(x+500,y+365,200+s,200+s); //glow
	fill(252, 232, 3, 60); //glow
	ellipse(x+500,y+365,450+s,450+s); //glow
	
	fill(240, 180, 84);
	rect(x+492,y+290,15,20); //neck
	rect(x+440,y+310,125,50); //chest
	triangle(x+455,y+355,x+545,y+355,x+500,y+440);//stomach
	ellipse(x+500,y+250,75,90); // head
	ellipse(x+430,y+310,30,30); //left shoulder
	ellipse(x+570,y+310,30,30); //right shoulder
	strokeWeight(10);
	stroke(240, 180, 84);
	line(x+430,y+310,x+ 414,y+405); // upper left arm
	line(x+414,y+405,x+350,y+445); // lower left arm
	line(x+570,y+310,x+590,y+410);// upper right arm
	line(x+590,y+410,x+670,y+445);// lower right arm
	line(x+455,y+440,x+350,y+460);//upper left leg
	line(x+350,y+460,x+477,y+480);//lower left leg
	line(x+560,y+440,x+680,y+460);//upper right leg
	line(x+680,y+460,x+540,y+480); //lower right leg
	fill(250);
	noStroke();
	rect(x+440,y+400,125,50)//hips & rag
	strokeWeight(3);
	stroke(171, 126, 55);
	line(x+501,y+362,x+501,y+388); //abs
	line(x+490,y+370,x+514,y+370); //abs
	line(x+492,y+383,x+510,y+383); //abs
	
	
	fourStar(375,70,0);
	fourStar(412,70,0);
	
	
	

}

function fourStar(x,y,s){

	noStroke();
	fill(252, 232, 3);
	triangle(x+ 110,y + 75,x + 95,y + 75, x + 105,y + 40);
	triangle(x +105,y + 70, x + 105,y + 85, x + 75, y + 80);
	triangle(x + 105,y + 70,x + 105,y + 85,x + 135,y + 80);
	triangle(x + 110,y + 75,x + 95,y + 75,x + 105, y + 125);
	fill(252, 232, 3,90);
	ellipse(x + 105, y + 80, 50+s, 50+s);
	fill(252, 232, 3, 60);
	ellipse(x + 105, y + 80, 100+s, 100+s);

}

function mousePressed(){

	print(mouseX); // mousepress for helping me with understanding the coordinates better
	print(mouseY);

}
