<?php
  $json = file_get_contents(__DIR__ . '/json/valuesvg.json');
  $data = json_decode($json, true);
  $answers = json_decode($_GET['answers'] ?? '[]', true);
  if (!is_array($answers)) {
  $answers = [];
  }
?>
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset=utf-8>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Results</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h2>MAValues</h2>
   <?php if (count($answers) > 0): ?>
      <div class="resultrow">
        <?php foreach($answers as $value): ?>
          <div class="result-item">
            <?php echo htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8'); ?>
          </div>
        <?php endforeach; ?>
      </div>
    <?php endif; ?>
  </body>
</html>
