//function getNoiseValue(x, y, loop, name, min, max, smoothness) {

var x=300;
var y=300;
var a=100;
var b=100;

function draw_one_frame(cur_frac) {
	strokeWeight(1);
 
  fill(255,0,0);

	let from = color(255,201,34);
	let to = color(253,94, 83);

	let interA = lerpColor(from, to, 0.3);
	let interB = lerpColor(from, to, 0.6);
  
  //background(73, 73, 73);
  x+=2;
  y+=2;
	a-=2;
	b-=2;
	let myMap = map(cur_frac, 0, 2, 0, width)
	let xpos = 30; //third set of squares from the left
	let xpos2 = 275; //far right set of squares
	let xpos3 = 515; //second set of squares on the left
	let xpos4 = 755; //far left set of squares
	
	let ypos = -150;


	fill(interA);
	// fill(interB);

	
	rect(0, 0, 120, height);  //The far left rectangle

	rect(240, 0, 120, height);	//The second from the left rectangle

	rect(480, 0, 120, height);	//The third from the lef rectangle
	fill(interB);
	rect(720, 0, 120, height);		//The far right rectangle

	
	fill(255,121,79) //Orange squares
  for(let j=1;j < 15;j++){ //third set of squares from the left
	stroke(1);
	rect(xpos, myMap*j, 50, 50);
  }

  fill(43, 108, 226);
  for(let j=1;j < 15;j++){ //far right set of squares
	stroke(1);
	rect(xpos2, myMap*j, 50, 50);
  }

fill(253,215,161); //Yellow squares
  for(let j=1;j < 15;j++){ //third set of squares from the left
	stroke(1);
	rect(xpos3, myMap*j, 50, 50);
  }

  fill(235,170,220);//pink squares
  for(let j=1;j < 15;j++){ //third set of squares from the left
	stroke(1);
	rect(xpos4, myMap*j, 50, 50);
  }

ellipse(450,270, 30) // this is where zero zero is 
}


