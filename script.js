const questions = [
  {
    que: "What is JavaScript?",
    a: "JavaScript is a scripting language used to make the website interactive",
    b: "JavaScript is an assembly language used to make the website interactive",
    c: "JavaScript is a compiled language used to make the website interactive",
    d: "None of the mentioned",
    correct: "a",
  },
  {
    que: "Which of the following is correct about JavaScript?",
    a: "JavaScript is a High-level language",
    b: "JavaScript is Assembly-language",
    c: "JavaScript is an Object-Oriented language",
    d: "JavaScript is an Object-Based language",
    correct: "d",
  },
  {
    que: "Among the given statements, which statement defines closures in JavaScript?",
    a: "JavaScript is a function that is enclosed with references to its inner function scope",
    b: "JavaScript is a function that is enclosed with references to its lexical environment",
    c: "JavaScript is a function that is enclosed with the object to its inner function scope",
    d: "None of the mentioned",
    correct: "b",
  },
];
let totalQuestions = questions.length;
console.log(totalQuestions);

let right = 0;
let wrong = 0;

const queBox = document.getElementById("queBox");

let index = 0;
const inputOptions = document.querySelectorAll(".options");

const submitQuiz = () => {
  const data = questions[index];
  let ans = getAns();
  if (index == totalQuestions -1 ) {

    if (ans == data.correct) {
      right++;
    } else {
      wrong++;
    }
    endQuiz();

  } else {
    reset();
    if (ans == data.correct) {
      right++;
    } else {
      wrong++;
    }
    index++;
    loadQuestions();
  }
  console.log("check", ans == data.correct, " index : - ", index);
  console.log(questions.length, "right", right);
};
const loadQuestions = () => {
  const data = questions[index];
  queBox.innerText = `${index + 1}) ${data.que}`;
  inputOptions[0].nextElementSibling.innerText = data.a;
  inputOptions[1].nextElementSibling.innerText = data.b;
  inputOptions[2].nextElementSibling.innerText = data.c;
  inputOptions[3].nextElementSibling.innerText = data.d;
};

const getAns = () => {
  let answer;
  inputOptions.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};
const reset = () => {
  inputOptions.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  document.getElementById("box").innerHTML = `
    <h1>Thank you for participating in the quiz<h1\>
    ${right}/${totalQuestions} are correct 
    <style>
    #box {
        padding: 20px;
        background-color: #f2f2f2;
        border: 1px solid #ccc;
        text-align: center;
        font-family: Arial, sans-serif;
    }

    h1 {
        font-size: 24px;
        color: #333;
        margin-bottom: 10px;
    }

    p {
        font-size: 18px;
        color: #666;
        margin-bottom: 20px;
    }
</style>
`;
};
// initial call
loadQuestions();
