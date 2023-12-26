 
const express = require('express');
const { connection,PORT} = require('./Config/db');
const {userController} = require("./routes/user.route");


 const app = express();

 app.use(express.json());

 app.get("/", (req,res)=> {
    res.send("Home page");
 })

 app.use("/user",userController);
 

 app.listen(PORT, async () => {
    try {
        await connection;
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log("Failed to coneect to mongoDB")
        console.log(error)
    }

    console.log(`Listening on , ${PORT}`);
 })