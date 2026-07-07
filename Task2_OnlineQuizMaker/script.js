let quiz = [];
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

function addQuestion(){

    const question = document.getElementById("question").value;

    const options = [
        document.getElementById("option1").value,
        document.getElementById("option2").value,
        document.getElementById("option3").value,
        document.getElementById("option4").value
    ];

    const answer =
    parseInt(document.getElementById("correctAnswer").value);

    quiz.push({
        question,
        options,
        answer
    });

    alert("Question Added!");

    document.getElementById("question").value="";
    document.getElementById("option1").value="";
    document.getElementById("option2").value="";
    document.getElementById("option3").value="";
    document.getElementById("option4").value="";
}

function startQuiz(){

    if(quiz.length===0){
        alert("Add at least one question");
        return;
    }

    document.getElementById("createQuiz").style.display="none";
    document.getElementById("quizSection").style.display="block";

    loadQuestion();
}

function loadQuestion(){

    const q = quiz[currentQuestion];

    document.getElementById("quizQuestion").innerText=q.question;

    let html="";

    q.options.forEach((option,index)=>{
        html += `
        <div class="option"
        onclick="selectAnswer(${index})">
        ${option}
        </div>`;
    });

    document.getElementById("options").innerHTML=html;
}

function selectAnswer(index){
    selectedAnswer=index;
}

function nextQuestion(){

    if(selectedAnswer===quiz[currentQuestion].answer){
        score++;
    }

    selectedAnswer=null;
    currentQuestion++;

    if(currentQuestion<quiz.length){
        loadQuestion();
    }
    else{
        showResult();
    }
}

function showResult(){

    document.getElementById("quizSection").style.display="none";
    document.getElementById("result").style.display="block";

    document.getElementById("score").innerText =
    `Your Score: ${score}/${quiz.length}`;
}

function showCreateQuiz(){
    document.getElementById("createQuiz").style.display="block";
}