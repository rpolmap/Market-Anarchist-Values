FROM php:8.4-cli
WORKDIR /app
COPY . .
CMD ["sh", "-c", "php -S 0.0.0.0:${PORT:-8080}"]
