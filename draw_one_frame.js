var x=300;
var y=300;
var a=100;
var b=100;

function draw_one_frame() {
	strokeWeight(1);
  translate(width/2, height/2);

  background(73, 73, 73);
  x+=2;
  y+=2;
	a-=2;
	b-=2;

	let xpos = 35; //third set of squares from the left
	let xpos2 = 270; //far right set of squares
	let xpos3 = -210;//second set of squares on the left
	let xpos4 = -460;//far left set of squares
	
	let ypos = -200;


	color(226,220,208);
	rect(-480, -270, 120, height);  //The far left rectangle

	rect(-240, -270, 120, height);	//The second from the left rectangle

	rect(240, -270, 120, height);	//The third from the lef rectangle

	rect(0, -270, 120, height);		//The far right rectangle


  for(let j=1;j > -11;j--){ //third set of squares from the left
	stroke(1);
	rect(xpos, ypos*j, 50, 50);
  }

  for(let j=1;j > -11;j--){ //far right set of squares
	stroke(1);
	rect(xpos2, ypos*j, 50, 50);
  }

  for(let j=1;j > -11;j--){ //second set of squares on the left
	stroke(1);
	rect(xpos3, ypos*j, 50, 50);
  }

  for(let j=1;j > -11;j--){ 	//far left set of squares
	stroke(1);
	rect(xpos4, ypos*j, 50, 50);
  }
}


