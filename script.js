function nextQuestion(value) {
  const answers = JSON.parse(sessionStorage.getItem('quizAnswers') || '[]');
  answers[index] = value;
  sessionStorage.setItem('quizAnswers', JSON.stringify(answers));

  if (index + 1 >= total) {
    location.href = `results.php?answers=${encodeURIComponent(JSON.stringify(answers))}`;
  } else {
    location.href = `?q=${index + 1}`;
  }
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