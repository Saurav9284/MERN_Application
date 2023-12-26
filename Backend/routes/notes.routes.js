
const {Router} = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const {NoteModel} = require("../models/Note.model")


const notesController = Router();


notesController.get("/", async (req,res)=>{
    const notes = await NoteModel.find({createrId: req.body.createrId})
    res.send(notes);
})



notesController.post("/create", async (req,res)=>{
    const {Heading, Note , Tag, createrId} = req.body;
    const note = new NoteModel({
        Heading,
        Note,
        Tag,
        createrId
    })
    try {
        await note.save();
        res.send("Note Created!!")
    } catch (error) {
        res.send("Something went wrong")
        console.log(error)
    }
});


notesController.delete("/delete/:noteId", async (req,res)=> {
    const {noteId} = req.params;
    const deleteNote = await NoteModel.findOneAndDelete({_id: noteId, createrId: req.body.createrId})
    if(deleteNote){
        res.send("Deleted")
    }
    else{
        res.send("Not deleted")
    }
});


notesController.patch("/edit/:noteId", async (req,res)=> {
    const {noteId} = req.params;
    const editedNote = await NoteModel.findOneAndUpdate({_id: noteId, createrId: req.body.createrId},{...req.body})
    if(editedNote){
        res.send("Updated")
    }
    else{
        res.send("Not Updated")
    }
});

module.exports = {
    notesController
}