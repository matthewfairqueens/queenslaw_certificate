currentQuestion = 0;
quizStc = [
	{
		"question" : "What's your idea of a perfect night?",
		"answers" : [
			[
				"A quiet night at home",
				["2","1","3","4","0"]
			],
			[
				"Writing, painting, or otherwise creating",
				["3","2","1","0","4"]
			],
			[
				"Planning your future successes",
				["4","0","3","2","1"]
			],
			[
				"Trying a new restaurant",
				["1","2","4","0","3"]
			],
			[
				"Time with friends",
				["0","4","3","1","2"]
			],
		],
		"response" : []
	},
	{
		"question" : "Choose a superpower:",
		"answers" : [
			[
				"Flight",
				["1","2","4","0","3"]
			],
			[
				"Reading minds",
				["1","0","2","3","4"]
			],
			[
				"Invulnerability",
				["3","2","1","4","0"]
			],
			[
				"Super-Intelligence",
				["4","3","2","0","1"]
			],
			[
				"Mind control",
				["0","4","3","2","1"]
			],
		],
		"response" : []
	},
	{
		"question" : "What motivates you?",
		"answers" : [
			[
				"Money",
				["4","0","3","2","1"]
			],
			[
				"Job satisfaction",
				["3","4","2","1","0"]
			],
			[
				"Work/life balance",
				["0","4","3","2","1"]
			],
			[
				"Family",
				["1","3","0","4","2"]
			],
			[
				"Creative freedom",
				["3","1","2","0","4"]
			],
		],
		"response" : []
	},
	{
		"question" : "How do you solve a problem?",
		"answers" : [
			[
				"Hire somebody to solve it",
				["4","0","2","3","1"]
			],
			[
				"Invent a solution",
				["3","2","1","0","4"]
			],
			[
				"Ask others for help",
				["0","4","3","1","2"]
			],
			[
				"Do without or work around it",
				["1","3","2","4","0"]
			],
			[
				"Research it exhaustively",
				["1","3","4","2","0"]
			],
		],
		"response" : []
	},
	{
		"question" : "If somebody gave you $5000, how would you spend it?",
		"answers" : [
			[
				"Start a new small business",
				["4","0","1","2","3"]
			],
			[
				"Support a charity",
				["1","4","0","3","2"]
			],
			[
				"Put it in long-term savings",
				["3","1","2","4","0"]
			],
			[
				"Plan a vacation",
				["2","3","4","0","1"]
			],
			[
				"Buy new tools, instruments, or art supplies",
				["2","3","0","1","4"]
			],
		],
		"response" : []
	},
	{
		"question" : "What do you do at parties?",
		"answers" : [
			[
				"Learn as much as I can about everyone I talk to",
				["4","3","0","1","2"]
			],
			[
				"Talk to people who look as uncomfortable as I am",
				["0","4","1","3","2"]
			],
			[
				"Seek out interesting people to chat with",
				["2","3","4","0","1"]
			],
			[
				"Find people I know and spend my time with them",
				["1","2","3","4","0"]
			],
			[
				"Start a singalong, group activity, or conga line",
				["3","2","1","0","4"]
			],
		],
		"response" : []
	},
	{
		"question" : "What's the most important thing about a new idea?",
		"answers" : [
			[
				"Will it succeed and be profitable?",
				["4","1","2","3","0"]
			],
			[
				"Will it help people?",
				["0","4","1","2","3"]
			],
			[
				"Does it lead to new inventions or ideas?",
				["3","2","4","0","1"]
			],
			[
				"Does it support something I value?",
				["1","3","0","4","2"]
			],
			[
				"Is it out-of-the-box creative and different?",
				["2","0","1","3","4"]
			],
		],
		"response" : []
	},
	{
		"question" : "Your friend has a problem at work. What do you do?",
		"answers" : [
			[
				"Encourage them to strike out on their own",
				["4","1","3","0","2"]
			],
			[
				"Empathize and console them",
				["2","4","0","3","1"]
			],
			[
				"Ask if they've considered switching careers",
				["1","3","4","2","0"]
			],
			[
				"Tell them to stick with it and weather the storm",
				["0","2","1","4","3"]
			],
			[
				"Come up with ideas to solve it",
				["3","0","2","1","4"]
			],
		],
		"response" : []
	},
	{
		"question" : "What's a must-have quality for a new friend?",
		"answers" : [
			[
				"Knowledge and skills I don't have",
				["4","3","2","0","1"]
			],
			[
				"Compassion and empathy",
				["1","4","2","3","0"]
			],
			[
				"Openness to adventure",
				["2","1","4","0","3"]
			],
			[
				"Traditional and shared values",
				["0","2","3","4","1"]
			],
			[
				"Creativity and expressiveness",
				["3","0","1","2","4"]
			],
		],
		"response" : []
	},
	{
		"question" : "What's your leadership style?",
		"answers" : [
			[
				"Dynamic: I'm out front and providing vision",
				["4","0","3","1","2"]
			],
			[
				"I make sure everyone feels valued and can contribute",
				["3","4","2","0","1"]
			],
			[
				"I seek consensus, but everyone knows I'm in charge",
				["2","1","4","3","0"]
			],
			[
				"I set achievable goals with firm deadlines",
				["0","2","1","4","3"]
			],
			[
				"I set as few restrictions and rules as possible",
				["1","0","3","2","4"]
			],
		],
		"response" : []
	},
];




function buildQuiz() {
	output = '';
	
	for (var i=0;i<quizStc.length;i++) {
		output = output + '<div class="quizQuestion" id="question' + i +'"><h3>Question ' + (i + 1) + ' of 10: ' +quizStc[i]["question"] + '</h3><div class="quizAnswers">';
		for (var j=0;j<5;j++) {
			output = output + '<input name="question' + i + '" type="radio" value="' + quizStc[i]["answers"][j][1] + '" onclick="quizStc[' + i + '][\'response\'] = this.value.split(\',\'); currentQuestion++; changeQuestion();"> ' + quizStc[i]["answers"][j][0] + '</input></br>';
		}
		output = output + '</div><a onclick="currentQuestion--; changeQuestion();" class="button -small -blue -left">Previous</a><a onclick="currentQuestion++; changeQuestion();" class="button -small -blue -right">Next</a></div>';
	}
	output = output + '<div style="display: none;" id="quizResults"></div>';
	$('#certificateBundleQuiz').html(output);
	changeQuestion();

}

function changeQuestion() {
	$('.quizQuestion').hide();
	$('#question'+currentQuestion).show();
	if (currentQuestion==10) {
		calculateResults();
	}
}

function calculateResults() {
	tally = {
		"Entrepreneur" : {"answers" : [], "total" : 0, "courses" : "<h3>Corporate / Business</h3> <p>Whether you're a start-up entrepreneur or a captain of industry, knowledge of the law is essential for success in business. Your career will intersect with the law in a variety of ways, and we have the perfect set of courses to prepare you for success no matter what path you choose.</p> <p><strong>Introduction to Canadian Law:</strong> Learn the basics of legal essentials that will serve you well for the rest of your career, including property, contracts and torts.<br /> <strong>Workplace Law:</strong> If you're planning for success, you’re planning to hire. Learn the ins and outs of the law as it applies to work.<br /> <strong>Corporate Law:</strong> The obvious must for somebody with an interest in business. Get in-depth information about business structures, contracts, governance, and more.<br /> <strong>Intellectual Property:</strong> The modern business lives and dies on IP: learn about how to create and protect a brand with trademarks, and the basis for other intangible assets like copyrights, patents and trade secrets.</p>"},
		"Changemaker" : {"answers" : [], "total" : 0, "courses" : ""},
		"Globetrotter" : {"answers" : [], "total" : 0, "courses" : ""},
		"Concerned Citizen" : {"answers" : [], "total" : 0, "courses" : ""},
		"Creative" : {"answers" : [], "total" : 0, "courses" : ""}
	};
	for (var i=0;i<quizStc.length;i++) {
		tally['Entrepreneur']['answers'][i] = quizStc[i]['response'][0];
		tally['Changemaker']['answers'][i] = quizStc[i]['response'][1];
		tally['Globetrotter']['answers'][i] = quizStc[i]['response'][2];
		tally['Concerned Citizen']['answers'][i] = quizStc[i]['response'][3];
		tally['Creative']['answers'][i] = quizStc[i]['response'][4];
		tally['Entrepreneur']['total'] = tally['Entrepreneur']['total'] + parseInt(quizStc[i]['response'][0]);
		tally['Changemaker']['total'] = tally['Changemaker']['total'] + parseInt(quizStc[i]['response'][1]);
		tally['Globetrotter']['total'] = tally['Globetrotter']['total'] + parseInt(quizStc[i]['response'][2]);
		tally['Concerned Citizen']['total'] = tally['Concerned Citizen']['total'] + parseInt(quizStc[i]['response'][3]);
		tally['Creative']['total'] = tally['Creative']['total'] + parseInt(quizStc[i]['response'][4]);
	}
	winner = { "total" : 0 , "type" : ''}
	for (personType in tally) {
		if (tally[personType]['total'] > winner['total']) {
			winner['total'] = tally[personType]['total'];
			winner['type'] = personType;
		}
	}
	console.log(tally);
	console.log(winner);
	$('#quizResults').show().html('According to our computers you should take' + tally[personType]['courses']);
}


function waitfor$() {
	if (!window.$) {
		setTimeout(waitfor$, 50);
	} else {
		$;
		buildQuiz();
	}
}

waitfor$();

