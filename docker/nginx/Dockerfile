# Declare the argument for the Nginx version
ARG NGINX_VERSION

# Use the argument to choose the Nginx image
FROM nginx:${NGINX_VERSION}

# Copy the Nginx configuration
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf


# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
