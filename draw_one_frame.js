var x=300;
var y=300;
var a=100;
var b=100;

function draw_one_frame() {
  background(93, 93, 93);
  x+=2;
  y+=2;
	a-=2;
	b-=2;

	var xpos = 275;
	var ypos = -260;



	rect(745, 0, 120, height);  //Makes the 4 big rectangles in the background

	rect(530, 0, 120, height);

	rect(315, 0, 120, height);

	rect(100, 0, 120, height);

	strokeWeight(1);
  translate(width/2, height/2);
  for(var i=1;i> -5;i--){  //This creates the squares all over the page
	  for(var j=1;j>-5;j--){ // This gives the y values for the squares
		stroke(1);
		rect(xpos*i, ypos*j, 100, 100);
	  }
  }

}


