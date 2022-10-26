import { problem_1_rational_equation, problem_2_rational_equation } from "./rational_equation.js";
import { problem_1_rational_inequalities, problem_2_rational_inequalities } from "./rational_inequalities.js";
import { problem_1_word_problems, problem_2_word_problems, problem_3_word_problems } from "./rational_inequalities.js";

$(document).ready(() => {

	$("#rational-equations-link").click(() => {
			
		// back link
		$(".problem-header-links").html("<a href='/' id='back'>Back</a>");

		// shows dropdown content
		$("main").html(`
 			<h2>Rational Equations</h2>
 			<div class='dropdown-btn' id='problem-1-dropdown'>
 				<h3>Problem 1</h3>
 			</div> 
 			<div class='dropdown-btn' id='problem-2-dropdown'>
 				<h3>Problem 2</h3>
 			</div>`
 		);

 		$("#problem-1-dropdown > h3").click(problem_1_rational_equation);		
		$("#problem-2-dropdown > h3").click(problem_2_rational_equation);
	});

	$("#rational-inequalities-link").click(() => {
		// back link
		$(".problem-header-links").html("<a href='/' id='back'>Back</a>");

		// shows dropdown content
		$("main").html(`
 			<h2>Rational Inequalities</h2>
 			<div class='dropdown-btn' id='problem-1-dropdown'>
 				<h3>Problem 1</h3>
 			</div> 
 			<div class='dropdown-btn' id='problem-2-dropdown'>
 				<h3>Problem 2</h3>
 			</div>`
 		);

 		$("#problem-1-dropdown > h3").click(problem_1_rational_inequalities);		
		$("#problem-2-dropdown > h3").click(problem_2_rational_inequalities);
		
	});

	$("#word-problems-link").click(() => {
		// back link
		$(".problem-header-links").html("<a href='/' id='back'>Back</a>");

		// shows dropdown content
		$("main").html(`
 			<h2>Word Problems</h2>
 			<div class='dropdown-btn' id='problem-1-dropdown'>
 				<h3>Problem 1</h3>
 			</div> 
 			<div class='dropdown-btn' id='problem-2-dropdown'>
 				<h3>Problem 2</h3>
 			</div>
			<div class='dropdown-btn' id='problem-2-dropdown'>
 				<h3>Problem 2</h3>
 			</div>
 			`
 		);

 		$("#problem-1-dropdown > h3").click(problem_1_word_problems);		
		$("#problem-2-dropdown > h3").click(problem_2_word_problems);
		$("#problem-3-dropdown > h3").click(problem_3_word_problems);		
	});
});