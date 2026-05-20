# Etapa 1: Compilar la aplicación de Angular
FROM node:20-alpine AS build
WORKDIR /app

# Copiar archivos de dependencias y descargarlas
COPY package*.json ./
RUN npm ci

# Copiar el resto del código y compilar para producción
COPY . .
RUN npm run build -- --configuration=production

# Etapa 2: Servir la aplicación estática con Nginx
FROM nginx:1.25-alpine

# Copiar los archivos directamente desde la raíz dist del proyecto
COPY --from=build /app/dist/frontend-ies /usr/share/nginx/html

# Exponer el puerto por defecto de Nginx
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]