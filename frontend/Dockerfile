# Etapa 1: Construcción
FROM node:20-alpine AS builder
# Establecer el directorio de trabajo
WORKDIR /app
# Copiar los archivos de configuración y dependencias
COPY package*.json ./
# Instalar las dependencias
RUN npm install
# Copiar el resto de la aplicación
COPY . .
# Construir la aplicación
RUN npm run build

# Etapa 2: Servidor Nginx
FROM nginx:alpine
# Copiar los archivos construidos desde la etapa anterior
COPY --from=builder /app/dist /usr/share/nginx/html
# Copiar la configuración personalizada de Nginx
COPY ./config/nginx.conf.template /etc/nginx/templates/nginx.conf.template
# Reemplazo variables de entorno en el archivo de configuracion de Nginx
CMD /bin/sh -c "envsubst '\$VITE_SERVER_NAME \$BACKEND_HOST \$BACKEND_PORT' < /etc/nginx/templates/nginx.conf.template > /etc/nginx/conf.d/default.conf"
# Exponer el puerto 80
EXPOSE 80
# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]