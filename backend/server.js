const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database")

// Config

dotenv.config({path:"backend/config/config.env"});

    
// Connecting to databse

connectDatabase()


app.listen(process.env.PORT,()=>{
    console.log(`Server is wokring on http://localhost:${process.env.PORT}`)
})