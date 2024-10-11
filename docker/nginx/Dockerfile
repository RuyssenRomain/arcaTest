FROM nginx:1.21-alpine

# Copier le template de configuration pour injecter dynamiquement des configurations basées sur les variables d'environnement.
COPY ./docker/nginx/default.conf.template /etc/nginx/templates/default.conf.template

# Copier le script d'entrée = Permet de modifier la configuration de Nginx en fonction de l'environnement (developpement ou production).
COPY ./docker/nginx/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh


# Définir le script d'entrée
ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
