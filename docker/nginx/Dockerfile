# Declare the argument for the Nginx version
ARG NGINX_VERSION

# Use the argument to choose the Nginx image
FROM nginx:${NGINX_VERSION}

# Copy the Nginx configuration
COPY docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf


# Exposer le port 80 (HTTP) et 443 (HTTPS si utilisé)
EXPOSE 80
# EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
