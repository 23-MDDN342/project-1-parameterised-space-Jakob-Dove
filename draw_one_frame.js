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

	var xpos = 265;
	var ypos = -260;

	strokeWeight(1);
  translate(width/2, height/2);
  for(var i=1;i> -5;i--){
	  for(var j=1;j>-5;j--){
		stroke(1);
		rect(xpos*i, ypos*j, 100, 100);
	  }
  }

}


