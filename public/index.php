<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Tailwind CSS avec Vite et PHP</title>

    <?php if ($_ENV['APP_ENV'] === 'development'): ?>
        <!-- En mode développement, on charge les fichiers directement depuis Vite -->
        <script type="module" src="http://localhost:5173/@vite/client"></script>
        <script type="module" src="http://localhost:5173/main.js"></script>
    <?php else: ?>
        <!-- En production, on charge les fichiers optimisés via le manifest -->
        <?php
        $manifest = json_decode(file_get_contents(__DIR__ . '/../dist/manifest.json'), true);
        ?>
        <link rel="stylesheet" href="/dist/<?= $manifest['main.css']['file'] ?>">
        <script type="module" src="/dist/<?= $manifest['main.js']['file'] ?>"></script>
    <?php endif; ?>
</head>
<body>
    <div class="text-center text-blue-600">
        <h1>Hello, Tailwind CSS avec Vite et PHP !</h1>
        <p>Ceci est injecté dynamiquement par PHP</p>
    </div>
</body>
</html>
