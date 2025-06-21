 # use Node 20

FROM node:20-alpine 
# working Directory
WORKDIR /app
# copy package file to install dependencies
COPY package*.json ./

# install dependencies  
RUN npm install

#copy the rest of the project files
COPY . .

# ensure upload folder exist
RUN mkdir -p upload

#Expose Port
EXPOSE 4000

#default command 
CMD ["npx", "node", "server.js"]