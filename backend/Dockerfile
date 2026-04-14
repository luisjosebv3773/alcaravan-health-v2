# Imagen base
FROM node:24-alpine AS builder

# Crear directorio de trabajo
WORKDIR /usr/src/app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código (aunque en dev será sobreescrito por el volumen)
COPY . .

# Exponer el puerto
EXPOSE 3000

# Comando por defecto para desarrollo
CMD ["npm", "run", "start:dev"]
