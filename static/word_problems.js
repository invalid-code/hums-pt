export const problem_1_word_problems = async (event) => {
 	event.preventDefault();
 	/* Act on the event */

 	$("#problem-1-dropdown").html(`
 		<h3>Problem 1</h3>
 		<div id="problem-1-rational-equations" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-1-rational-solution">Solution:</div>
 		<div id="problem-1-rational-solution-equation" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-1-rational-solution-equation-1" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-1-rational-solution-equation-2" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-1-rational-solution-equation-3" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-1-rational-solution-equation-4" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-1-rational-solution-equation-5" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-1-rational-solution-equation-6" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-1-rational-solution-equation-7" style="padding:10px; font-size: 20px;"></div>
 	`)
 		
 	// write the problem equation
	await katex.render("\\frac{1}{x-1}+\\frac{1}{x+1}=\\frac{4x+2}{x^2-1-1}", document.getElementById("problem-1-rational-problem-1-rational-equations"), { throwOnError: false})
		
	// solution
	// part 1
	await katex.render("(\\frac{1}{x-1}+\\frac{1}{x+1}=\\frac{4x+2}{x^2-1})(x+1)(x-1)", document.getElementById("problem-1-rational-solution-equation"), {	throwOnError: false	})
	 
	// part 2
	await katex.render("(\\frac{(x+1)(x-1)}{x-1}+\\frac{(x+1)(x-1)}{x+1}=\\frac{4x+2(x-1)(x+1)}{x^2-1})", document.getElementById("problem-1-rational-solution-equation-1"), { throwOnError: false })
	
	// part 3
	await katex.render("\\frac{(x+1)\\cancel{(x-1)}}{\\cancel{x+1}}+\\frac{(x-1)\\cancel{(x+1)}}{\\cancel{x+1}}=\\frac{4x+2\\cancel{(x-1)(x+1)}}{\\cancel{x^2-1}}", document.getElementById("problem-1-rational-solution-equation-2"), { throwOnError: false })
	
	// part 4
	await katex.render("x+1+x-1=4x+2", document.getElementById("problem-1-rational-solution-equation-3"), { throwOnError: false })
	
	// part 5
	await katex.render("2x=4x+2", document.getElementById("problem-1-rational-solution-equation-4"), { throwOnError: false })
	
	// part 6
	await katex.render("2x-2x-2=4x-2x+2-2", document.getElementById("problem-1-rational-solution-equation-5"), { throwOnError: false })
	
	// part 7
	await katex.render("\\frac{-2}{2}=\\frac{2x}{2}", document.getElementById("problem-1-rational-solution-equation-6"), { throwOnError: false })
	
	// part 8
	await katex.render("x=-1", document.getElementById("problem-1-rational-solution-equation-7"), { throwOnError: false })
 		
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

export const problem_2_word_problems = async (event) => {
	event.preventDefault();
	// state = false
	if (state !== true) {
		state = true;
		$("#problem-2-dropdown").html(`
		<h3>Problem 2</h3>
 		<div id="problem-2-rational-equations" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-2-rational-solution">Solution:</div>
 		<div id="problem-2-rational-solution-equation" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-2-rational-solution-equation-1" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-2-rational-solution-equation-2" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-2-rational-solution-equation-3" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-2-rational-solution-equation-4" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-2-rational-solution-equation-5" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-2-rational-solution-equation-6" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-2-rational-solution-equation-7" style="padding:10px; font-size: 20px;"></div>
 	`);
	} else {
 		state = false
 		$("problem-1-dropdown").html(`
 			<h2>Rational Equations</h2>
 			<div class='dropdown-btn' id='problem-1-dropdown'>
 				<h3>Problem 1</h3>
 			</div> 
 			<div class='dropdown-btn' id='problem-2-dropdown'>
 				<h3>Problem 2</h3>
 			</div>
 		`);
 	};
 			
 	// write the problem equation 2
 	katex.render("1-\\frac{1-x}{3x+1}-\\frac{x^2-1+1}{3x^2-1-2x-1}=0", document.getElementById("problem-2-rational-equations"), { throwOnError: false });

	katex.render("1-\\frac{1-x}{3x+1}-\\frac{\\cancel{(x-1)}(x+1)}{(3x+1)\\cancel{(x-1)}}=0", document.getElementById("problem-2-rational-solution-equation"), { throwOnError: false });

	katex.render("(1-\\frac{1-x}{3x+1}-\\frac{x+1}{3x+1}=0)3x+1", document.getElementById("problem-2-rational-solution-equation-2"), { throwOnError: false });
	
	katex.render("(1-\\frac{1-x\\cancel{(3x+1)}}{3x+1}-\\frac{x+1\\cancel{(3x+1)}}{\\cancel{3x+1}}=0)3x+1", document.getElementById("problem-2-rational-solution-equation-2"), { throwOnError: false });
};

export const problem_3_word_problems = async (event) => {
 	event.preventDefault();
 	/* Act on the event */

 	$("#problem-1-dropdown").html(`
 		<h3>Problem 1</h3>
 		<div id="problem-1-rational-equations" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-1-rational-solution">Solution:</div>
 		<div id="problem-1-rational-solution-equation" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-1-rational-solution-equation-1" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-1-rational-solution-equation-2" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-1-rational-solution-equation-3" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-1-rational-solution-equation-4" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-1-rational-solution-equation-5" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-1-rational-solution-equation-6" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-1-rational-solution-equation-7" style="padding:10px; font-size: 20px;"></div>
 	`)
 		
 	// write the problem equation
	await katex.render("\\frac{1}{x-1}+\\frac{1}{x+1}=\\frac{4x+2}{x^2-1-1}", document.getElementById("problem-1-rational-problem-1-rational-equations"), { throwOnError: false})
		
	// solution
	// part 1
	await katex.render("(\\frac{1}{x-1}+\\frac{1}{x+1}=\\frac{4x+2}{x^2-1})(x+1)(x-1)", document.getElementById("problem-1-rational-solution-equation"), {	throwOnError: false	})
	 
	// part 2
	await katex.render("(\\frac{(x+1)(x-1)}{x-1}+\\frac{(x+1)(x-1)}{x+1}=\\frac{4x+2(x-1)(x+1)}{x^2-1})", document.getElementById("problem-1-rational-solution-equation-1"), { throwOnError: false })
	
	// part 3
	await katex.render("\\frac{(x+1)\\cancel{(x-1)}}{\\cancel{x+1}}+\\frac{(x-1)\\cancel{(x+1)}}{\\cancel{x+1}}=\\frac{4x+2\\cancel{(x-1)(x+1)}}{\\cancel{x^2-1}}", document.getElementById("problem-1-rational-solution-equation-2"), { throwOnError: false })
	
	// part 4
	await katex.render("x+1+x-1=4x+2", document.getElementById("problem-1-rational-solution-equation-3"), { throwOnError: false })
	
	// part 5
	await katex.render("2x=4x+2", document.getElementById("problem-1-rational-solution-equation-4"), { throwOnError: false })
	
	// part 6
	await katex.render("2x-2x-2=4x-2x+2-2", document.getElementById("problem-1-rational-solution-equation-5"), { throwOnError: false })
	
	// part 7
	await katex.render("\\frac{-2}{2}=\\frac{2x}{2}", document.getElementById("problem-1-rational-solution-equation-6"), { throwOnError: false })
	
	// part 8
	await katex.render("x=-1", document.getElementById("problem-1-rational-solution-equation-7"), { throwOnError: false })
 		
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