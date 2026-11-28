function nextQuestion() {
  window.location.href = `?q=${index + 1}`;
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
const raw = sessionStorage.getItem('quizAnswers');
if (raw && !new URLSearchParams(window.location.search).has('answers')) {
  window.location.replace(`results.php?answers=${encodeURIComponent(raw)}`);
}