// Questions that will be asked
const Questions = [{
	q: "Who represents the Magician Arcana in Persona 4 Golden?",
	a: [{ text: "Chie Satonaka", isCorrect: false },
	{ text: "Kanji Tatsumi", isCorrect: false },
	{ text: "Yosuke Hanamura", isCorrect: true },
	{ text: "Ai Ebihara", isCorrect: false }
	]

},
{
	q: "Who represents the Hanged Man Arcana in Persona 4 Golden?",
	a: [{ text: "Teddie", isCorrect: false, isSelected: false },
	{ text: "Rise Kujikawa", isCorrect: false },
	{ text: "Kanji Tatsumi", isCorrect: false },
	{ text: "Naoki Konishi", isCorrect: true }
	]

},
{
	q: "Who is not part of the investigation team in Persona 4 Golden?",
	a: [{ text: "Teddie", isCorrect: false },
	{ text: "Yukiko Amagi", isCorrect: false },
	{ text: "Nanako Dojima", isCorrect: true },
	{ text: "Naoto Shirogane", isCorrect: false }
	]

}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
