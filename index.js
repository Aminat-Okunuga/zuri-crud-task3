//connect to http
const http = require("http")
//connect to heroku
const cors= require("cors")
 //connect database
const connectDB =require("./dB")
//connect to environment port number
const { PORT } = process.env; 
//connect to mongoose
const mongoose = require("mongoose"); 
//connect to express
const express = require("express");
//allows us  to the environment variable in .env
require('dotenv').config() 
 
const userSchema = require("./dB/model")

//connect to database
connectDB()

// intialize express
const app = express()

 // initialize middleware
app.use(express.json())

//get all data
app.get('/', async (req, res) => {
    const data = await userSchema.find()
    if (data) {
        res.status(200).send({status:"success", data})
    } else { res.status(500).send({ error: 'Something went wrong!' })}

})

// find a data
// exports.getSingleEntry = async (req, res) => {
//     const newData = await model.findById(req.params.id);
//     res.status(200).json(newData);
//   };
  

//get single data
app.get('/:id', async (req, res) => {
    const data = await userSchema.findById(req.params.id)
    if (data) {
        res.status(200).send({status:"success", data})
    } else { res.status(500).send({ error: 'Something went wrong!' })}

})

//create data
app.post('/', async (req, res) => {
    console.log(req.body)
    const newData = await userSchema.create(req.body)

    if (newData) {
        res.status(200).send({status:"Record created successfully!", newData})
    } else { res.status(500).send({ error: 'Something went wrong!' })}

})


//update data
app.patch('/:id', async (req, res) => {
    const newData = await userSchema.findByIdAndUpdate(req.params.id, req.body,{new:true});
    if (newData) {
        res.status(200).send({ status: "Update successfully!", newData })
    } else { res.status(500).send({ error: 'Something went wrong!' }) }

});


//delete data
app.delete('/:id', async (req, res) => {
	const newData = await userSchema.findByIdAndDelete(req.params.id, req.body);
	res.status(200).json("Entry has been Deleted successfully!");
});


const port = process.env.PORT || PORT
//to listen to port number
app.listen(port, () => {
    console.log(`app running on port ${port}`)  
})










