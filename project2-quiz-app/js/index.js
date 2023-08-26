// 1. grabbing the bookmarks elements
const bookmarks = document.querySelectorAll('[data-js="question-card__icon"]');

const toggleBookmarkIcon = (event) => {
  // 4. assigning specific element to a variable
  const bookmarkIcon = event.target;

  // 5. toggling active class on the bookmarkIcon element
  bookmarkIcon.classList.toggle("active");
  // 6. check if "active" exists among classes of this element and assign it to a variable
  const isActive = bookmarkIcon.classList.contains("active");

  //7. check the condition and apply the relevant file to the source of the element
  if (isActive) {
    bookmarkIcon.src = "./img/bookmark-selected.svg";
  } else {
    bookmarkIcon.src = "./img/bookmark.svg";
  }
};

// 2. looping through the bookmarks
bookmarks.forEach((bookmarkIcon) => {
  // 3. once the bookmark is clicked, we call toggleBookmarkIcon function
  bookmarkIcon.addEventListener("click", toggleBookmarkIcon);
});


const answerButton = document.querySelectorAll(
  '[data-js="question-card__button"]'
);

answerButton.forEach((button) => {
  button.addEventListener("click", function (e) {
    const buttonEl = e.target;
    const answer = buttonEl.nextElementSibling;

    const isHidden = answer.classList.contains("question-card__answer--hidden")

    // If answer hidden, show it and change button text
    if (isHidden) {
      answer.classList.remove("question-card__answer--hidden");
      buttonEl.innerHTML = "Hide answer";
    } else {
      answer.classList.add("question-card__answer--hidden");
      buttonEl.innerHTML = "Answer";
    }
  });
});
