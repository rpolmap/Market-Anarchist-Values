function nextQuestion(value) {
  location.href = `?q=${index + 1}`;
}
function previousQuestion() {
  window.location.href = `?q=${index - 1}`;
}
function handleBack() {
  if (index > 0) {
    previousQuestion();
      } else {
        window.location.href = "index.html";
      }
}