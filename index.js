
const http = require("http")//connect to http
const cors= require("cors")//connect to heroku
const connectDB =require("./dB") //connect database
const { PORT } = process.env; //connect to environment port number
const mongoose = require("mongoose"); //connect to mongoose
const express = require("express");//connect to express
require('dotenv').config() //allows us  to the environment variable in .env
 
const userSchema = require("./dB/model")
//connect to database

connectDB()

// intialize express
const app = express()
 
app.use(express.json())// initialize middleware

//app.use(express.json({ extended: false }))

//a basic express route 
app.get('/', async (req, res) => {
    const myData = await userSchema.find()
    //const myData=""
    if (myData) {
        res.status(200).send({status:"success",myData})
    } else { res.status(500).send({ error: 'Something went wrong!' })}

    
    
    
})


//create data
app.post('/', async (req, res) => {
    console.log(req.body)
    const newData = await userSchema.create(req.body)

    if (newData) {
        res.status(200).send({status:"success",newData})
    } else { res.status(500).send({ error: 'Something went wrong!' })}

})


//to update data
app.patch('/:id', async (req, res) => {
    const newData = await userSchema.findByIdAndUpdate(req.params.id, req.body,{new:true});
    if (newData) {
        res.status(200).send({ status: "success", newData })
    } else { res.status(500).send({ error: 'Something went wrong!' }) }

});


//to delete data
app.delete('/:id', async (req, res) => {
	const newData = await userSchema.findByIdAndDelete(req.params.id, req.body);
	res.status(200).json("Entry has been Deleted successfully");
});


const port = process.env.PORT || PORT
//to listen to port number
app.listen(port, () => {
    console.log(`app running on port ${port}`)  
})










