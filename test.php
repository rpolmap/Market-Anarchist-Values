<?php
  $json = file_get_contents(__DIR__ . '/json/test.json');
  $data = json_decode($json, true);
  $categories = $data['categories'] ?? [];
  $index = (int) ($_GET['q'] ?? 0);
  if (isset($categories[$index])) {
    $category = $categories[$index];
  } else {
    header('Location: results.php');
    exit;
  }
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
    <script src="script.js" defer></script>
  </head>
  <body>
    <div class="question">
      <?php echo $category['text']; ?>
    </div>
    <?php foreach ($category['answers'] as $answer): ?>
      <button class="tbtn"
        data-value="<?php echo $answer['value'] ?? ''; ?>"
        onclick="nextQuestion(this.dataset.value)"
      >
        <?php echo $answer['text']; ?>
      </button>
    <?php endforeach; ?>
    <button class="back" onclick="handleBack()">←Back</button>
    <script>
      const index = <?php echo $index; ?>;
    </script>
  </body>
</html>