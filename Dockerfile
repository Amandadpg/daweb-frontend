# Etapa 1: Compilar la aplicación de Angular
FROM node:20-alpine AS build
WORKDIR /app

# Copiar archivos de dependencias y descargarlas
COPY package*.json ./
RUN npm ci

# Copiar el resto del código y compilar para producción
COPY . .
RUN npm run build -- --configuration=production

# Etapa 2: Servir la aplicación con Nginx (Servidor Web)
FROM nginx:1.25-alpine

# Copiar los archivos compilados de Angular a la carpeta pública de Nginx
# NOTA: Revisa si en tu carpeta 'dist/' el resultado se guarda directamente o dentro de otra carpeta
COPY --from=build /app/dist/frontend-ies/browser /usr/share/nginx/html

# Copiar configuración básica si fuera necesario, o exponer el puerto por defecto
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]