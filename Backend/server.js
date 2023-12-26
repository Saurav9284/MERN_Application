 
const express = require('express');
const { connection,PORT} = require('./Config/db');
const {userController} = require("./routes/user.route");
const {authentication} = require("./Middlewares/authentication")
const {notesController} = require("./routes/notes.routes")


 const app = express();

 app.use(express.json());

 app.use(cors());

 app.get("/", (req,res)=> {
    res.send("Home page");
 })

 app.use("/user",userController)
 app.use(authentication)
 app.use("/notes",notesController)

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