//Loads config, boots up the app and listen on specified ports

const app = require('./src/app') //Import the main express app

require('dotenv').config(); //load env variables

const PORT = process.env.PORT;

app.listen(PORT, ()=>{

    console.log(`server is running on http://localhost:${PORT}`) //start the server

})