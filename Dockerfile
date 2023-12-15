# Utilizar una imagen oficial de Node como imagen base
FROM node:14 as build-stage

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el archivo 'package.json' y 'package-lock.json' (si está disponible)
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar los archivos del proyecto al directorio de trabajo
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Etapa de producción
FROM nginx:stable as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
