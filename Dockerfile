# Gunakan base image Node.js versi terbaru
FROM node:latest

# Set working directory di dalam container
WORKDIR /app

# Copy package.json dan package-lock.json (jika ada)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy seluruh kode aplikasi ke dalam container
COPY . .

# Expose port yang akan digunakan oleh aplikasi (misalnya 3000)
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "start"] 
