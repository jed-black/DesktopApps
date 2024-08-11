# Use a Node.js base image
FROM node:16

# Install dependencies required for Electron and GUI rendering
RUN apt-get update && apt-get install -y \
    xvfb \
    libgtk-3-0 \
    libgbm-dev \
    libasound2 \
    libnss3 \
    libxss1 \
    libgconf-2-4 \
    libxtst6 \
    libx11-xcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxi6 \
    libxtst6 \
    libxrandr2 \
    libgl1-mesa-glx \
    libatk-bridge2.0-0 \
    libgbm1 \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

RUN npm run build

# Command to run the application
CMD ["npm", "start"]
