<?php

require __DIR__ . '/../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__.'/../'); 
$dotenv->load();
var_dump($_ENV['APP_ENV']);

?>

<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" type="image/x-icon" href="/favicon.ico">
        <title>Test Tailwind CSS avec Vite et PHP</title> 
       

        <?php if ($_ENV['APP_ENV'] === 'developement'): ?>
                <script type="module" src="http://localhost:5173/@vite/client"></script>
                <script type="module" src="http://localhost:5173/main.js"></script>

        <?php else: ?>
            <link rel="stylesheet" href="/public/dist/main.js">
            <script type="module" src="/public//dist/main.js"></script>
        <?php endif; ?>
    </head>
    <body class="w-full h-screen bg-emerald-700">
        <div class="text-center text-blue-600">
            <h1 class="text-3xl font-bold underline">Hello, Tailwind CSS avec Vite et PHP !</h1>
            <p>Ceci est un test </p>
        </div>   
    </body>
</html>
