const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    if (question.classList.contains("is-open")) {
      question.classList.remove("is-open");
    } else {
      const questionOpen = document.querySelectorAll(".is-open");
      questionOpen.forEach((x) => {
        x.classList.remove("is-open");
      });
      question.classList.add("is-open");
    }
  });
});
