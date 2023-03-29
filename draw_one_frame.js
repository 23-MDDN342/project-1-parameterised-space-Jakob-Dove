
function draw_one_frame(cur_frac) {
	const ease = new p5.Ease();

	fill(133,180, 250);//Light blue background
	rect(0,0,width,height);

	let spacing = width/6 //When multiplied by x or y this should space out the shapes

	let rectSpacing = width/5.65 //When multiplies by x or y this should space out the shapes

	   let grid_points3 = [//Borrowed the Grid points setup code from Timothy Mitchell's pyramid code https://23-mddn342.github.io/project-1-parameterised-space-mitchetimo4/draw_one_frame.js
	   
		6 * width,
		// 2 * width,
		4 * width,
	   -0.0425 * width
	  
	   ]

	let startColor = color(62,120,128);//light green for the circles
	let lastColor = color(125,240,255); //Light blue for the circles

	let noiseColor;// Should swap between colors.
	
	   fill(194,197,204)//The middle light gray rectangle
	rect(0, height/3, width, height/3) //The large rectangle in the center of the screen.
	   
	   
	 	for(let y = 0; y < 6; y++){
			for(let i=0; i<grid_points3.length-1; i++) {///Borrowed the  for loop code from Timothy Mitchell's pyramid code https://23-mddn342.github.io/project-1-parameterised-space-mitchetimo4/draw_one_frame.js
				let cur_x_pos = map(cur_frac, 0, 2, grid_points3[i+1], grid_points3[i])//Borrowed the for loop code from Timothy Mitchell's pyramid code https://23-mddn342.github.io/project-1-parameterised-space-mitchetimo4/draw_one_frame.js

					const ease_amount_across = ease.linear(cur_frac);

					

					console.log((cur_x_pos+height/4.5)*.45);

					noStroke();
					
					fill(145,148,153);//Dark gray rectangles
					rect(0, y*spacing, width,height/6); //the skinny spaced out rectangles
					noiseColor = getNoiseValue(cur_x_pos*5.5, (y*rectSpacing), 1, "noiseColor", .5,.7,200)
					LerpNoise = lerpColor(startColor,lastColor, noiseColor);

					fill(255,171,213);//Pink for the candy
					ellipse((cur_x_pos+height/4.5)*.45, height/1.9, width/46, width/22); //The center of the candy wrapper.

					triangle((cur_x_pos+height/4.5)*.45,height/1.95,(cur_x_pos+height/5)*.45,(height/2.15),(cur_x_pos+height/4)*.45,(height/2.15));//pink top triangle of the candy wrappper

					triangle((cur_x_pos+height/4.5)*.45,height/1.85,(cur_x_pos+height/5)*.45,height/1.7,(cur_x_pos+height/4)*.45,height/1.7);//pink bottom triangle of the candy wrapper

					
					fill(255,153,102);//orange color for this piece of candy
					
					triangle((cur_x_pos+height/2.7)*.45,height/1.87,(cur_x_pos+height/3)*.45,(height/2.08),(cur_x_pos+height/2.4)*.45,(height/2.08));//top triangle of the square candy wrappper
					rect((cur_x_pos+height/3)*.45, height/1.95, width/46, width/46, 5,5,5,5);//The orange candy!

					//Borrowed the triangle map code from Timothy Mitchell's pyramid code https://23-mddn342.github.io/project-1-parameterised-space-mitchetimo4/draw_one_frame.js
					

					fill(20,32,255);//blue color for this piece of candy
					
					
					triangle((cur_x_pos+height/12)*.45,height/1.9,(cur_x_pos+height/20)*.45,(height/2.09),(cur_x_pos+height/9)*.45,(height/2.09));//top blue triangle of the oval candy wrappper
					triangle((cur_x_pos+height/12)*.45,height/1.9,(cur_x_pos+height/20)*.45,(height/1.75),(cur_x_pos+height/9)*.45,(height/1.75));//bottom blue triangle of the oval candy wrappper
					ellipse((cur_x_pos+height/12)*.45, height/1.9, width/40, width/32);//The oval blue candy!

					//Borrowed the triangle map code from Timothy Mitchell's pyramid code https://23-mddn342.github.io/project-1-parameterised-space-mitchetimo4/draw_one_frame.js


					push();//makes the circles visible
					ellipseMode(CORNER);//This somewhats centers the circles in the rectangles
					fill(LerpNoise)//makes the blue candy
					
					ellipse((cur_x_pos*.5), (y*rectSpacing), width/24,height/24)// makes the blue circles
					
					pop();
				}
					

			
		}
	  
	


}