<?php>
  
?>
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset=utf-8>
    <title>Quiz</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="question">
      {{ question }}
    </div>
      <button class="back" onclick="handleBack()">←Back</button>
    <script>
      function handleBack() {
        if (index > 0) {
          previousQuestion();
        } else {
          window.location.href = "index.html";
        }
      }
    </script>
  </body>
</html>
