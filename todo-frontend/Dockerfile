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
FROM node:14-alpine AS run
WORKDIR /usr/src/app

# Create a new user and group with UID/GID 1000
RUN addgroup -g 1001 nodeuser && adduser -u 1001 -G nodeuser -D nodeuser

# Copy built files from the previous stage
COPY --from=build /usr/src/app/build ./build
COPY --from=build /usr/src/app/package*.json ./

# Change ownership of the working directory to the newly created user
RUN chown -R nodeuser:nodeuser /usr/src/app

# Switch to the newly created user
USER nodeuser

# Expose port 3000
EXPOSE 3000

# Command to run the production build of the React application
CMD ["npm", "start"]
