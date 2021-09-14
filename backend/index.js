const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3030;
const todoRoutes = require("./routes/todoRoutes")

const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/todos", todoRoutes);
const connectionOptions = {useUnifiedTopology:true,useNewUrlParser:true};

mongoose.connect("mongodb://localhost/todolist",connectionOptions)
    .then(()=>console.log("mongoose connected succesfully"))
    .catch((err)=>{
        console.error(err);
    })

app.listen(PORT, ()=>{
    console.log("The server is listening on port "+ PORT);
})