const { json } = require("express");
const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const cors = require('cors');

const app=express();
dotenv.config();

app.use(cors());


app.get("/",(req,res) => {
res.send("<h1>aDKLL</h1>"); 
});

app.get("/api/notes",(req,res) => {
res.json(notes);
});

app.get("/api/notes/:id",(req,res)=>{
    const note=notes.find((el)=>el._id==req.params.id)
    res.json(note)
})

const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`server ready port: ${PORT}`));