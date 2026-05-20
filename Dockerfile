# Etapa 1: Compilar la aplicación de Angular
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
# Forzamos que guarde el resultado en una carpeta limpia llamada 'dist-clean'
RUN npm run build -- --configuration=production --output-path=dist-clean

# Etapa 2: Servir con Nginx
FROM nginx:1.25-alpine

# Copiamos directamente desde nuestra carpeta limpia
COPY --from=build /app/dist-clean /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]