#!/bin/sh

# Afficher la valeur de APP_ENV pour débogage
echo "Valeur de APP_ENV : $APP_ENV"

# Initialiser la variable EXTRA_CONFIG
EXTRA_CONFIG=""

# Ajouter la configuration de proxy si en développement
if [ "$APP_ENV" = "developpement" ]; then
    echo "Ajout de la configuration du proxy pour le développement"

    EXTRA_CONFIG=$(cat <<'EOL'

    # Proxy pour HMR et fichiers JS/CSS en développement

    location /@vite/ {
        proxy_pass http://my-node-container:5173;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location ~* \.(js|css)$ {
        proxy_pass http://my-node-container:5173;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 300;  # Augmente le délai d'attente
    }
EOL
)
fi

# Remplacer le placeholder dans le template par EXTRA_CONFIG
sed -e "/# Configuration supplémentaire sera insérée ici/r /dev/stdin" -e "/# Configuration supplémentaire sera insérée ici/d" /etc/nginx/templates/default.conf.template <<EOF > /etc/nginx/conf.d/default.conf
$EXTRA_CONFIG
EOF

# Exécuter la commande CMD passée au conteneur
exec "$@"
