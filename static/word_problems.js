export const problem_1_word_problems = async (event) => {
 	event.preventDefault();
 	/* Act on the event */

 	$("#problem-1-dropdown").html(`
 		<h3>Problem 1</h3>
 		<div id="problem-1-word-problems" style="padding:10px; font-size: 20px;">
 			Working together, it takes Sam, Jenna, & Francisco 2 hours to paint 1 room. When Sam works alone, he can paint 1 room in 6 hours. When Jenna works alone, she can paint 1 room in 4 hours. Determine how long it would take Francisco to paint one room on his own?
 		</div>
 		<div id="problem-1-word-solution-problems" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-1-word-solution-problems-1" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-1-word-solution-problems-2" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-1-word-solution-problems-3" style="padding:10px; font-size: 20px;">
 			S - 
 		</div>
 		<div id="problem-1-word-solution-problems-4" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-1-word-solution-problems-5" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-1-word-solution-problems-6" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-1-word-solution-problems-7" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-1-word-solution-problems-8" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-1-word-solution-problems-9" style="padding:10px; font-size: 20px;">
 			A - It would take Francisco 12 hours to paint a room.
 		</div>
 	`)
 		
 	// write the problem equation
	// await katex.render("\\frac{1}{x-1}+\\frac{1}{x+1}=\\frac{4x+2}{x^2-1-1}", document.getElementById("problem-1-word-problems"), { throwOnError: false})
		
	// solution
	// part 1
	await katex.render("G - S + J + F = 2 hours, S = 6 hours, J = 4 hours", document.getElementById("problem-1-word-solution-problems"), {	throwOnError: false	})
	 
	// part 2
	await katex.render("A - F = x", document.getElementById("problem-1-word-solution-problems-1"), { throwOnError: false })
	
	// part 3
	await katex.render("\\frac{1}{S} + \\frac{1}{J} + \\frac{1}{F} = \\frac{1}{2}", document.getElementById("problem-1-word-solution-problems-2"), { throwOnError: false })
	
	// part 4
	// await katex.render("S -", document.getElementById("problem-1-word-solution-problems-3"), { throwOnError: false })
	
	// part 5
	await katex.render("(\\frac{1}{6hrs.} + \\frac{1}{4hrs.} + \\frac{1}{F} = \\frac{1}{2})12hrs.F", document.getElementById("problem-1-word-solution-problems-4"), { throwOnError: false })
	
	// part 6
	await katex.render("\\frac{(2)\\cancel{12hrs.}(F)}{\\cancel{6hrs.}} + \\frac{(3)\\cancel{12hrs.}(F)}{\\cancel{4hrs.}} + \\frac{12hrs.\\cancel{(F)}}{\\cancel{F}} = \\frac{(6)\\cancel{12hrs.}(F)}{\\cancel{2}})", document.getElementById("problem-1-word-solution-problems-5"), { throwOnError: false })
	
	// part 7
	await katex.render("2F + 3F + 12hrs. = 6F", document.getElementById("problem-1-word-solution-problems-6"), { throwOnError: false })
	
	// part 8
	await katex.render("5F - 5F + 12hrs. = 6F - 5F", document.getElementById("problem-1-word-solution-problems-7"), { throwOnError: false }) 

	await katex.render("F = 12hrs.", document.getElementById("problem-1-word-solution-problems-8"), { throwOnError: false })

}

export const problem_2_word_problems = async (event) => {
	event.preventDefault();
	$("#problem-2-dropdown").html(`
	<h3>Problem 2</h3>
 	<div id="problem-2-word-problems" style="padding:10px; font-size: 20px;">
 		Melissa walks 3 miles to the house of a friend & returns home on a bike. She averages 4 miles per hour when cycling than walking, and the total time for both trips is 2 hours. Find her walking speed
 	</div>
 	<div id="problem-2-word-solution-problems" style="padding:10px; font-size: 20px;">
 		G - H = 3 miles, Mb = 4 miles per hour, total time for both trips - 2 hrs.
 	</div>
 	<div id="problem-2-word-solution-problems-1" style="padding:10px; font-size: 20px;">
 		A - Walking Speed = x
 	</div>
 	<div id="problem-2-word-solution-problems-2" style="padding:10px; font-size: 20px;"></div>
 	<div id="problem-2-word-solution-problems-3" style="font-size: 20px;">
 		<div></div>
 		<div>Distance</div>
 		<div>Time</div>
 		<div>Speed</div>
 		<div>Walking</div>
 		<div>3 miles</div>
 		<div>1 hour 8 mintues</div>
 		<div>2.736 mph</div>
 		<div>cycling</div>
 		<div>3 miles</div>
 		<div>52 minutes</div>
 		<div>4 mph</div>
 		<div>total</div>
 		<div>6 miles</div>
 		<div>2 hours</div>
 		<div>6.2736 mph</div>
 	</div>
 	<div id="problem-2-word-solution-problems-4" style="padding:10px; font-size: 20px;">A - Her average walking speed is 2.736 mph</div>
 	`);

 	// write the problem equation 2
 	// katex.render("1-\\frac{1-x}{3x+1}-\\frac{x^2-1+1}{3x^2-1-2x-1}=0", document.getElementById("problem-2-word-problems"), { throwOnError: false });

	katex.render("F - S = \\frac{d}{t}", document.getElementById("problem-2-word-solution-problems-2"), { throwOnError: false });

};

export const problem_3_word_problems = async (event) => {
 	event.preventDefault();
 	/* Act on the event */

 	$("#problem-3-dropdown").html(`
 		<h3>Problem 3</h3>
 		<div id="problem-3-rational-equations" style="padding:10px; font-size: 20px;">
 			You have 10 liters of a juice blend that is 60% juice.
 			a. How manu liters of pure juice needed to add in order to make a blend that is 75% juice?
 			b. How many liters of pure juice needed to add in order to make a blend that is 90% juice?
 		</div>
 		<div id="problem-3-rational-solution">Solution:</div>
 		<div id="problem-3-word-solution-problems" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-3-word-solution-problems-1" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-3-word-solution-problems-2" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-3-word-solution-problems-3" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-3-word-solution-problems-4" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-3-word-solution-problems-5" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-3-word-solution-problems-6" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-3-word-solution-problems-7" style="padding:10px; font-size: 20px;"></div>
 	`)
 		
 	// write the problem equation
	// await katex.render("\\frac{1}{x-1}+\\frac{1}{x+1}=\\frac{4x+2}{x^2-1-1}", document.getElementById("problem-3-rational-problem-1-rational-equations"), { throwOnError: false})
		
	// solution
	// part 1
	await katex.render("(\\frac{1}{x-1}+\\frac{1}{x+1}=\\frac{4x+2}{x^2-1})(x+1)(x-1)", document.getElementById("problem-3-word-solution-problems"), {	throwOnError: false	})
	 
	// part 2
	await katex.render("(\\frac{(x+1)(x-1)}{x-1}+\\frac{(x+1)(x-1)}{x+1}=\\frac{4x+2(x-1)(x+1)}{x^2-1})", document.getElementById("problem-3-word-solution-problems-1"), { throwOnError: false })
	
	// part 3
	await katex.render("\\frac{(x+1)\\cancel{(x-1)}}{\\cancel{x+1}}+\\frac{(x-1)\\cancel{(x+1)}}{\\cancel{x+1}}=\\frac{4x+2\\cancel{(x-1)(x+1)}}{\\cancel{x^2-1}}", document.getElementById("problem-3-word-solution-problems-2"), { throwOnError: false })
	
	// part 4
	await katex.render("x+1+x-1=4x+2", document.getElementById("problem-3-word-solution-problems-3"), { throwOnError: false })
	
	// part 5
	await katex.render("2x=4x+2", document.getElementById("problem-3-word-solution-problems-4"), { throwOnError: false })
	
	// part 6
	await katex.render("2x-2x-2=4x-2x+2-2", document.getElementById("problem-3-word-solution-problems-5"), { throwOnError: false })
	
	// part 7
	await katex.render("\\frac{-2}{2}=\\frac{2x}{2}", document.getElementById("problem-3-word-solution-problems-6"), { throwOnError: false })
	
	// part 8
	await katex.render("x=-1", document.getElementById("problem-3-word-solution-problems-7"), { throwOnError: false })
 		
 	// $("problem-1-dropdown").html(`
 	// 	<h2>Rational Equations</h2>
 	// 	<div class='dropdown-btn' id='problem-1-dropdown'>
 	// 		<h3>Problem 1</h3>
 	// 	</div> 
 	// 	<div class='dropdown-btn' id='problem-2-dropdown'>
 	// 		<h3>Problem 2</h3>
 	// 	</div>
 	// `)		
}