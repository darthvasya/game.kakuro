FROM nginx:alpine

# Copy game files to nginx html directory
COPY . /usr/share/nginx/html

# Remove Dockerfile and docker-compose from served files
RUN rm -f /usr/share/nginx/html/Dockerfile /usr/share/nginx/html/docker-compose.yml

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

