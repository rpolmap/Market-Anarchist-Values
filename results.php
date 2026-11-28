<?php
  $json = file_get_contents(__DIR__ . '/json/valuesvg.json');
  $data = json_decode($json, true);
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
    <div id="results">
  <script>
    const answers = JSON.parse(sessionStorage.getItem('quizAnswers') || '[]');
    const container = document.getElementById('results');
  </script>
  </body>
</html>
