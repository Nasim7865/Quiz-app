const newQuizdata=[
    {
        question:"which language runs in a web browsers? ",
        a:"java",
        b:"c++",
        c:"javascript",
        d:"python",
        correct:"c",
    },
    {
        question:"What does css stands for?",
        a:"central style sheets",
        b:"Cascading style sheets",
        c:"Cascading simple sheets",
        d:"Car savs sailboats",
        correct:"b",
    },
    {
        question:"What does HTML stands for ?",
        a:"Hypertext machine language",
        b:"Hypertext markdown language",
        c:"Hypertext markup language",
        d:"Helicopter Terminals Motarboats Lamboriginis",
        correct:"c",
    },
    {
        question:"In which year javascript language launched",
        a:"1994",
        b:"1998",
        c:"1995",
        d:"none of them",
        correct:"c",
    },
    {
        question:"What is the formula of JS ?",
        a:"java standard",
        b:"java simple",
        c:"java script",
        d:"java language",
        correct:"c",
    },
];
  const quiz = document.getElementById("quiz");
  const answerele = document.querySelectorAll(".answer");
  const questionele= document.getElementById("question");
  const a_text= document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text= document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitButton = document.getElementById("submit");

let crrQuiz= 0;
let score =0;

function loadQuiz(){
    deselectAnswers();

const crrQuizdata = newQuizdata[crrQuiz];
questionele.innerText= crrQuizdata.question;
a_text.innerText= crrQuizdata.a;
b_text.innerText= crrQuizdata.b;
c_text.innerText= crrQuizdata.c;
d_text.innerText= crrQuizdata.d;
}
function deselectAnswers(){
    answerele.forEach((answereEl) => (answereEl.checked=false));
}
function getSelected(){
    let answer;
    answerele.forEach((answerEl)=> {
        if (answerEl.checked){
            answer=answerEl.id;
        }});
        return answer;
}
submitButton.addEventListener('click',()=>{
    const answer = getSelected();
    if (answer){
        if(answer===newQuizdata[crrQuiz].correct){
            score++;
        }
        crrQuiz++;
        if(crrQuiz<newQuizdata.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML= `<h2> You answerd ${score}/${newQuizdata.length} questions correctly </h2>
            <button onclick= "location.reload()">Reload </button>`;
        }
    }
});
loadQuiz();