const form = document.querySelector(".quiz-form");
const resultContainer = document.querySelector(".result-container");
const correctQuestions = ["D", "C", "A", "B"];

let score = 0;

const inseriTxtInSpan = (value, text) =>
  (value.querySelector("span").textContent = `${text}`);

const resultAnimation = (n, max) => {
  const cont = setInterval(() => {
    if (n === max) {
      clearInterval(cont);
    }
    inseriTxtInSpan(resultContainer, n + "%");
    n++;
  }, 10);
};

const getUserAnswers = () =>
  correctQuestions.map((_, index) => form[`inputQuestion${index + 1}`].value);

const finalResult = (answersQuestions) => {
  answersQuestions.forEach((answerQuestion, index) => {
    const verification = answerQuestion === correctQuestions[index];
    if (verification) {
      score += 25;
    }
  });
};

const explainResult = () => {
  resultContainer.classList.remove("d-none");
  scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const answersQuestion = getUserAnswers();
  finalResult(answersQuestion);
  explainResult();
  resultAnimation(0, score);
});
