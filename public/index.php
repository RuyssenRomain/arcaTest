<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" type="image/x-icon" href="/favicon.ico">
        <title>Arcadia Zoo Application</title> 

        <?php if ($_ENV['APP_ENV'] === 'developpement'): ?>
                <!-- Scripts pour le développement avec Vite et HMR -->
                <script type="module" src="http://localhost:5173/@vite/client"></script>
                <script type="module" src="http://localhost:5173/js/main.js"></script>
        <?php else: ?>
            <!-- Fichiers CSS et JS compilés pour la production -->
            <link rel="stylesheet" href="/dist/main.css">
            <script type="module" src="/dist/main.js"></script>
        <?php endif; ?>
    </head>
    <body class="w-full h-screen bg-emerald-500">
        <div class="text-center text-white">
            <h1 class="text-3xl font-bold underline p-14">Hello, Tailwind CSS avec Vite et PHP !</h1>
            <p>Ceci est un test </p>
        </div>   
    </body>
</html> 
