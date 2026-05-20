# Etapa 1: Compilar la aplicación de Angular
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build -- --configuration=production --output-path=publico

# Etapa 2: Servidor web
FROM nginx:1.25-alpine

RUN rm -rf /usr/share/nginx/html/*

# COPIA INTELIGENTE: Copia tanto si está en la raíz de publico como si está en publico/browser
COPY --from=build /app/publico/. /usr/share/nginx/html/
RUN if [ -d "/usr/share/nginx/html/browser" ]; then cp -r /usr/share/nginx/html/browser/* /usr/share/nginx/html/ && rm -rf /usr/share/nginx/html/browser; fi

# Configuración para evitar fallos de rutas dinámicas en Angular
RUN echo 'server { listen 80; location / { root /usr/share/nginx/html; index index.html; try_files $uri $uri/ /index.html; } }' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]