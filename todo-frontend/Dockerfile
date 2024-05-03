# Stage 1: Build React Application
FROM node:14-alpine AS build
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if exists) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application
RUN npm run build

# Stage 2: Production Image
FROM nginx:alpine

# Create a new user and group for running Nginx
RUN addgroup -g 1001 nginxuser && adduser -D -H -u 1001 -G nginxuser nginxuser

# Set ownership of Nginx directories to the new user
RUN chown -R nginxuser:nginxuser /var/cache/nginx /var/run /var/log/nginx /etc/nginx/conf.d

# Copy build files from the build stage
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 3000

# Switch to the new user
USER nginxuser

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
