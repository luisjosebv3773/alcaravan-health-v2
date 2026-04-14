# Imagen base
FROM node:24-alpine

# Crear directorio de trabajo
WORKDIR /usr/src/app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el código
COPY . .

# Exponer el puerto de Vite
EXPOSE 5173

# Ejecutar Vite y permitir conexiones externas
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
