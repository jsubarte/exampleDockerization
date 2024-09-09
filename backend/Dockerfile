# Etapa 1: Build
FROM node:20-alpine AS build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos necesarios para instalar las dependencias y construir el proyecto
COPY . ./
COPY package.json ./

# Instala las dependencias de desarrollo y compila el proyecto
RUN npm install && npm run builddocker

# Copia los archivos que necesitas en la etapa final (dist, package.json, .env)
RUN cp package.json .env dist/

# Etapa 2: Construcción de la imagen final
FROM node:20-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia solo los archivos necesarios desde la etapa de build
COPY --from=build /app/dist /app

# Instala las dependencias de producción
RUN npm install --omit=dev

# Elimina los archivos listados
RUN rm -f package.json
RUN rm -f package-lock.json

# Establece el comando por defecto al iniciar el contenedor
CMD ["node", "app.js"]