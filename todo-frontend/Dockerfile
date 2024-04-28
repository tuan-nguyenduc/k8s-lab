# Use a Node.js base image with a specific version
FROM node:14-alpine

# Create a new user and group with UID/GID 1000
RUN addgroup -g 1001 nodeuser && adduser -u 1001 -G nodeuser -D nodeuser

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if exists) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Change ownership of the working directory to the newly created user
RUN chown -R nodeuser:nodeuser /usr/src/app

# Switch to the newly created user
USER nodeuser

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Command to run the production build of the React application
CMD ["npm", "start"]
