FROM nginx:1.21-alpine

# Copier la configuration Nginx
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf

# Exposer le port Nginx
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
