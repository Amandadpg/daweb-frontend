# Etapa 1: Compilar la aplicación de Angular
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build -- --configuration=production

# Etapa 2: Servir con Nginx
FROM nginx:1.25-alpine

# Buscamos dónde demonios ha dejado Angular el index.html y copiamos todo ese contenido
# Este comando copia la carpeta exacta que contiene el compilado real de Angular
COPY --from=build /app/dist/frontend-ies/. /usr/share/nginx/html/

# Por si acaso tu versión lo ha metido en una subcarpeta browser, hacemos un doble check:
RUN if [ -d "/usr/share/nginx/html/browser" ]; then cp -r /usr/share/nginx/html/browser/* /usr/share/nginx/html/ && rm -rf /usr/share/nginx/html/browser; fi

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]