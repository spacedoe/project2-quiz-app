const form = document.querySelector('[data-js="form"]');
const question = document.getElementById("form__question");
const tagColor = document.getElementById("tag-color");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  createNewCard(data.formQuestion, data.formAnswer, data.formTag);
  //   dataReset()
});

function createNewCard(question, answer, tag) {
  const newCard = document.createElement("section");
  newCard.classList = "new-card";
  form.append(newCard);

  const cardQuestion = document.createElement("h3");
  cardQuestion.textContent = question;
  cardQuestion.className = "new-card--question";
  newCard.append(cardQuestion);

  const cardAnswer = document.createElement("p");
  cardAnswer.textContent = answer;
  cardAnswer.classList = "new-card--answer";
  newCard.append(cardAnswer);

  const cardTag = document.createElement("p");
  cardTag.textContent = `#${tag}`;
  cardTag.classList = "new-card--tag";
  cardTag.style.backgroundColor = tagColor.value;
  newCard.append(cardTag);
}

const dataReset = () => {
  form.reset();
  question.focus();
};

const textArea1 = document.querySelector('[data-js="textarea1"]');
const textArea2 = document.querySelector('[data-js="textarea2"]');
// const textCount = document.querySelector('[data-js="textCountMessage"]');

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

  console.log(maxLength);
  console.log(currentLength);
};

textArea1.addEventListener("input", textCounting);
textArea2.addEventListener("input", textCounting);
