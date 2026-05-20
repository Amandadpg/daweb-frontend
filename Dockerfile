# Etapa 1: Compilar la aplicación de Angular
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
# Forzamos a Angular a meter la compilación en una carpeta fija llamada "publico"
RUN npm run build -- --configuration=production --output-path=publico

# Etapa 2: Servidor web automático
FROM nginx:1.25-alpine

# Borramos la pantalla por defecto de Nginx para que NO pueda salir nunca más
RUN rm -rf /usr/share/nginx/html/*

# Copiamos los archivos directamente desde la carpeta fija que creamos arriba
# El punto al final indica que copie todo el contenido suelto dentro de Nginx
COPY --from=build /app/publico/. /usr/share/nginx/html/

# Ponemos la configuración mágica para que Nginx no falle con las rutas de Angular
RUN echo 'server { listen 80; location / { root /usr/share/nginx/html; index index.html; try_files $uri $uri/ /index.html; } }' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]