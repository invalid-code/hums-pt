export const problem_1_rational_inequalities = async (event) => {
 	event.preventDefault();
 	/* Act on the event */

 	$("#problem-1-dropdown").html(`
 		<h3>Problem 1</h3>
 		<div id="problem-1-rational-inequalities" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-1-rational-solution">Solution:</div>
 		<div id="problem-1-rational-solution-inequalities" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-1-rational-solution-inequalities-1" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-1-rational-solution-inequalities-2" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-1-rational-solution-inequalities-3" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-1-rational-solution-inequalities-4" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-1-rational-solution-inequalities-5" style="padding:10px; font-size: 20px;"></div>
 	`)
 		
 	// write the problem inequalities
	await katex.render("1+\\frac{x-5}{2}-\\frac{c+3}{5}\\le0", document.getElementById("problem-1-rational-problem-1-rational-inequalities"), { throwOnError: false})
		
	// solution
	// part 1
	await katex.render("(1+\\frac{x-5}{2}-\\frac{c+3}{5}\\le0)10", document.getElementById("problem-1-rational-solution-inequalities"), {	throwOnError: false	})
	 
	// part 2
	await katex.render("10+(x-5)2-(x+3)2\\le0", document.getElementById("problem-1-rational-solution-inequalities-1"), { throwOnError: false })
	
	// part 3
	await katex.render("10+5x-25-2x+6\\le0", document.getElementById("problem-1-rational-solution-inequalities-2"), { throwOnError: false })
	
	// part 4
	await katex.render("3x-9+9\\le0+9", document.getElementById("problem-1-rational-solution-inequalities-3"), { throwOnError: false })
	
	// part 5
	await katex.render("\\frac{3x}{3}\\le\\frac{9}{3}", document.getElementById("problem-1-rational-solution-inequalities-4"), { throwOnError: false })
	
	// part 6
	await katex.render("x\\le9", document.getElementById("problem-1-rational-solution-inequalities-5"), { throwOnError: false })
	
 	// $("problem-1-dropdown").html(`
 	// 	<h2>Rational inequalities</h2>
 	// 	<div class='dropdown-btn' id='problem-1-dropdown'>
 	// 		<h3>Problem 1</h3>
 	// 	</div> 
 	// 	<div class='dropdown-btn' id='problem-2-dropdown'>
 	// 		<h3>Problem 2</h3>
 	// 	</div>
 	// `)		
}

export const problem_2_rational_inequalities = async (event) => {
	event.preventDefault();
	// state = false
	if (state !== true) {
		state = true;
		$("#problem-2-dropdown").html(`
		<h3>Problem 2</h3>
 		<div id="problem-2-rational-inequalities" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-2-rational-solution">Solution:</div>
 		<div id="problem-2-rational-solution-inequalities" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-2-rational-solution-inequalities-1" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-2-rational-solution-inequalities-2" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-2-rational-solution-inequalities-3" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-2-rational-solution-inequalities-4" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-2-rational-solution-inequalities-5" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-2-rational-solution-inequalities-6" style="padding:10px; font-size: 20px;"></div>
 		<div id="problem-2-rational-solution-inequalities-7" style="padding:10px; font-size: 20px;"></div>
 	`);
	} else {
 		state = false
 		$("problem-1-dropdown").html(`
 			<h2>Rational inequalities</h2>
 			<div class='dropdown-btn' id='problem-1-dropdown'>
 				<h3>Problem 1</h3>
 			</div> 
 			<div class='dropdown-btn' id='problem-2-dropdown'>
 				<h3>Problem 2</h3>
 			</div>
 		`);
 	};
 			
 	// write the problem inequalities 2
 	katex.render("\\frac{x-3}{x-2}-\\frac{x-5}{x-3}>0", document.getElementById("problem-2-rational-inequalities"), { throwOnError: false });

	katex.render("\\frac{x-3}{x-2}-\\frac{x-5}{x-3}+\\frac{x-5}{x-3}>0+\\frac{x-5}{x-3}", document.getElementById("problem-2-rational-solution-inequalities"), { throwOnError: false });

	katex.render("(x-3)(x-3)>(x-2)(x-5)", document.getElementById("problem-2-rational-solution-inequalities-1"), { throwOnError: false });
	
	katex.render("x^2-6x+9>x^2+10x+10", document.getElementById("problem-2-rational-solution-inequalities-2"), { throwOnError: false });

	katex.render("0>4x+1", document.getElementById("problem-2-rational-solution-inequalities-3"), { throwOnError: false });

	katex.render("4x>+1", document.getElementById("problem-2-rational-solution-inequalities-4"), { throwOnError: false });

	katex.render("\\frac{4x}{4}>\\frac{1}{4}", document.getElementById("problem-2-rational-solution-inequalities-5"), { throwOnError: false });

	katex.render("x>\\frac{1}{4}", document.getElementById("problem-2-rational-solution-inequalities-5"), { throwOnError: false });
};