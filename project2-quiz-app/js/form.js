const form = document.querySelector('[data-js="form"]');
const question = document.getElementById("form__question");
const tagColor = document.getElementById("tag-color");
const main = document.querySelector('[data-js="main"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  createNewCard(data.formQuestion, data.formAnswer, data.formTag);
  dataReset();
});

function createNewCard(question, answer, tag) {
  const newCard = document.createElement("section");
  newCard.classList = "new-card";
  main.append(newCard);

  const cardQuestion = document.createElement("h3");
  cardQuestion.textContent = question;
  cardQuestion.className = "new-card__question";
  newCard.append(cardQuestion);

  const cardAnswer = document.createElement("p");
  cardAnswer.textContent = answer;
  cardAnswer.classList = "new-card__answer";
  newCard.append(cardAnswer);

  const cardTag = document.createElement("p");
  cardTag.textContent = `#${tag}`;
  cardTag.classList = "new-card__tag";
  cardTag.style.backgroundColor = tagColor.value;
  newCard.append(cardTag);
}

const dataReset = () => {
  form.reset();
  question.focus();
  resetTextCount()

};

const textArea1 = document.querySelector('[data-js="textarea1"]');
const textArea2 = document.querySelector('[data-js="textarea2"]');

let textCounting = (e) => {
  const textArea = e.currentTarget;
  const maxLength = textArea.getAttribute("maxlength");
  const currentLength = textArea.value.length;
  const remaining = maxLength - currentLength;
  const textCountMessage = textArea.nextElementSibling;
  
  if (remaining === 1) {
    textCountMessage.textContent = `${remaining} character left`;
  } else {
    textCountMessage.textContent = `${remaining} characters left`;
  }
  
  
};

textArea1.addEventListener("input", textCounting);
textArea2.addEventListener("input", textCounting);


const textCountMessage1 = document.querySelector('[data-js="textCountMessage1"]')
const textCountMessage2 = document.querySelector('[data-js="textCountMessage2"]')

function resetTextCount() {
  textCountMessage1.textContent = "150 characters left"
  textCountMessage2.textContent = "150 characters left"
}
