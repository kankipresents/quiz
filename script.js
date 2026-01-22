const quizData = [
    {
        q: "int a = 10 \nprintf(\"%d\", a);",
        options: [
            "Missing semicolon",
            "Wrong printf syntax",
            "Missing header file",
            "Invalid data type"
        ],
        answer: 0
    },
    {
        q: "printf(\"%f\", a);  // a is int",
        options: [
            "Missing semicolon",
            "Wrong format specifier",
            "Syntax error",
            "No error"
        ],
        answer: 1
    },
    {
        q: "main() \n{\n printf(\"Hello\");\n }",
        options: [
            "Missing return type",
            "Missing semicolon",
            "Missing header file",
            "No error"
        ],
        answer: 0
    },
    {
        q: "if(a = 5) \nprintf(\"True\");",
        options: [
            "Syntax error",
            "Assignment instead of comparison",
            "Missing braces",
            "printf error"
        ],
        answer: 1
    },
    {
        q: "for(i=0; i<=5; i++) \narr[i] = i;",
        options: [
            "Infinite loop",
            "Wrong condition",
            "Array index out of bounds",
            "Syntax error"
        ],
        answer: 2
    },
    {
        q: "int 2num = 10;",
        options: [
            "Missing semicolon",
            "Invalid variable name",
            "Wrong data type",
            "No error"
        ],
        answer: 1
    },
    {
        q: "while(i==10)\n { \nprintf(\"Hi\"); \n}",
        options: [
            "Infinite loop",
            "Condition never true",
            "Syntax error",
            "Missing increment"
        ],
        answer: 1
    },
    {
        q: "printf(\"Hello World\")",
        options: [
            "Missing semicolon",
            "Missing quotes",
            "Wrong function",
            "No error"
        ],
        answer: 0
    },
    {
        q: "if(a>b)\n printf(\"b is big\");  // a=5, b=10",
        options: [
            "Syntax error",
            "Wrong logic",
            "printf error",
            "Missing braces"
        ],
        answer: 1
    },
    {
        q: "#include <studio.h>",
        options: [
            "Wrong header file name",
            "Missing semicolon",
            "Syntax error",
            "No error"
        ],
        answer: 0
    }
];

let index = 0;
let score = 0;

const qNo = document.getElementById("question-number");
const qText = document.getElementById("question");
const optionsEl = document.getElementById("options");
const quizEl = document.getElementById("quiz");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    qNo.innerText = `Question ${index + 1} of ${quizData.length}`;
    qText.innerText = quizData[index].q;
    optionsEl.innerHTML = "";

    quizData[index].options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(i);
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(i) {
    if (i === quizData[index].answer) score++;
    nextQuestion();
}

function nextQuestion() {
    index++;
    if (index < quizData.length) {
        loadQuestion();
    } else {
        quizEl.classList.add("hide");
        resultEl.classList.remove("hide");
        scoreEl.innerText = `Your Score: ${score} / ${quizData.length}`;
    }
}

loadQuestion();
