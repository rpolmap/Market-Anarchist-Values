<?php
  $json = file_get_contents(__DIR__ . '/json/test.json');
  $data = json_decode($json, true);
  $categories = $data['categories'] ?? [];
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
    <?php foreach ($categories as $category): ?>
      <div class="question">
        <?php echo $category['text']; ?>
      </div>
        <?php endforeach; ?>
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